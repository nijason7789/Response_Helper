import config from '../../config.js';

export function sendCommentRequest(commentInput, callback){
    const api_url = config.API_DOMAIN;
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
      callback(null, data);
    })
    .catch((error) => {
      console.error('Error:', error);
      callback(error);
    });
  }

  export function sendMoreCommentRequest(moreComments, callback){
    const api_url = config.API_DOMAIN;
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
      callback(null, data);
    })
    .catch((error) => {
      console.error('Error:', error);
      callback(error);
    });
  }

  export function sendWakeUpRequest(callback){
    const api_url = config.API_DOMAIN;
    const api_path = '/api/wakeup';
    fetch(api_url+api_path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      callback(null, data);
    })
    .catch((error) => {
      console.error('Error:', error);
      callback(error);
    });
  }
