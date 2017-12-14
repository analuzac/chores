import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

import getAssignmentsProcess from '../thunks/getAssignmentsProcess';

const scope = {};

function mapStateToProps(state, ownProps) {
  console.log('MAPTOSTATE...', state.userInfo);
  scope.userInfo = state.userInfo;
  return {
    assigments: state.assigments,
    chores: state.chores,
    currentChore: state.currentChore,
    userInfo: state.userInfo,
    householdInfo: state.householdInfo,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {
      console.log('INSIDE DASHBOARD CONTAINER', scope);
      dispatch(getAssignmentsProcess(scope.userInfo));
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
