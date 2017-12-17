import updateAssignment from '../.././api/updateAssignment';

export default function updateAssignmentProcess(currentAssignment) {
  return (dispatch, getState) => {
    return updateAssignment(currentAssignment).then(assignment => {
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
