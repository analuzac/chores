import createHousehold from '../.././api/createHousehold';

export default function createHouseholdProcess(householdInfo) {
  return (dispatch, getState) => {
    //
    return createHousehold(householdInfo).then(householdInfo => {
      //

      dispatch({
        type: 'CREATE_HOUSEHOLD',
        householdInfo: householdInfo,
        errorMsg: null
      });
      return householdInfo;
    });
  };
}
