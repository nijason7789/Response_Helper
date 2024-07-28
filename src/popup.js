import { handleWelcomeButtonClick, handleSendButtonClick, handleReturnButtonClick, handleMoreButtonClick, handleSuggestionBtnClick } from "./scripts/buttonEvents.js";
const welcomeBtn = document.getElementById('welcomeButton');
const sendBtn = document.getElementById('sendButton');
const returnBtn = document.getElementById('returnButton');
const moreBtn = document.getElementById('moreButton');
const suggestionBtns = document.querySelectorAll('.actionButton');

welcomeBtn.addEventListener('click',handleWelcomeButtonClick);
sendBtn.addEventListener('click', handleSendButtonClick);
returnBtn.addEventListener('click',handleReturnButtonClick);
moreBtn.addEventListener('click', handleMoreButtonClick);

suggestionBtns.forEach(btn => {
    btn.addEventListener('click', handleSuggestionBtnClick);
});


