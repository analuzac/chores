import createAssignment from '../.././api/createAssignment';

export default function createAssignmentProcess2(
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
      console.log('INSIDE CR THUNK2', currentAssignment);
      dispatch({
        type: 'CREATE_ASSIGNMENT2',
        currentAssignment: currentAssignment,
        errorMsg: null
      });
      return currentAssignment;
    });
  };
}
