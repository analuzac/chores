import createAssignment from '../.././api/createAssignment';

export default function createAssignmentProcess(
  householdId,
  currentAssignment
) {
  // console.log('INSIDE CREATE ASSIGNMENT THUNK', currentAssignment);
  return (dispatch, getState) => {
    //
    return createAssignment(
      householdId,
      currentAssignment
    ).then(currentAssignment => {
      //
      console.log('INSIDE CR THUNK', currentAssignment);
      dispatch({
        type: 'CREATE_ASSIGNMENT',
        currentAssignment: currentAssignment,
        errorMsg: null
      });
      return currentAssignment;
    });
  };
}
