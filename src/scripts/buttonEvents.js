export function handleCopyButtonClick() {
  console.log('copybtn clicked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "startSelection"});
      console.log(tabs[0].id)
    });
  }

export function handleSendButtonClick() {
  const commentInput = document.getElementById('commentInput').value;
  sendCommentRequest(commentInput, (err,data) => {
    if(err){
      console.error('Failed to send data:', err);
    }
    else{
      document.getElementById('step1').style.display = 'none';
      document.getElementById('step2').style.display = 'flex';
      updateSuggestionBtn(data);
      updateOriginalCommentDisplay(commentInput, data);

    }
  })
}

export function handleReturnButtonClick(){
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step1').style.display = 'flex';
}

function sendCommentRequest(commentInput, callback){
  const api_url = 'http://localhost:3000';
  const api_path = '/api/openai';
  fetch(api_url+api_path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"originalComment": commentInput})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    callback(null, data); // 成功时调用回调函数，没有错误，返回数据
  })
  .catch((error) => {
    console.error('Error:', error);
    callback(error); // 错误时调用回调函数，传递错误对象
  });
}

function updateSuggestionBtn(suggestions){
  const button1 = document.getElementById('suggestion1');
  const button2 = document.getElementById('suggestion2');
  const button3 = document.getElementById('suggestion3');

  button1.textContent = suggestions.suggestion_1 || "Place Holder";
  button2.textContent = suggestions.suggestion_2 || "Place Holder";
  button3.textContent = suggestions.suggestion_3 || "Place Holder";

  button1.setAttribute('data-translation', suggestions.translation_1 || "No translation available");
  button2.setAttribute('data-translation', suggestions.translation_2 || "No translation available");
  button3.setAttribute('data-translation', suggestions.translation_3 || "No translation available");
}

function updateOriginalCommentDisplay(commentInput, suggestions){
  const originalComment = document.getElementById('originalCommentDisplay')
  const translatedComment = document.getElementById('translatedCommentDisplay')
  originalComment.textContent = commentInput
  if(suggestions.translation_0){
    translatedComment.textContent = suggestions.translation_0
  }
  else translatedComment.textContent = ''

}
