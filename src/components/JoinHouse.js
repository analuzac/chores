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

export default class JoinHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
      house: '',
      keycode: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHouse = this.handleHouse.bind(this);
    this.handleKeyCode = this.handleKeyCode.bind(this);
  }

  handleHouse(house) {
    this.setState({ house: house });
  }

  handleKeyCode(keycode) {
    this.setState({ keycode: keycode });
  }

  async handleSubmit() {
    const userId = this.props.userInfo.id;
    const householdId = this.state.keycode;
    const changes = {
      role: 'member',
      isHead: false,
      householdId: householdId
    };

    let returnedUser = await this.props.onJoin(householdId, userId, changes);
    console.log('RETURNED USERS', returnedUser);

    if (returnedUser.email) {
      // Actions.chores();
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
              <Text style={styles.textStyle}>Log In - Household </Text>
            </Separator>
            <Item stackedLabel>
              <Label>Household Name</Label>
              <Input placerholder="house" onChangeText={this.handleHouse} />
            </Item>
            <Item stackedLabel last>
              <Label>Key Code</Label>
              <Input placerholder="keycode" onChangeText={this.handleKeyCode} />
            </Item>
            <Button block primary onPress={this.handleSubmit}>
              <Text> Submit </Text>
            </Button>
            <Text style={styles.textStyle}> - or - </Text>
            <Button
              success
              style={styles.buttonStyle}
              onPress={() => Actions.registerhouse()}>
              <Text> Create New Household </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25
    // fontWeight: 'bold'
  }
};
