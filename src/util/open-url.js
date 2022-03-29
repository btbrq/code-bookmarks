/*global chrome*/
export const openUrl = (e, url) => {
    window.close();
    if (!e.ctrlKey && !e.shiftKey && !e.metaKey && !e.altKey) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var tab = tabs[0];
            chrome.tabs.update(tab.id, { url: url });
        });
    }
}
