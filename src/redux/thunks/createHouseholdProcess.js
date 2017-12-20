import createHousehold from '../.././api/createHousehold';

export default function createHouseholdProcess(householdInfo) {
  return (dispatch, getState) => {
    //
    return createHousehold(householdInfo).then(householdInfo => {
      //
      if (householdInfo === 'ERROR') {
        return 'Invalid Household Key Code';
      } else {
        dispatch({
          type: 'CREATE_HOUSEHOLD',
          householdInfo: householdInfo,
          errorMsg: null
        });
        return householdInfo;
      }
    });
  };
}
