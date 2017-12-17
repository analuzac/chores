import getChores from '../.././api/getChores';

export default function getChoresProcess(userInfo) {
  return (dispatch, getState) => {
    //
    return getChores(userInfo).then(chores => {
      //
      dispatch({
        type: 'GET_CHORES',
        chores: chores,
        errorMsg: null
      });
      return chores;
    });
  };
}
