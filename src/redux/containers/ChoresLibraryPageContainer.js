import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ChoresLibrary from '../../components/ChoresLibrary';

import getChoresProcess from '../thunks/getChoresProcess';
import getOneChoreProcess from '../thunks/getOneChoreProcess';

const scope = {};

function mapStateToProps(state, ownProps) {
  console.log('MAPTOSTATE...', state);
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
      console.log('INSIDE CHORES LIBRARY CONTAINER', scope);
      dispatch(getChoresProcess(scope.userInfo));
    },
    onOneChore: (choreId, householdId) => {
      return dispatch(getOneChoreProcess(choreId, householdId));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(ChoresLibrary);
