console.log("background.js has been loaded successfully.");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request) {
        console.log(`Recieved color change request, change color to => ${request.color}`);
        sendResponse({farewell: "再見"});
      }
      return true; // 表示你將異步響應
  });
  