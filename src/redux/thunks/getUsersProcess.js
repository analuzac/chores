import getUsers from '../.././api/getUsers';

export default function getUsersProcess(userInfo) {
  return (dispatch, getState) => {
    return getUsers(userInfo).then(users => {
      dispatch({
        type: 'GET_USERS',
        users: users,
        errorMsg: null
      });
      return users;
    });
  };
}
