import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Separator
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import { Alert, AsyncStorage } from 'react-native';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorLogin: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(email) {
    this.setState({ email: email.toLowerCase() });
  }

  handlePassword(password) {
    this.setState({ password: password });
  }

  async handleLogin() {
    let logInUser = {
      email: this.state.email,
      password: this.state.password
    };

    let returnedUser = await this.props.onLogIn(logInUser);
    console.log('RETURNED USERS', returnedUser);

    if (returnedUser.email) {
      // Alert.alert(
      //   'Sucessful LogIn, now join/create a house',
      //   returnedUser.email
      // );

      if (returnedUser.householdId === 0) {
        Actions.joinhouse();
      } else {
        //Actions.dashboard();
        Actions.dashboard();
      }
    } else {
      Alert.alert(returnedUser);
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Log In - User</Text>
            </Separator>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                name="email"
                onChangeText={this.handleEmail}
                value={this.state.email}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                name="password"
                onChangeText={this.handlePassword}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
            <Button onPress={this.handleLogin} block primary>
              <Text> Submit </Text>
            </Button>
            <Text style={styles.textStyle}> - or - </Text>
            <Button
              success
              style={styles.buttonStyle}
              onPress={() => Actions.signup()}>
              <Text> Create New Account </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25
    // fontWeight: 'bold'
  }
};
