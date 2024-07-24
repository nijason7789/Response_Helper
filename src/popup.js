import { handleCopyButtonClick, handleSendButtonClick, handleReturnButtonClick, handleMoreButtonClick } from "./scripts/buttonEvents.js";
import { setupMessageListener } from './scripts/messageHandler.js'
const copyBtn = document.getElementById('copyButton')
const sendBtn = document.getElementById('sendButton')
const returnBtn = document.getElementById('returnButton')
const moreBtn = document.getElementById('moreButton')

copyBtn.addEventListener('click', handleCopyButtonClick);
sendBtn.addEventListener('click', handleSendButtonClick);
returnBtn.addEventListener('click',handleReturnButtonClick);
moreBtn.addEventListener('click', handleMoreButtonClick);

setupMessageListener();

