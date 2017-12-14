import getAssignments from '../.././api/getAssignments';

export default function getAssignmentsProcess(userInfo) {
  console.log('INSIDE ASSIGNMENTS THUNK - USER_INFO', userInfo);
  return (dispatch, getState) => {
    //
    return getAssignments(userInfo).then(assignments => {
      //
      dispatch({
        type: 'GET_ASSIGNMENTS',
        assignments: assignments,
        errorMsg: null
      });
      return assignments;
    });
  };
}
