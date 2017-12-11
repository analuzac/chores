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

export default class LogIn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(email) {
    //this.setState({ name: name});
    this.setState({ email: email });
  }

  handlePassword(password) {
    //this.setState({ name: name});
    this.setState({ password: password });
  }

  handleSubmit = () => {
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    };

    console.log('USER INFO', userInfo);
    this.props.onLogIn(userInfo);
    Actions.joinhouse();
  };

  render() {
    console.log('THE PROPS', this.props);
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Log In - User</Text>
            </Separator>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input placerholder="email" onChangeText={this.handleEmail} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                placerholder="password"
                onChangeText={this.handlePassword}
              />
            </Item>
            <Button block primary onPress={this.handleSubmit}>
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
