console.log('Content script has been injected into the page.');
setupMessageListener();

function startElementSelection() {
  document.body.style.cursor = 'crosshair';

  function selectElement(event) {
      event.preventDefault();
      event.stopPropagation();
      
      const element = event.target;
      const elementText = element.textContent;
      const cleanedText = cleanText(elementText)

      chrome.runtime.sendMessage({action: "fillInputField", text: cleanedText});
      document.body.style.cursor = 'default';
      document.removeEventListener('click', selectElement);
  }

  document.addEventListener('click', selectElement, {once: true});
}


function setupMessageListener() {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "startSelection") {
          startElementSelection();
      }
  });
}

function cleanText(text){
  let cleanedText = text.replace(/[\t\n\r]/g, '');
  cleanedText = cleanedText.replace(/\s+/g, ' ');
  cleanedText = cleanedText.trim();
  return cleanedText;
}