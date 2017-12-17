import { AsyncStorage } from 'react-native';

import getToken from '../.././api/getToken';

export default function getTokenProcess(userInfo) {
  return (dispatch, getState) => {
    //
    return getToken(userInfo).then(userInfo => {
      //
      if (userInfo === 'ERROR') {
        return 'Invalid username/password';
      } else {
        AsyncStorage.setItem('token', userInfo.token);
        //
        dispatch({
          type: 'GET_TOKEN',
          userInfo: userInfo,
          errorMsg: null
        });
        return userInfo;
      }
    });
  };
}
