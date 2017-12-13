import env from '../env';
export default async function getToken(user) {
  user = {
    email: user.email,
    password: user.password
  };

  return fetch(`${env.API_BASE_URL}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .catch(function(error) {
      return [{ id: 'error', subject: error.message }];
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
