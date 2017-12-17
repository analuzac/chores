import createAssignment from '../.././api/createAssignment';

export default function createAssignmentProcess(
  householdId,
  currentAssignment
) {
  console.log('INSIDE CREATE ASSIGNMENT THUNK', currentAssignment);
  return (dispatch, getState) => {
    //
    return createAssignment(householdId, currentAssignment).then(assignment => {
      //
      dispatch({
        type: 'CREATE_ASSIGNMENT',
        currentAssignment: assignment,
        errorMsg: null
      });
      return assignment;
    });
  };
}
