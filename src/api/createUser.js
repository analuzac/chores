import env from '../env';

export default function createUser(userInfo, history) {
  // return fetch(`${env.API_BASE_URL}/users`, {
  //   method: 'POST',
  //   headers: {
  //     //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(userInfo)
  // }).then(response => {
  //   if (response.status === 400) {
  //     history.push('/signup');
  //     return response.text();
  //   }
  //   return response.json();
  // });

  // RETURNING DUMMY DATA TENTATIVELY:
  return {
    name: 'Pikachu',
    email: 'pika@chu.com',
    password: 'pikapika'
  };
}
