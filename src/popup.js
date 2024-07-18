document.getElementById('sendButton').addEventListener('click', function() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'flex'; // 使用 flex 来保持按钮垂直居中
});

document.getElementById('returnButton').addEventListener('click', function() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'flex'; // 返回第一步骤
});

// 可以为 'More' 按钮添加额外的事件监听器
document.getElementById('moreButton').addEventListener('click', function() {
    console.log("More button clicked");
    // 这里可以添加更多的功能，如加载更多选项
});
