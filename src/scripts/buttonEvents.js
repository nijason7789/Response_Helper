import {sendCommentRequest, sendMoreCommentRequest} from './api/sendApi.js';

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

export function handleMoreButtonClick(){
  const originalComment = document.getElementById('originalCommentDisplay').textContent;
  const suggestion_1 = document.getElementById('suggestion1').textContent;
  const suggestion_2 = document.getElementById('suggestion2').textContent;
  const suggestion_3 = document.getElementById('suggestion3').textContent;
  const moreComment = {
    "originalComment":originalComment,
    "Suggestion_1":suggestion_1,
    "Suggestion_2":suggestion_2,
    "Suggestion_3":suggestion_3
  }
  sendMoreCommentRequest(moreComment, (err,data) => {
    if(err){
      console.error('Failed to send data:', err);
    }
    else{
      updateSuggestionBtn(data);
      updateOriginalCommentDisplay(moreComment.originalComment, data);

    }
  })
}

export function handleSuggestionBtnClick(){
  navigator.clipboard.writeText(event.target.textContent)
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
