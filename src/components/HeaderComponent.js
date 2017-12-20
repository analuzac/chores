import React, { Component } from 'react';
import {
  Container,
  Header,
  Center,
  Left,
  Body,
  Text,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export default class HeaderComponent extends Component {
  handleLogout() {
    console.log('hi.......');
    // testing
    AsyncStorage.removeItem('token');

    Actions.login();
  }
  render() {
    return (
      <Header>
        <Body
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
          {/* <Body> */}
          <Title>ChoreZap</Title>
          {this.props.title !== 'Login'
            ? <Title>
                {this.props.title}
              </Title>
            : null}
          {this.props.title !== 'Login'
            ? <Button transparent onPress={this.handleLogout}>
                <Text height="2" width="2">
                  Logout
                </Text>
              </Button>
            : null}
        </Body>
        {/* </Body>  ? <Button small transparent onPress={() => Actions.login()}>
        */}
      </Header>
    );
  }
}
