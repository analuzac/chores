import createHousehold from '../.././api/createHousehold';

export default function createHouseholdProcess(householdInfo) {
  return (dispatch, getState) => {
    //
    return createHousehold(householdInfo).then(householdInfo => {
      //
      console.log('WHATS IN STATE', householdInfo);
      dispatch({
        type: 'CREATE_HOUSEHOLD',
        householdInfo: householdInfo,
        errorMsg: null
      });
      return householdInfo;
    });
  };
}
