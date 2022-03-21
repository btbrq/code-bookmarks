import { Divider, Button } from 'antd';
import { openUrl } from '../util';

const BookmarksItem = (props) => {
    const { item, appendDivider } = props;

    return (
        <>
            <Button
                href={item.url}
                onClick={(e) => {
                    openUrl(e, item.url);
                }}
                type="primary" shape="round" danger style={{ marginBottom: 10 }}>
                {item.title}
            </Button>
            {appendDivider &&
                <Divider type="vertical" />
            }
        </>
    );
}

export default BookmarksItem;
