import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import setupStore from './redux/setupStore';
const store = setupStore();

import LogInPageContainer from './redux/containers/LogInPageContainer';
import SignUpPageContainer from './redux/containers/SignUpPageContainer';
import LogIn2PageContainer from './redux/containers/LogIn2PageContainer';
import JoinHousePageContainer from './redux/containers/JoinHousePageContainer';
import RegisterHousePageContainer from './redux/containers/RegisterHousePageContainer';
import DashboardPageContainer from './redux/containers/DashboardPageContainer';
import ChoresLibraryPageContainer from './redux/containers/ChoresLibraryPageContainer';
import ChoreViewPageContainer from './redux/containers/ChoreViewPageContainer';
import ChoreAddPageContainer from './redux/containers/ChoreAddPageContainer';

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
              initial
            />
            <Scene
              key="dashboard"
              component={DashboardPageContainer}
              title="Assigned Chores"
            />
            <Scene
              key="signup"
              component={SignUpPageContainer}
              title="Sign Up"
            />
            <Scene
              key="login2"
              component={LogIn2PageContainer}
              title="Log In"
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
            />
            <Scene
              key="choresview"
              component={ChoreViewPageContainer}
              title="Chore Profile - View"
            />
            <Scene
              key="choresadd"
              component={ChoreAddPageContainer}
              title="Chore Profile - Add"
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
