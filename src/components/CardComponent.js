import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Container, //
  Header, //
  Content, //
  Card, //
  CardItem, //
  Thumbnail, //
  Text, //
  Button, //
  Icon, //
  Left, //
  Body, //
  Right, //
  List,
  ListItem,
  Radio,
  Picker,
  Form,
  Input,
  Label,
  Item,
  Item as FormItem
} from 'native-base';

// const leItem = Picker.Item;

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.assignedUserId,
      assignmentId: this.props.assignmentId,
      householdId: this.props.householdId,
      choreId: this.props.choreId
    };
    this.handleDone = this.handleDone.bind(this);
  }

  async handleDone() {
    //console.log('State Assmgt ', this.state.assignmentId);

    const updateAssignment = {
      assignmentId: this.state.assignmentId,
      assignedUserId: this.props.assignedUserId,
      status: 'done',
      householdId: this.props.householdId
    };
    console.log('updateAmt', updateAssignment);

    const assignment = await this.props.updateAssignment(updateAssignment);

    const newAssignment = {
      choreId: this.state.choreId,
      assignedUserId: this.props.assignedUserId,
      status: 'pending',
      dueDate: '2017-12-15 12:29:45.964056'
    };

    const theAssignment = await this.props.createAssignment(newAssignment);

    console.log('CC2', theAssignment);

    if (assignment.status) {
      Alert.alert('Done');
      // Actions.dashboard();
    } else {
      Alert.alert('Error');
    }
  }

  async onValueChange(value: string) {
    //console.log('VALUE.............', value, this.state.assignmentId);
    this.setState({
      selected: value
    });

    const updateAssignment = {
      assignmentId: this.state.assignmentId,
      householdId: this.state.householdId,
      assignedUserId: value
    };
    console.log('CC1', updateAssignment);

    const assignment = await this.props.updateAssignment(updateAssignment);

    if (assignment.status) {
      Alert.alert('Reassigned');
      // Actions.dashboard();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    console.log('CC USERS', this.props);
    console.log('PROPSSSS ', this.props);

    const users = this.props.users;
    const assignedUserId = this.props.assignedUserId;
    //console.log('assignedUserId...........', assignedUserId);
    // var imageUrl = '../../public/images/bart.jpg';
    return (
      // <Container>
      //   <Header />
      //   <Content>
      <Card>
        <CardItem>
          <Left>
            {/* <Thumbnail source={{ uri: '../../public/images/bart.jpg' }} /> */}
            {/* <Thumbnail source={require('../../public/images/bart.jpg')} /> */}
            {/* <Thumbnail source={require(imageUrl} /> */}

            <Body>
              <Text>
                Chore {this.props.chore} = {this.props.status}
              </Text>
              <Text>
                AmgtID: {this.props.assignmentId} ChoreID: {this.props.choreId}{' '}
                UserID: {this.props.assignedUserId}
              </Text>
              <Text note>
                Assigned: {this.props.assigned}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={this.props.image}
            style={{ height: 100, width: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text>Assign</Text>
          <Form>
            <Picker
              iosHeader="Select one"
              selectedValue={this.state.selected}
              mode="dropdown"
              onValueChange={this.onValueChange.bind(this)}>
              {/* {console.log('USERS=', users)} */}
              {users.map(user => {
                return (
                  <Picker.Item
                    label={user.firstName}
                    value={user.userId}
                    key={user.userId}
                  />
                );
              })}
            </Picker>

            {/* <Picker iosHeader="Select one"
              selectedValue={this.state.selected}
              mode="dropdown"
              onValueChange={this.onValueChange.bind(this)}>
              {console.log('USERS', users, this.state.selected)}
              {users.map(user => <leItem label={user.firstName} value={user.userId} key={user.userId} />)}
            </Picker> */}
            {/* <Picker iosHeader="Select one" mode="dropdown">
              {console.log('USERS', users, this.state.selected)}

            </Picker> */}
          </Form>
          <Button block primary onPress={this.handleDone}>
            <Text> DONE </Text>
          </Button>
        </CardItem>
      </Card>
      //   </Content>
      // </Container>
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
  textStyle1: {
    fontSize: 20,
    textDecorationLine: 'underline'
    // fontWeight: 'bold'
  },
  textStyle2: {
    fontSize: 17,
    fontStyle: 'italic'
    // fontWeight: 'bold'
  },
  imageStyle: {
    width: 193,
    height: 110
  }
};
