import updateUser from '../.././api/updateUser';

export default function updateUserProcess(householdId, userId, changes) {
  return (dispatch, getState) => {
    //
    console.log('UPDATE USER THUNK', householdId, userId, changes);
    return updateUser(householdId, userId, changes).then(userInfo => {
      //
      console.log('THUNK - WHAT WE GET BACK FROM API', userInfo);
      dispatch({
        type: 'UPDATE_USER',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
