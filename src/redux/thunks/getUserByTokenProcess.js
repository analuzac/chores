import getUserByToken from '../.././api/getUserByToken';

export default function getUserByTokenProcess() {
  return (dispatch, getState) => {
    //
    return getUserByToken().then(userInfo => {
      //
      console.log('INSIDE getUserByTokenProcess', userInfo);
      dispatch({
        type: 'GET_USER_BY_TOKEN',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
