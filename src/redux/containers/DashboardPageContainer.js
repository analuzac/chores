import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import DashboardPage from '../../components/DashboardPage';

import getAssignmentsProcess from '../thunks/getAssignmentsProcess';

function mapStateToProps(state, ownProps) {
  return {
    assigments: state.assigments,
    chores: state.chores,
    currentChore: state.currentChore,
    userInfo: state.userInfo,
    householdInfo: state.householdInfo,
    errorMsg: state.errorMsg
  };
}

console.log('THE PROPS - CONTAINER', this.props);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAssignmentsProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(DashboardPage);
