import { handleCopyButtonClick, handleSendButtonClick, handleReturnButtonClick } from "./scripts/buttonEvents.js";
import { setupMessageListener } from './scripts/messageHandler.js'
const copyBtn = document.getElementById('copyButton')
const sendBtn = document.getElementById('sendButton')
const returnBtn = document.getElementById('returnButton')

copyBtn.addEventListener('click', handleCopyButtonClick);
sendBtn.addEventListener('click', handleSendButtonClick);
returnBtn.addEventListener('click',handleReturnButtonClick);

setupMessageListener();

