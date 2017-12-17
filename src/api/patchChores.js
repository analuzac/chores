import { AsyncStorage } from 'react-native';
import env from '../env';

export default function patchChores(householdId, choreId, updateChore) {
  return AsyncStorage.getItem('token').then(storedToken => {
    return fetch(
      `${env.API_BASE_URL}/households/${householdId}/chores/${choreId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: storedToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateChore)
      }
    )
      .then(handleErrors)
      .then(response => {
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
