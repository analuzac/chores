import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import JoinHouse from '../../components/JoinHouse';

import getTokenProcess from '../thunks/getTokenProcess';
// SHOULD BE SOMETHING LIKE getHouseProcess

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
    onJoin: householdInfo => {
      dispatch(getTokenProcess(householdInfo));
    }
    // SHOULD BE SOMETHING LIKE getHouseProcess
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// We don't need onDidMount:
//
// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });
//
//Thus we don't need the following line:
//export default compose(connectToStore, onDidMount)(JoinHouse);

export default compose(connectToStore)(JoinHouse);
