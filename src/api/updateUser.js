import { AsyncStorage } from 'react-native';
import env from '../env';

export default function updateUser(userInfo, householdInfo) {
  //let storedToken = localStorage.getItem('token');

  return AsyncStorage.getItem('token').then(storedToken => {
    console.log('THE STORED TOKEN', storedToken);
    return fetch(
      `${env.API_BASE_URL}/households/${householdInfo.id}/users/${userInfo.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: storedToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          role: 'head',
          householdId: householdInfo.id
        })
      }
    )
      .then(handleErrors)
      .then(response => {
        console.log('RESPONSE - UPDATE USER', response);
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
      });
  });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
