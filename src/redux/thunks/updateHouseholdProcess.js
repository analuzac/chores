import updateHousehold from '../.././api/updateHousehold';

export default function updateHouseholdProcess(householdId, updatingHousehold) {
  return (dispatch, getState) => {
    //
    console.log('UPHH PROCSS', householdId, updatingHousehold);
    return updateHousehold(
      householdId,
      updatingHousehold
    ).then(currentHousehold => {
      //
      console.log('UPDATE HOUSEHOLD PROCESS', currentHousehold);
      // dispatch({
      //   type: 'UPDATE_HOUSEHOLD',
      //   householdInfo: currentHousehold,
      //   errorMsg: null
      // });
      return currentHousehold;
    });
  };
}
