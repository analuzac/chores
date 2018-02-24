import getOneChore from '../.././api/getOneChore';

export default function getOneChoreProcess(choreId, householdId) {
  return (dispatch, getState) => {
    //
    return getOneChore(choreId, householdId).then(currentChore => {
      //
      dispatch({
        type: 'GET_ONE_CHORE',
        currentChore: currentChore,
        errorMsg: null
      });
      return currentChore;
    });
  };
}
