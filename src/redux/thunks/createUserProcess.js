import createUser from '../.././api/createUser';

export default function createUserProcess(userInfo) {
  return (dispatch, getState) => {
    console.log('INSIDE THUNK', userInfo);
    return createUser(userInfo).then(userInfo => {


      // if (typeof userInfo === 'string') {
      //   //
      //   let errorMsg = userInfo;
      //   return dispatch({ type: 'UPDATE_ERROR', userInfo });
      //   );
      // }

    dispatch({ type: 'CREATE_USER', userInfo: userInfo, errorMsg: null });
    return userInfo;
    // });
  };
}
