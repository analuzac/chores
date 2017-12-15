import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ChoreProfileView from '../../components/ChoreProfileView';

import getOneChoresProcess from '../thunks/getOneChoresProcess';

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
      dispatch(getOneChoresProcess(scope.userInfo));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(ChoreProfileView);
