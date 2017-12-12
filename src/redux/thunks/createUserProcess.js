import createUser from '../.././api/createUser';

export default function createUserProcess(userInfo) {
  return (dispatch, getState) => {
    console.log('INSIDE THUNK', userInfo);
    return createUser(userInfo).then(userInfo => {
      dispatch({ type: 'CREATE_USER', userInfo: userInfo, errorMsg: null });
      return userInfo;
    });
  };
}
