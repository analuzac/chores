import env from '../env';
export default async function getToken(user) {
  user = {
    email: user.email,
    password: user.password
  };
  console.log('INSIDE GET TOKEN API - CONNECTED TO:', env.API_BASE_URL);
  return fetch(`${env.API_BASE_URL}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(handleErrors)
    .then(response => {
      console.log('>>>', response);
      return response.json();
    })
    .catch(function(error) {
      console.log('Im the error > ', error);
      return 'ERROR';
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
