chrome.tabs.onActivated.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.tabId},
        files: [ "script.js" ],
    }).then(() => console.log("script injected"));
});