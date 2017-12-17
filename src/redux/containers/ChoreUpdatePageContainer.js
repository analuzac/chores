import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ChoreProfileUpdate from '../../components/ChoreProfileUpdate';
import patchChoresProcess from '../thunks/patchChoresProcess';

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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUpdateChore: (householdId, choreId, updateChore) => {
      return dispatch(patchChoresProcess(householdId, choreId, updateChore));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

// export default compose(connectToStore, onDidMount)(ChoresLibrary);
export default compose(connectToStore)(ChoreProfileUpdate);
