import updateChore from '../.././api/updateChore';

export default function updateChoreProcess(householdId, choreId, updateChore) {
  return (dispatch, getState) => {
    return updateChore(householdId, choreId, updateChore).then(currentChore => {
      dispatch({
        type: 'UPDATE_CHORE',
        currentChore: currentChore,
        errorMsg: null
      });
      return currentChore;
    });
  };
}
