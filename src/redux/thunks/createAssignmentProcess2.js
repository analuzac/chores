import createAssignment from '../.././api/createAssignment';

export default function createAssignmentProcess2(
  householdId,
  currentAssignment
) {
  return (dispatch, getState) => {
    return createAssignment(
      householdId,
      currentAssignment
    ).then(currentAssignment => {
      dispatch({
        type: 'CREATE_ASSIGNMENT2',
        currentAssignment: currentAssignment,
        errorMsg: null
      });
      return currentAssignment;
    });
  };
}
