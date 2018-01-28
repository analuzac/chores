import { AsyncStorage } from 'react-native';
import env from '../env';

export default function createHousehold(userInfo) {
  console.log('GET HOUSEHOLD API', userInfo);
  return AsyncStorage.getItem('token').then(storedToken => {
    return fetch(`${env.API_BASE_URL}/households/${userInfo.householdId}`, {
      method: 'GET',
      headers: {
        Authorization: storedToken,
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors)
      .then(response => {
        // console.log(response.status);
        // if (response.status === 401) {
        //   return response.text();
        // }
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
