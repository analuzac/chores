import env from '../env';

export default function getToken(userInfo, history) {
  return fetch(`${env.API_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  }).then(response => {
    if (response.status === 400) {
      //history.push('/login');
      return response.text();
    }
    return response.json();
  });
}
