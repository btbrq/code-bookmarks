import { Divider } from 'antd';

const BookmarksItem = (props) => {
    const { item, appendDivider } = props;

    return (
        <>
            <a href={item.url}
            // onClick={() => onUrlClick(this, b.url)}
            // onClick={() => openUrl(b.url)}
            // onClick={() => window.close()}
            >
                {item.title}
            </a>
            {appendDivider &&
                <Divider type="vertical" />
            }

        </>
    );
}

export default BookmarksItem;
