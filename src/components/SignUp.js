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
  Separator
} from 'native-base';
import { AppRegistry, View, Image, Text } from 'react-native';
// import { connect } from

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
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
    //this.setState({ name: name});
    this.setState({ name: name });
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
    // alert('hi');
    //event.preventDefault();
    // const $form = event.target;

    //const name = $form.name.value;
    // const email = $form.email.value;
    // const password = $form.password.value;
    //const userInfo = { this.state.name, this.state.email, this.state.password };
    console.log(
      'LE USER',
      this.state.name,
      this.state.email,
      this.state.password
    );

    // let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //
    // if (email.match(regEmail) && password.length >= 8) {
    // this.props.onSignUp(userInfo);
    // this.props.history.push('/login');
    // } else this.setState({ hasValidationErrors: true });
  };
  // onEmailChange(text) {
  //   this.props.onSignUp(text)
  //   console.log('LE TEXT', text);
  // }

  render() {
    console.log('HI THERE');
    return (
      <Content>
        <Form>
          <Separator bordered>
            <Text style={styles.textStyle}>User Registration</Text>
          </Separator>
          <Item stackedLabel>
            <Label>Full Name</Label>
            <Input placerholder="name" onChangeText={this.handleName} />
          </Item>
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
          <Button onPress={this.handleSubmit}>
            <Text> Submit </Text>
          </Button>
        </Form>
      </Content>
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
    // color: 'blue',
    // fontWeight: 'bold',
    fontSize: 25
  }
};
