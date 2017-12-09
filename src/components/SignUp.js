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
    const userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    console.log('USER INFO', userInfo);
    this.props.onSignUp(userInfo);
  };

  render() {
    console.log('THE PROPS', this.props);

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
          <Button block primary onPress={this.handleSubmit}>
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
