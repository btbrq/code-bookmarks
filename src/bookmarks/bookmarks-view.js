import { Divider } from 'antd';
import BookmarksGroup from './bookmarks-group';

const BookmarksView = (props) => {
  const { bookmarks } = props;

  const comp = bookmarks.map(b => {
    return (
      <div>
        {
          b.bookmarksGroups.map(g => {
            return (<BookmarksGroup group={g.group} bookmarks={g.bookmarks} />)
          })
        }
      </div>
    )
  });

  return (
    <div>
      {comp}
    </div>
  );
}

export default BookmarksView;
