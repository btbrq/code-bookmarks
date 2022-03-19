/*global chrome*/
import { useEffect, useState } from 'react';
import './App.css';
import { Input, Space } from 'antd';
import { SettingFilled, SearchOutlined } from '@ant-design/icons';
import { getBookmarksComponent, openFile } from './util'

const App = () => {
  // const { Search } = Input;
  const onSearch = value => console.log(value);
  const [bookmarks, setBookmarks] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      chrome.storage.local.get(['codeBookmarks'], function (result) {
        if (result.codeBookmarks) {
          setLoaded(true);
          const newLocal = JSON.parse(result.codeBookmarks);
          setBookmarks(newLocal);
        }
      });
    }
  });

  const bookmarksComponent = getBookmarksComponent(loaded, bookmarks);

  return (
    <div className="App">
      <Space direction="horizontal">
        {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 }} /> */}
        <Input
          placeholder="Search bookmarks"
          style={{ width: 300, borderRadius: 25 }}
          allowClear
          onChange={onSearch}
          suffix={
              <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          }
        />
        <SettingFilled onClick={openFile} />
      </Space>
      <div>
        {bookmarksComponent}
      </div>
    </div>
  );
}

export default App;
