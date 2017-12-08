import React { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'

import SignUpPageContainer from './redux/containers/SignUpPageContainer';

// import { View } from 'react-native';
//import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';
const store = setupStore();


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Router>
        <Scene key="root">
        <Scene key="signup" component={SignUp} title="Please Sign Up" />
      </Scene>
      </Router>
    </Provider>
  );
};

export default App;
