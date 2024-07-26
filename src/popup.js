import { handleSendButtonClick, handleReturnButtonClick, handleMoreButtonClick, handleSuggestionBtnClick } from "./scripts/buttonEvents.js";
import { setupMessageListener } from './scripts/messageHandler.js'
const sendBtn = document.getElementById('sendButton');
const returnBtn = document.getElementById('returnButton');
const moreBtn = document.getElementById('moreButton');
const suggestionBtns = document.querySelectorAll('.actionButton');

sendBtn.addEventListener('click', handleSendButtonClick);
returnBtn.addEventListener('click',handleReturnButtonClick);
moreBtn.addEventListener('click', handleMoreButtonClick);

suggestionBtns.forEach(btn => {
    btn.addEventListener('click', handleSuggestionBtnClick);
});

setupMessageListener();

