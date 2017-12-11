import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import RegisterHousePage from '../../components/RegisterHousePage';

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

console.log('THE PROPS - CONTAINER', this.props);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onRegister: householdInfo => {
      console.log('>>>', householdInfo);
      dispatch(createUserProcess(householdInfo, ownProps.history));
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
//export default compose(connectToStore, onDidMount)(LogInPage);

export default compose(connectToStore)(RegisterHousePage);
