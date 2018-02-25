import updateUser from '../.././api/updateUser';

export default function updateUserProcess(householdId, userId, changes) {
  return (dispatch, getState) => {
    return updateUser(householdId, userId, changes).then(userInfo => {
      if (userInfo === 'ERROR') {
        return 'Invalid Data';
      } else {
        dispatch({
          type: 'UPDATE_USER',
          userInfo: userInfo,
          errorMsg: null
        });
        return userInfo;
      }
    });
  };
}
