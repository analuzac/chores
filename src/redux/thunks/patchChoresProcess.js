import patchChores from '../.././api/patchChores';

export default function patchChoresProcess(householdId, choreId, updateChore) {
  return (dispatch, getState) => {
    //
    return patchChores(householdId, choreId, updateChore).then(currentChore => {
      //
      dispatch({
        type: 'UPDATE_CHORE',
        currentChore: currentChore,
        errorMsg: null
      });
      return currentChore;
    });
  };
}
