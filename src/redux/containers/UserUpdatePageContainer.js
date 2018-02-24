import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import UserProfileUpdate from '../../components/UserProfileUpdate';

import updateUserProcess from '../thunks/updateUserProcess';

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
    onUpdateUser: (householdId, userId, changes) => {
      return dispatch(updateUserProcess(householdId, userId, changes));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

// export default compose(connectToStore, onDidMount)(UserProfileUpdate);
export default compose(connectToStore)(UserProfileUpdate);
