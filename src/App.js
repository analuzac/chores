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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={LogInPageContainer} title="Log In" />
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
              initial
            />
            <Scene
              key="registerhouse"
              component={RegisterHousePageContainer}
              title="Register Household"
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
