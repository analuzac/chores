import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux';
import setupStore from './redux/setupStore';
const store = setupStore();

import LogInPageContainer from './redux/containers/LogInPageContainer';
import SignUpPageContainer from './redux/containers/SignUpPageContainer';
import JoinHousePageContainer from './redux/containers/JoinHousePageContainer';
import RegisterHousePageContainer from './redux/containers/RegisterHousePageContainer';
import DashboardPageContainer from './redux/containers/DashboardPageContainer';
import ChoresLibraryPageContainer from './redux/containers/ChoresLibraryPageContainer';
import ChoreViewPageContainer from './redux/containers/ChoreViewPageContainer';
import ChoreAddPageContainer from './redux/containers/ChoreAddPageContainer';
import ChoreUpdatePageContainer from './redux/containers/ChoreUpdatePageContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={LogInPageContainer}
              title="Log In"
              hideNavBar
              initial
            />
            <Scene
              key="dashboard"
              component={DashboardPageContainer}
              title="Assigned Chores"
              hideNavBar
              type={ActionConst.REPLACE}
            />
            <Scene
              key="signup"
              component={SignUpPageContainer}
              title="Sign Up"
            />
            <Scene
              key="joinhouse"
              component={JoinHousePageContainer}
              title="Join Household"
            />
            <Scene
              key="registerhouse"
              component={RegisterHousePageContainer}
              title="Register Household"
            />
            <Scene
              key="choreslibrary"
              component={ChoresLibraryPageContainer}
              title="Chores Library"
              hideNavBar
              type={ActionConst.REPLACE}
            />
            <Scene
              key="choresview"
              component={ChoreViewPageContainer}
              title="View Chore Profile"
            />
            <Scene
              key="choresadd"
              component={ChoreAddPageContainer}
              title="Add New Chore Profile"
              // direction="vertical"
              // schema="modal"
            />
            <Scene
              key="choresupdate"
              component={ChoreUpdatePageContainer}
              title="Update Chore Profile"
            />
            {/* <Scene
              key="houseview"
              component={HouseViewPageContainer}
              title="Household Profile"
            /> */}
          </Stack>
        </Router>
      </Provider>
    );
  }
}
