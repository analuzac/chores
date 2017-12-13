import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import RegisterHouse from '../../components/RegisterHouse';

import createUserProcess from '../thunks/createUserProcess';
// SHOULD BE SOMETHING LIKE createHouseProcess

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
    onRegister: householdInfo => {
      dispatch(createUserProcess(householdInfo));
    }
    // SHOULD BE SOMETHING LIKE createHouseProcess
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
//export default compose(connectToStore, onDidMount)(RegisterHouse);

export default compose(connectToStore)(RegisterHouse);
