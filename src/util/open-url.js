    /*global chrome*/
export const openUrl = (url) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: url});
    });
}
