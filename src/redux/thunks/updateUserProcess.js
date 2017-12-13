import updateUser from '../.././api/updateUser';

export default function updateUserProcess(userInfo, householdInfo) {
  return (dispatch, getState) => {
    //
    console.log(
      'DO I GET INSIDE UPDATE USER THUNK?!?',
      userInfo,
      householdInfo
    );
    return updateUser(userInfo, householdInfo).then(userInfo => {
      //
      dispatch({
        type: 'UPDATE_USER',
        userInfo: userInfo,
        errorMsg: null
      });
      return userInfo;
    });
  };
}
