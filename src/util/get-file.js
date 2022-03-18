/*global chrome*/
export const getBookmarksFile = async () => {
   var bookmarks = []
   if (chrome.storage) {
    chrome.storage.local.get(['codeBookmarks'], function (result) {
         return result.codeBookmarks;
      });
   }
   return bookmarks;
}
