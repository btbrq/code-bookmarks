/*global chrome*/
import { useEffect, useState } from 'react';
import './App.css';
import { Input, Space, Tooltip } from 'antd';
import { SettingFilled, SearchOutlined } from '@ant-design/icons';
import { filterBookmarks, getBookmarksComponent, openFile } from './util'

const App = () => {
  const [bookmarks, setBookmarks] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      getBookmarksFromStorage()
    }
  });

  const openBookmarksFile = async () => {
    await openFile()
    await getBookmarksFromStorage()
  }

  const getBookmarksFromStorage = () => {
    chrome.storage.local.get(['codeBookmarks'], function (result) {
      if (result.codeBookmarks) {
        setLoaded(true);
        const newLocal = JSON.parse(result.codeBookmarks);
        setBookmarks(newLocal);
      }
    });
  }

  const onSearch = (e) => {
    if (loaded && bookmarks.length > 0) {
      setBookmarks(filterBookmarks(e.target.value, bookmarks));
    }
  }

  const bookmarksComponent = getBookmarksComponent(loaded, bookmarks);

  return (
    <div className="App">
      <Space direction="horizontal" style={{ padding: 20 }}>
        <Input
          placeholder="Search bookmarks"
          style={{ width: 300, borderRadius: 25 }}
          allowClear
          onChange={onSearch}
          suffix={
            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          }
        />
        <Tooltip title="Select the file with bookmarks">
          <SettingFilled onClick={openBookmarksFile} />
        </Tooltip>
      </Space>
      <div style={{ marginTop: -10 }}>
        {bookmarksComponent}
      </div>
    </div>
  );
}

export default App;
