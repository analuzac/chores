import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LogIn2 from '../../components/LogIn2';

import getTokenProcess from '../thunks/getTokenProcess';

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
    onLogIn: userInfo => {
      dispatch(getTokenProcess(userInfo));
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
//export default compose(connectToStore, onDidMount)(LogIn2);

export default compose(connectToStore)(LogIn2);
