import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ChoreProfileAdd from '../../components/ChoreProfileAdd';

import createChoreProcess from '../thunks/createChoreProcess';
import createAssignmentProcess2 from '../thunks/createAssignmentProcess2';

let scope = {};

function mapStateToProps(state, ownProps) {
  scope.userInfo = state.userInfo;

  return {
    assigments: state.assigments,
    currentAssignment: state.currentAssignment,
    chores: state.chores,
    currentChore: state.currentChore,
    userInfo: state.userInfo,
    householdInfo: state.householdInfo,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCreateChore: (householdId, newChore) => {
      return dispatch(createChoreProcess(householdId, newChore));
    },
    createAssignment2: currentAssignment => {
      return dispatch(
        createAssignmentProcess2(scope.userInfo.householdId, currentAssignment)
      );
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

// export default compose(connectToStore, onDidMount)(ChoreProfileAdd);
export default compose(connectToStore)(ChoreProfileAdd);
