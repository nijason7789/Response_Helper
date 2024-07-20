export function setupMessageListener() {
    console.log('setupMessageListener loaded')
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const inputField = document.getElementById('commentInput')
        if (request.action === "fillInputField") {
            console.log(request)
            console.log("Copied element text:", request.text);
            inputField.value = request.text;
        }
    });
}