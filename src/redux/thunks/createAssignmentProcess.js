import createAssignment from '../.././api/createAssignment';

export default function createAssignmentProcess(
  householdId,
  currentAssignment
) {
  return (dispatch, getState) => {
    return createAssignment(
      householdId,
      currentAssignment
    ).then(currentAssignment => {
      dispatch({
        type: 'CREATE_ASSIGNMENT',
        currentAssignment: currentAssignment,
        errorMsg: null
      });
      return currentAssignment;
    });
  };
}
