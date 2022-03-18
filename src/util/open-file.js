    /*global chrome*/
export const openFile = async () => {
    const [fileHandle] = await window.showOpenFilePicker();

    const file = await fileHandle.getFile();
    const contents = await file.text();

    chrome.storage.local.set({codeBookmarks: contents}, function() {
        console.log('Value is set to ' + contents);
    });
}
