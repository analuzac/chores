import env from '../env';

export default function getAssignments() {
  return fetch(
    `${env.API_BASE_URL}//households/:householdId(\\d+)/assignments/pending`,
    {
      // method: 'GET',
      // headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      // 'Content-Type': 'application/json'
    }
  ).then(response => {
    if (response.status === 400) {
      // history.push('/signup');
      return response.text();
    }
    return response.json();
  });
}
