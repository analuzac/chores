import { AsyncStorage } from 'react-native';
import env from '../env';

export default function getChores(userInfo) {
  //let storedToken = localStorage.getItem('token');

  return AsyncStorage.getItem('token').then(storedToken => {
    console.log('THE STORED TOKEN', storedToken);
    return fetch(
      `${env.API_BASE_URL}/households/${userInfo.householdId}/chores`,
      {
        method: 'GET',
        headers: {
          Authorization: storedToken,
          'Content-Type': 'application/json'
        }
      }
    )
      .then(handleErrors)
      .then(response => {
        console.log('RESPONSE - GET CHORES', response);
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
