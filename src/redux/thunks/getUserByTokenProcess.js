import getUserByToken from '../.././api/getUserByToken';

export default function getUserByTokenProcess() {
  return (dispatch, getState) => {
    //
    return getUserByToken().then(userInfo => {
      //
      dispatch({
        type: 'GET_USER_BY_TOKEN',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
