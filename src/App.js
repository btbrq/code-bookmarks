/*global chrome*/
import { useEffect, useState } from 'react';
import './App.css';
import { Input, Space } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { getBookmarksFile, openFile } from './util'

const App = () => {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  const [bookmarks, setBookmarks] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      chrome.storage.local.get(['codeBookmarks'], function (result) {
        if (result.codeBookmarks) {
          const newLocal = JSON.parse(result.codeBookmarks);
          setLoaded(true);
          setBookmarks(newLocal);
        }
      });
    }
  });

  console.log(bookmarks)
  
  const bks = bookmarks && bookmarks.map(b => b.category)

  return (
    <div className="App">
      <Space direction="horizontal">
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <SettingFilled onClick={openFile} />
      </Space>
        Test React2222
        <div>
          {bks}
        </div>
    </div>
  );
}

export default App;
