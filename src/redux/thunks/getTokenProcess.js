import getToken from '../.././api/getToken';

export default function getTokenProcess(userInfo) {
  return (dispatch, getState) => {
    console.log('INSIDE THUNK', userInfo);
    return getToken(userInfo).then(userInfo => {
      // if (typeof userInfo === 'string') {
      //   //
      //   let errorMsg = userInfo;
      //   return dispatch({ type: 'UPDATE_ERROR', errorMsg });
      //   //return localStorage.setItem('errorMsg', userInfo);
      // }

      dispatch({
        type: 'GET_TOKEN',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
