import React, { Component } from 'react';
import {
  Container,
  Header,
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

export default class LogIn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorLogin: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(email) {
    this.setState({ email: email });
  }

  handlePassword(password) {
    this.setState({ password: password });
  }

  async handleSubmit() {
    let logInUser = {
      email: this.state.email,
      password: this.state.password
    };

    let returnedUser = await this.props.onLogIn(logInUser);

    if (returnedUser.email) {
      Alert.alert('Sucessful LogIn ', returnedUser.email);
      Actions.joinhouse();
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
            <Button onPress={this.handleSubmit} block primary>
              <Text> Submit </Text>
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
