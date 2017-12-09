import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import LogInPageContainer from './redux/containers/LogInPageContainer';
import SignUpPageContainer from './redux/containers/SignUpPageContainer';

// import { View } from 'react-native';
//import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={LogInPageContainer}
              title="Please Log In"
            />
            <Scene
              key="signup"
              component={SignUpPageContainer}
              title="Please Sign Up"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

//<SignUpPageContainer />
