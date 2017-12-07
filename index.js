import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Container } from 'native-base';
import Header from './src/components/header';
import LogIn from './src/components/LogIn';
import SignUp from './src/components/SignUp';
import JoinHousehold from './src/components/JoinHousehold';
import RegisterHousehold from './src/components/RegisterHousehold';

// Create a Component
const App = () =>
  <Container>
    <Header headerText={'ChoreZap'} />
    <JoinHousehold />
  </Container>;

// Render it to the device
AppRegistry.registerComponent('chores', () => App); //AppRegistry is only used in the Root component
