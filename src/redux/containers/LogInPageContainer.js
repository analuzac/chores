import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LogInPage from '../../components/LogInPage';

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

console.log('THE PROPS - CONTAINER', this.props);

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogIn: userInfo => {
      console.log('>>>', userInfo);
      dispatch(getTokenProcess(userInfo, ownProps.history));
    }
    // onLogOut: () =>
    //   dispatch({
    //     type: 'REMOVE_TOKEN',
    //     userInfo: null
    //   })
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

export default compose(connectToStore)(LogInPage);
