console.log('Content script has been injected into the page.');
setupMessageListener();
addCustomStyle();
addCustomFunctionality();

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

function addCustomStyle() {
  const style = document.createElement('style');
  style.textContent = `
      .extension-highlight {
          border: 2px solid red !important;
      }
  `;
  document.head.appendChild(style);
}

function addCustomFunctionality() {
  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(event) {
          console.log('Link clicked:', this.href);
          // 如果需要，可以阻止默認行為
          // event.preventDefault();
      });
  });
}

function cleanText(text){
  let cleanedText = text.replace(/[\t\n\r]/g, '');
  cleanedText = cleanedText.replace(/\s+/g, ' ');
  cleanedText = cleanedText.trim();
  return cleanedText;
}