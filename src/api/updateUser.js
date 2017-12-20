import { AsyncStorage } from 'react-native';
import env from '../env';

export default function updateUser(householdId, userId, changes) {
  return AsyncStorage.getItem('token').then(storedToken => {
    //
    console.log('INSIDE UPDATE USER API', householdId, userId, changes);
    //
    return fetch(
      `${env.API_BASE_URL}/households/${householdId}/users/${userId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: storedToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(changes)
      }
    )
      .then(handleErrors)
      .then(response => {
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
        return 'ERROR';
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
