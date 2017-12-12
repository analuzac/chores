import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import SignUp from '../../components/SignUp';

import createUserProcess from '../thunks/createUserProcess';

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
    onSignUp: userInfo => {
      return dispatch(createUserProcess(userInfo));
    }
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
//export default compose(connectToStore, onDidMount)(SignUp);

export default compose(connectToStore)(SignUp);
