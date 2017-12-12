import getAssignments from '../.././api/getAssignments';

export default function getAssignmentsProcess() {
  return (dispatch, getState) => {
    // return getAssignments().then(assigments => {
    //
    //   if (typeof assigments === 'string') {
    //     //
    //     let errorMsg = assigments;
    //     return dispatch({ type: 'UPDATE_ERROR', assigments });
    //     );
    //   }
    // dispatch({
    //   type: 'GET_ASSIGNMENTS',
    //   assigments: assigments,
    //   errorMsg: null
    // });
    // return assigments;
    // });
  };
}
