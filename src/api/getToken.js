import env from '../env';
export default function getToken(user) {
  //mc//console.log('LOGINUSER FUNC');
  //mc//console.log('BEFORE', user);
  console.log('the user', user);
  user = {
    email: user.email,
    password: user.password
  };
  console.log('after', user);
  console.log('ENV', env.API_BASE_URL, user);
  return (
    fetch(`${env.API_BASE_URL}/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(handleErrors)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      // .then(token => {
      // //mc//console.log('TOKEN FROM LOGIN');
      // //mc//console.log(token);
      //   return token;
      // })
      .catch(function(error) {
        console.log('error...', error);
        //mc//console.log('error ' + error.message);
        return [{ id: 'error', subject: error.message }];
      })
  );
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //mc//console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
