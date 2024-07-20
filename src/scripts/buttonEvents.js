export function handleCopyButtonClick() {
  console.log('copybtn clicked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "startSelection"});
      console.log(tabs[0].id)
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