import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import HouseholdProfileUpdate from '../../components/HouseholdProfileUpdate';
import updateHouseholdProcess from '../thunks/updateHouseholdProcess';

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
    onUpdateHousehold: (householdId, updateHousehold) => {
      return dispatch(updateHouseholdProcess(householdId, updateHousehold));
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
export default compose(connectToStore)(HouseholdProfileUpdate);
