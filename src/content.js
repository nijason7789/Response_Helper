console.log("content.js has been loaded successfully.");
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.color) {
        console.log("改變頁面背景顏色為: " + msg.color);
        document.body.style.backgroundColor = msg.color;
    }
});