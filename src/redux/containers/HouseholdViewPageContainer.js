import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import HouseholdProfileView from '../../components/HouseholdProfileView';

import getHouseholdProcess from '../thunks/getHouseholdProcess';

const scope = {};

function mapStateToProps(state, ownProps) {
  scope.userInfo = state.userInfo;
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
    onMount: () => {
      return dispatch(getHouseholdProcess(scope.userInfo));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(HouseholdProfileView);
