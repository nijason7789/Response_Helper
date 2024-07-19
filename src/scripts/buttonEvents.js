export function handleCopyButtonClick() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "startSelection"});
    });
  }

export function handleSendButtonClick() {
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'flex';
}

export function handleReturnButtonClick(){
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step1').style.display = 'flex';
}