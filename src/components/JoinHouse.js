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

    if (householdId.trim().length === 0) {
      Alert.alert('Please fill out the fields');
      return false;
    }

    let returnedUser = await this.props.onJoin(householdId, userId, changes);
    console.log('RETURNED USERS', returnedUser);

    if (returnedUser.email) {
      // Actions.chores();
      Actions.dashboard();
    } else {
      Alert.alert('Invalid Key Code');
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.formStyle}>
            {/* <Separator bordered>
              <Text style={styles.textStyle}>Log In - Household </Text>
            </Separator> */}
            <Text />
            <Text />
            <Text />
            <Item large style={styles.itemStyle}>
              {/* <Label>Household Name</Label> */}
              <Input
                style={styles.inputStyle}
                name="house"
                placeholder="Household Name"
                onChangeText={this.handleHouse}
                value={this.state.house}
              />
            </Item>
            <Item large style={styles.itemStyle}>
              {/* <Label>Key Code</Label> */}
              <Input
                style={styles.inputStyle}
                name="keycode"
                placeholder="Key Code"
                onChangeText={this.handleKeyCode}
                value={this.state.keycode}
              />
            </Item>
            <Button
              style={styles.buttonStyle}
              onPress={this.handleSubmit}
              large
              full
              rounded
              primary>
              <Text> Join Household </Text>
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
