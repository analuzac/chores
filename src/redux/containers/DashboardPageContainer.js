import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

import getAssignmentsProcess from '../thunks/getAssignmentsProcess';
import updateAssignmentProcess from '../thunks/updateAssignmentProcess';
import createAssignmentProcess from '../thunks/createAssignmentProcess';
import getUsersProcess from '../thunks/getUsersProcess';
import getChoresProcess from '../thunks/getChoresProcess';

const scope = {};
let currentAssignment = {};

function mapStateToProps(state, ownProps) {
  scope.userInfo = state.userInfo;
  return {
    assignments: state.assignments,
    chores: state.chores,
    currentChore: state.currentChore,
    currentAssignment: state.currentAssignment,
    userInfo: state.userInfo,
    users: state.users,
    householdInfo: state.householdInfo,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {
      dispatch(getUsersProcess(scope.userInfo));
      dispatch(getChoresProcess(scope.userInfo));
      return dispatch(getAssignmentsProcess(scope.userInfo));
    },
    updateAssignment: currentAssignment => {
      return dispatch(updateAssignmentProcess(currentAssignment));
    },
    createAssignment: currentAssignment => {
      return dispatch(
        createAssignmentProcess(scope.userInfo.householdId, currentAssignment)
      );
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(Dashboard);
