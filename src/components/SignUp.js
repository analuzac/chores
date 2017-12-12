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
import { Alert, AppRegistry, View, Image, Text } from 'react-native';
// import { connect } from

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      // validations
      uniqueEmail: false,
      badPassword: false,
      emptyFields: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleName(name) {
    //this.setState({ name: name});
    this.setState({ name: name.toLowerCase() });
  }

  handleEmail(email) {
    //this.setState({ name: name});
    this.setState({ email: email.toLowerCase() });
  }

  handlePassword(password) {
    //this.setState({ name: name});
    this.setState({ password: password });
  }

  async handleSubmit() {
    // alert('hi');
    //event.preventDefault();
    // const $form = event.target;

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    //const userInfo = { this.state.name, this.state.email, this.state.password };

    // EMPTY FIELDS ERROR
    if (!email || !name || !password) {
      // if fields are blank, set all other errors to FALSE
      // unique
      this.setState({ uniqueEmail: false });
      // password
      this.setState({ badPassword: false });
      return this.setState({ emptyFields: true });
    }
    if (password.length < 5) {
      // if the password is bad, then set all other errors to false
      // uniqueEmail
      this.setState({ uniqueEmail: false });
      // empty fields
      this.setState({ emptyFields: false });
      // set bad pw to true
      return this.setState({ badPassword: true });
    }

    //console.log('LE USER', this.state.name, this.state.email, this.state.password);
    // IF all goes well

    // 1 set up the userInfo
    const userInfo = {
      firstName: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    // 2 call up the props function
    //console.log('USER INFO', userInfo);
    let returnedUser = {};
    returnedUser = await this.props.onSignUp(userInfo);

    console.log('RETURNED USERS', returnedUser);

    if (returnedUser.firstName) {
      Alert.alert('Sign Up Completed');
    } else {
      Alert.alert('Hi', returnedUser.name);
      this.setState({ uniqueEmail: true });
    }
  }

  render() {
    let errorMsg = null;
    // if (this.state.loading)
    //   return (
    //     <Content
    //       style={{
    //         marginTop: '50%'
    //       }}>
    //       <Spinner color="blue" />
    //       <Text style={{ marginLeft: '34%', color: 'black' }}> Creating Account... </Text>
    //     </Content>
    //   );
    if (this.state.emptyFields) {
      errorMsg = (
        <Text style={{ color: 'red', marginLeft: '20%' }}>
          Please fill out all required fields
        </Text>
      );
    }
    if (this.state.badPassword) {
      errorMsg = (
        <Text style={{ color: 'red', marginLeft: '20%' }}>
          Password must be at least 5 characters
        </Text>
      );
    }
    if (this.state.uniqueEmail) {
      errorMsg = (
        <Text style={{ color: 'red', marginLeft: '20%' }}>
          {' '}Email must be unique{' '}
        </Text>
      );
    }

    console.log('HI THERE');
    ////////////////////////////////////////////////////////////////////////////
    return (
      <Content>
        <Form>
          {errorMsg}
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
