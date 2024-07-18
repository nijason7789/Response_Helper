console.log("popup.js has been loaded successfully.");
document.addEventListener('DOMContentLoaded', function() {
    let colorChangeBtn = document.getElementById('changeColor');
    colorChangeBtn.addEventListener('click', function() {
        let contentArea = document.getElementById('contentArea');
        contentArea.style.backgroundColor = 'blue';
    });
});

