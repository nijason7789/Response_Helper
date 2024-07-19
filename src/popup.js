import { handleCopyButtonClick, handleSendButtonClick, handleReturnButtonClick } from "./scripts/buttonEvents.js";

const copyBtn = document.getElementById('copyButton')
const sendBtn = document.getElementById('sendButton')
const returnBtn = document.getElementById('returnButton')

copyBtn.addEventListener('click', handleCopyButtonClick);
sendBtn.addEventListener('click', handleSendButtonClick);
returnBtn.addEventListener('click',handleReturnButtonClick);

document.getElementById('moreButton').addEventListener('click', function() {
    console.log("More button clicked");
});

// document.getElementById('copyButton').addEventListener('click', function() {
//     console.log("Copy button clicked");
//     document.body.style.cursor = 'crosshair';
//     document.addEventListener('click', selectElement, { once: true });
//     event.stopPropagation();

// });
