import { AsyncStorage } from 'react-native';
import env from '../env';

export default function getAssignments() {
  //let storedToken = localStorage.getItem('token');

  return AsyncStorage.getItem('token').then(storedToken => {
    console.log('THE STORED TOKEN', storedToken);
    return fetch(`${env.API_BASE_URL}/households/0/assignments/pending`, {
      method: 'GET',
      headers: {
        Authorization: storedToken,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log('WHAT WE GET FROM BACKEND', response);
      // if (response.status === 400) {
      //   // history.push('/signup');
      //   return response.text();
      // }
      return response.json();
    });
  });
}
