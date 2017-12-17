import { AsyncStorage } from 'react-native';
import env from '../env';

export default function updateAssignment(currentAssignment) {
  return AsyncStorage.getItem('token').then(storedToken => {
    let leHouseholdId = currentAssignment.householdId;
    //
    return fetch(
      `${env.API_BASE_URL}/households/${leHouseholdId}/assignments/${currentAssignment.assignmentId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: storedToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          assignedUserId: currentAssignment.assignedUserId,
          status: currentAssignment.status
        })
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
