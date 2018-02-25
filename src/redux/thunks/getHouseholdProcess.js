import getHousehold from '../.././api/getHousehold';

export default function getHouseholdProcess(userInfo) {
  return (dispatch, getState) => {
    return getHousehold(userInfo).then(householdInfo => {
      dispatch({
        type: 'GET_HOUSEHOLD',
        householdInfo: householdInfo,
        errorMsg: null
      });
      return householdInfo;
    });
  };
}
