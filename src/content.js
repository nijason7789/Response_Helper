function startElementSelection() {
    document.body.style.cursor = 'crosshair';
  
    function selectElement(event) {
      event.preventDefault();
      const element = event.target;
      const elementHtml = element.outerHTML;
  
      // 將選中的元素發送回擴展
      chrome.runtime.sendMessage({action: "elementCopied", html: elementHtml});
  
      document.body.style.cursor = 'default';
      document.removeEventListener('click', selectElement);
    }
  
    document.addEventListener('click', selectElement, {once: true});
  }
  
  // 監聽來自 popup 的消息
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "startSelection") {
      startElementSelection();
    }
  });