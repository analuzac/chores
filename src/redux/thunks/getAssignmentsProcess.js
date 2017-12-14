import getAssignments from '../.././api/getAssignments';

export default function getAssignmentsProcess(userInfo) {
  console.log('INSIDE ASSIGNMENTS THUNK - USER_INFO', userInfo);
  return (dispatch, getState) => {
    //
    return getAssignments(userInfo).then(assigments => {
      //
      dispatch({
        type: 'GET_ASSIGNMENTS',
        assigments: assigments,
        errorMsg: null
      });
      return assigments;
    });
  };
}
