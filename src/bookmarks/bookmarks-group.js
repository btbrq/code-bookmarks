import { Divider } from 'antd';
import BookmarksItem from './bookmarks-item';

const BookmarksGroup = (props) => {
    const { group, bookmarks } = props;

    const comp = (
        <>
            <Divider orientation="left" style={{"font-size": "14px", "border-top-color": "red"}}>
                {group}
            </Divider>
            <>
                {
                    bookmarks.map((b, i) => {
                        return (<BookmarksItem item={b} appendDivider={i < bookmarks.length - 1} />)
                    })
                }
            </>
        </>
    )

    return (
        <div>
            {comp}
        </div>
    );
}

export default BookmarksGroup;
