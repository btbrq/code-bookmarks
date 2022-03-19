import { Divider, Tabs } from 'antd';
import BookmarksGroup from './bookmarks-group';

const BookmarksView = (props) => {
  const { bookmarks } = props;
  const { TabPane } = Tabs;

  const bookmarksGroups = (groups) => {
    return groups.map(g => {
      return (<BookmarksGroup group={g.group} bookmarks={g.bookmarks} />)
    });
  }

  const comp = bookmarks.length > 1 ? (
    <Tabs type="card" defaultActiveKey="0">
      {
        bookmarks.map((b, i) => {
          return (
            <TabPane tab={b.category} key={i} style={{ maxHeight: 300, overflow: "auto"}} tabBarStyle={{color: "red"}}>
              {bookmarksGroups(b.bookmarksGroups)}
            </TabPane>
          )
        })
      }
    </Tabs>
  ) : (
    <div style={{ maxHeight: 300, overflow: "auto" }}>
      {bookmarksGroups(bookmarks[0].bookmarksGroups)}
    </div>
  )

  return (
    <div>
      {comp}
    </div>
  );
}

export default BookmarksView;
