import getAssignments from '../.././api/getAssignments';

export default function getAssignmentsProcess() {
  return (dispatch, getState) => {
    //
    return getAssignments().then(assigments => {
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
