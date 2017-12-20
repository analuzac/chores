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
    this.setState({ name: name });
  }

  handleEmail(email) {
    this.setState({ email: email.toLowerCase() });
  }

  handlePassword(password) {
    this.setState({ password: password });
  }

  async handleSubmit() {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    // EMPTY FIELDS ERROR
    if (!email || !name || !password) {
      // if fields are blank, set all other errors to FALSE
      // unique
      // this.setState({ uniqueEmail: false });
      // password
      // this.setState({ badPassword: false });
      // return this.setState({ emptyFields: true });
      Alert.alert('Please fill out the fields');
      return false;
    }
    if (password.length < 5) {
      // if the password is bad, then set all other errors to false
      // uniqueEmail
      // this.setState({ uniqueEmail: false });
      // empty fields
      // this.setState({ emptyFields: false });
      // set bad pw to true
      // return this.setState({ badPassword: true });
      Alert.alert('Please have a minimum of 5 characters for password');
      return false;
    }

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
      Alert.alert('Welcome to ChoreZap! \n😎');
      Actions.login();
    } else {
      Alert.alert(returnedUser);
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
    // if (this.state.emptyFields) {
    //   errorMsg = (
    //     <Text style={{ color: 'red', marginLeft: '20%' }}>
    //       Please fill out all required fields
    //     </Text>
    //   );
    // }
    // if (this.state.badPassword) {
    //   errorMsg = (
    //     <Text style={{ color: 'red', marginLeft: '20%' }}>
    //       Password must be at least 5 characters
    //     </Text>
    //   );
    // }
    // if (this.state.uniqueEmail) {
    //   errorMsg = (
    //     <Text style={{ color: 'red', marginLeft: '20%' }}>
    //       {' '}Email must be unique{' '}
    //     </Text>
    //   );
    // }

    console.log('HI THERE');
    ////////////////////////////////////////////////////////////////////////////
    return (
      <Container>
        <Content>
          <Form style={styles.formStyle}>
            {errorMsg}
            {/* <Separator bordered>
              <Text style={styles.textStyle}>User Registration</Text>
            </Separator> */}
            <Text />
            <Text />
            <Text />
            <Item rounded style={styles.itemStyle}>
              {/* <Label>Full Name</Label> */}
              <Input
                style={styles.inputStyle}
                name="name"
                placeholder="Name"
                onChangeText={this.handleName}
                value={this.state.name}
              />
            </Item>
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
            <Item large style={styles.itemStyle}>
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
              onPress={this.handleSubmit}
              large
              full
              rounded
              primary>
              <Text> Register </Text>
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
