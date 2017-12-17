import getOneChores from '../.././api/getOneChores';

export default function getOneChoresProcess(choreId, householdId) {
  return (dispatch, getState) => {
    //
    return getOneChores(choreId, householdId).then(currentChore => {
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
