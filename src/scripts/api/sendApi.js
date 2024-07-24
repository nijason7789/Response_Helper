export function sendCommentRequest(commentInput, callback){
    const api_url = 'http://localhost:3000';
    const api_path = '/api/openai';
    fetch(api_url+api_path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"originalComment": commentInput})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      callback(null, data); // 成功时调用回调函数，没有错误，返回数据
    })
    .catch((error) => {
      console.error('Error:', error);
      callback(error); // 错误时调用回调函数，传递错误对象
    });
  }

  export function sendMoreCommentRequest(moreComments, callback){
    const api_url = 'http://localhost:3000';
    const api_path = '/api/moreComments';
    fetch(api_url+api_path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moreComments)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      callback(null, data); // 成功时调用回调函数，没有错误，返回数据
    })
    .catch((error) => {
      console.error('Error:', error);
      callback(error); // 错误时调用回调函数，传递错误对象
    });
  }
