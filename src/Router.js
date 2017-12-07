import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LogIn from './components/LogIn';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LogIn} title="Please Login" />
    </Router>
  );
};

export default RouterComponent;
