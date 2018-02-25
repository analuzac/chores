import updateHousehold from '../.././api/updateHousehold';

export default function updateHouseholdProcess(householdId, updatingHousehold) {
  return (dispatch, getState) => {
    return updateHousehold(
      householdId,
      updatingHousehold
    ).then(currentHousehold => {
      // If we update the backend to return household array:
      // dispatch({
      //   type: 'UPDATE_HOUSEHOLD',
      //   householdInfo: currentHousehold,
      //   errorMsg: null
      // });
      return currentHousehold;
    });
  };
}
