import getToken from '../.././api/getToken';

export default function getTokenProcess(userInfo, history) {
  return (dispatch, getState) => {
    //inside userInfo we are passing in the email & password to verify if user exists & has appropriate credentials
    console.log('INSIDE THUNK', userInfo);
    // return getToken(userInfo, history).then(userInfo => {
    //   //if the password passed in matches the stored hashedPashword, we get back a userInfo object containing the user's id, name, email, and token
    //
    //   if (typeof userInfo === 'string') {
    //     //
    //     let errorMsg = userInfo;
    //     return dispatch({ type: 'UPDATE_ERROR', errorMsg });
    //     //return localStorage.setItem('errorMsg', userInfo);
    //   }
    //  localStorage.setItem('token', userInfo.token);
    dispatch({
      type: 'GET_TOKEN',
      userInfo: userInfo,
      errorMsg: null
    });
    return userInfo;
    // });
  };
}
