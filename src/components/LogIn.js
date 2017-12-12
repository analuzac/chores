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
    //this.setState({ name: name});
    this.setState({ email: email.toLowerCase() });
  }

  handlePassword(password) {
    //this.setState({ name: name});
    this.setState({ password: password });
  }

  async handleLogin() {
    console.log('handleLogin');

    const email = this.state.email;
    const password = this.state.password;
    console.log('22222');

    let logInUser = {};

    logInUser = {
      email: email,
      password: password
    };

    let returnedUser = {};
    returnedUser = await this.props.onLogIn(logInUser); //

    console.log('msg ', returnedUser);
    if (returnedUser.email) {
      Alert.alert('Logged in ', returnedUser.email);
      Actions.dashboard();
    } else {
      Alert.alert('Error');
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
              {/* <Input
                name="username"
                onChangeText={username => this.setState({ username: username.toLowerCase() })}
                value={this.state.username}
                placerholder="username"
              /> */}

              <Input
                name="email"
                onChangeText={this.handleEmail}
                value={this.state.email}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              {/* <Input name="password" onChangeText={password => this.setState({ password: password })} value={this.state.password} secureTextEntry={true} /> */}
              <Input
                name="password"
                onChangeText={this.handlePassword}
                value={this.state.password}
                secureTextEntry={true}
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
