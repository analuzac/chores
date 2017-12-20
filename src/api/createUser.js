import env from '../env';

export default function createUser(userInfo) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .catch(function(error) {
      console.log(error);
      return 'ERROR';
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
