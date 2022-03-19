import { Divider, Button } from 'antd';

const BookmarksItem = (props) => {
    const { item, appendDivider } = props;

    return (
        <>
            {/* <a href={item.url}
            // onClick={() => onUrlClick(this, b.url)}
            // onClick={() => openUrl(b.url)}
            // onClick={() => window.close()}
            >
                {item.title}
            </a> */}
            <Button href={item.url} type="primary" shape="round" danger style={{marginBottom: 10}}> 
                {item.title}
             </Button>
            {appendDivider &&
                <Divider type="vertical" />
            }

        </>
    );
}

export default BookmarksItem;
