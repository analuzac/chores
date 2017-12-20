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
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderComponentC from './HeaderComponentC';

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
        Actions.dashboard();
        //Actions.choreslibrary();
      }
    } else {
      Alert.alert(returnedUser);
    }
  }

  render() {
    return (
      <Container>
        <HeaderComponentC title="LogIn" />
        <Content>
          <Form style={styles.formStyle}>
            {/* <Separator bordered>
              <Text style={styles.textStyle}>Log In</Text>
            </Separator> */}
            <Text />
            <Text />
            <Text />
            <Item rounded style={styles.itemStyle}>
              {/* <Label>Email</Label> */}
              <Input
                style={styles.inputStyle}
                name="email"
                placeholder="Email"
                onChangeText={this.handleEmail}
                value={this.state.email}
              />
            </Item>
            <Item rounded style={styles.itemStyle}>
              {/* <Label>Password</Label> */}
              <Input
                style={styles.inputStyle}
                name="password"
                placeholder="Password"
                onChangeText={this.handlePassword}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
            <Button
              style={styles.buttonStyle}
              onPress={this.handleLogin}
              large
              full
              rounded
              primary>
              <Text> Log In </Text>
            </Button>
            {/* <Text style={styles.textStyle}> - or - </Text> */}
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Button
              large
              full
              rounded
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
  itemStyle: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15
    // marginHorizontal: 15,
    // justifyContent: 'center'
  },
  inputStyle: {
    backgroundColor: 'white'
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 15
    //flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    // fontWeight: 'bold'
    textAlign: 'center'
  },
  formStyle: {
    display: 'flex',
    // backgroundColor: 'red',
    justifyContent: 'center'
    // alignItems: 'center'
  }
};
