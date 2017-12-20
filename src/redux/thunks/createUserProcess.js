import createUser from '../.././api/createUser';

export default function createUserProcess(userInfo) {
  return (dispatch, getState) => {
    //
    return createUser(userInfo).then(userInfo => {
      //
      if (userInfo === 'ERROR') {
        return 'Duplicate email';
      } else {
        dispatch({ type: 'CREATE_USER', userInfo: userInfo, errorMsg: null });
        return userInfo;
      }
    });
  };
}
