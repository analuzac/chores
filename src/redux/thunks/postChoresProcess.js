import postChores from '../.././api/postChores';

export default function postChoresProcess(householdId, newChore) {
  return (dispatch, getState) => {
    //
    return postChores(householdId, newChore).then(currentChore => {
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
