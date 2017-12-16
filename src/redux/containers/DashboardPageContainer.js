import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

import getAssignmentsProcess from '../thunks/getAssignmentsProcess';

//mccode
import getUsersProcess from '../thunks/getUsersProcess';

// mccode
import updateAssignmentProcess from '../thunks/updateAssignmentProcess';

const scope = {};
let currentAssignment = {};

function mapStateToProps(state, ownProps) {
  console.log('MAPTOSTATE DS...', state);
  scope.userInfo = state.userInfo;
  // currentAssignment = state.currentAssignment;
  return {
    assignments: state.assignments,
    chores: state.chores,
    currentChore: state.currentChore,
    currentAssignment: state.currentAssignment,
    userInfo: state.userInfo,
    users: state.users, // mccode
    householdInfo: state.householdInfo,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {
      console.log('INSIDE DASHBOARD CONTAINER', scope);
      //mccode
      dispatch(getUsersProcess(scope.userInfo));
      return dispatch(getAssignmentsProcess(scope.userInfo));
    },
    updateAssignment: currentAssignment => {
      console.log('DB CONTAINER', currentAssignment);
      return dispatch(updateAssignmentProcess(currentAssignment));
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
