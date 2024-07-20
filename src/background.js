console.log("background.js has been loaded successfully.");
// 監聽擴展安裝或更新事件
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed or updated:', details.reason);
});

// 監聽來自 content scripts 或 popup 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'elementCopied') {
    console.log('Copied element: (Msg from background.js)', request.text);
  }
  return true;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "hello") {
      console.log("Greeting from content script received.");
      sendResponse({farewell: "goodbye"});
    }
  }
);

// 監聽標籤頁更新事件
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab updated:', tabId, tab.url);
    // 這裡可以在頁面加載完成後執行一些操作
  }
});

// 添加右鍵菜單項（如果需要）
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyElement",
    title: "複製元素",
    contexts: ["all"]
  });
});

// 處理右鍵菜單點擊事件
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyElement") {
    chrome.tabs.sendMessage(tab.id, { action: "startSelection" });
  }
});

// 可以添加其他需要在後台持續運行的邏輯
  