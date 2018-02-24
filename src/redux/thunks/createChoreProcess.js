import createChore from '../.././api/createChore';

export default function createChoreProcess(householdId, newChore) {
  return (dispatch, getState) => {
    //
    return createChore(householdId, newChore).then(currentChore => {
      //
      dispatch({
        type: 'CREATE_CHORE',
        currentChore: currentChore,
        errorMsg: null
      });
      return currentChore;
    });
  };
}
