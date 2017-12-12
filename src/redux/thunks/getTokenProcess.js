import getToken from '../.././api/getToken';

export default function getTokenProcess(userInfo) {
  return (dispatch, getState) => {
    console.log('INSIDE THUNK', userInfo);
    return getToken(userInfo).then(userInfo => {
      dispatch({
        type: 'GET_TOKEN',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
