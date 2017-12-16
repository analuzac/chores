import updateAssignment from '../.././api/updateAssignment';

export default function updateAssignmentProcess(currentAssignment) {
  return (dispatch, getState) => {
    console.log('UA PROCESS ', currentAssignment);
    return updateAssignment(currentAssignment).then(assignment => {
      console.log('im back in the thunk ___----> ', assignment);
      if (assignment.status === 'done') {
        dispatch({
          type: 'UPDATE_ASSIGNMENT_STATE',
          currentAssignment: assignment,
          errorMsg: null
        });
      } else {
        dispatch({
          type: 'UPDATE_ASSIGNMENT',
          currentAssignment: assignment,
          errorMsg: null
        });
      }
      return assignment;
    });
  };
}
