import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ChoreProfileAdd from '../../components/ChoreProfileAdd';

import postChoresProcess from '../thunks/postChoresProcess';

//const scope = {};

function mapStateToProps(state, ownProps) {
  console.log('MAPTOSTATE...', state);
  //scope.userInfo = state.userInfo;
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
    // onMount: () => {
    //   console.log('INSIDE CHORES LIBRARY CONTAINER', scope);
    //   dispatch(getChoresProcess(scope.userInfo));
    // },
    onCreateChore: (householdId, newChore) => {
      return dispatch(postChoresProcess(householdId, newChore));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

// export default compose(connectToStore, onDidMount)(ChoresLibrary);
export default compose(connectToStore)(ChoreProfileAdd);
