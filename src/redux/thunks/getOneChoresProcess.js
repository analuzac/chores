import getOneChores from '../.././api/getOneChores';

export default function getOneChoresProcess(userInfo) {
  console.log('INSIDE GET CHORES THUNK', userInfo);
  return (dispatch, getState) => {
    //
    return getOneChores(userInfo).then(chores => {
      //
      dispatch({
        type: 'GET_ONE_CHORE',
        currentChore: currentChore,
        errorMsg: null
      });
      return chores;
    });
  };
}
