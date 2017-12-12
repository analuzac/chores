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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleName(name) {
    this.setState({ name: name });
  }

  handleEmail(email) {
    this.setState({ email: email.toLowerCase() });
  }

  handlePassword(password) {
    this.setState({ password: password });
  }

  handleSubmit = () => {
    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.onSignUp(userInfo);
    Actions.login2();
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>User Registration</Text>
            </Separator>
            <Item stackedLabel>
              <Label>Full Name</Label>
              <Input
                name="name"
                onChangeText={this.handleName}
                value={this.state.name}
              />
            </Item>
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
  // buttonStyle: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  textStyle: {
    fontSize: 25
    // color: 'blue',
    // fontWeight: 'bold',
  }
};
