import getHousehold from '../.././api/getHousehold';

export default function getHouseholdProcess(userInfo) {
  return (dispatch, getState) => {
    //
    console.log('GET HOUSEHOLD PROCESS', userInfo);
    return getHousehold(userInfo).then(householdInfo => {
      //
      dispatch({
        type: 'GET_HOUSEHOLD',
        householdInfo: householdInfo,
        errorMsg: null
      });
      return householdInfo;
    });
  };
}
