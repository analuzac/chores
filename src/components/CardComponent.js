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

const leItem = Picker.leItem;

export default class CardComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userId: this.props.assignedUserId
  //     // ,  houseHoldId: this.props.users[0].householdId
  //   };
  //
  //   this.onValueChange = this.onValueChange.bind(this);
  // }
  // onValueChange() {
  //   // this.setState({
  //   //   selected1: value
  //   // });
  //   Alert.alert('hi');
  //   Actions.dashboard();
  //   // Alert.alert('USER/HH', this.state.userId, this.state.householdId);
  // }

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.assignedUserId,
      assignmentId: this.props.assignmentId,
      householdId: this.props.householdId
    };
    this.handleDone = this.handleDone.bind(this);
  }

  async handleDone() {
    //console.log('State Assmgt ', this.state.assignmentId);
    //console.log('user ', this.props.assigned);

    const updateAssignment = {
      assignmentId: this.state.assignmentId,
      assignedUserId: this.props.assignedUserId,
      status: 'done',
      householdId: this.props.householdId
    };
    console.log('updateAmt', updateAssignment);

    const assignment = await this.props.updateAssignment(updateAssignment);

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
    console.log('CC2', assignment);
    if (assignment.status) {
      Alert.alert('Reassigned');
      // Actions.dashboard();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    //console.log('CC USERS', this.props.users);
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
                {this.props.chore} = {this.props.status}
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
            {/* <Picker iosHeader="Select one" mode="dropdown"
               selectedValue={this.state.selected1}
               onValueChange={this.onValueChange.bind(this)}> */}

            {/* <Picker iosHeader="Select one" selectedValue={assignedUserId} mode="dropdown" onValueChange={Alert.alert('hi')}> */}
            <Picker
              iosHeader="Select one"
              selectedValue={this.state.selected}
              mode="dropdown"
              onValueChange={this.onValueChange.bind(this)}>
              {/* <leItem label="FAKE MEMBER 1" value="key0" style={styles.textStyle2} key="0" />
              <leItem label="FAKE MEMBER 2" value="key111" key="111" /> */}
              {/* {console.log('USERS', users)} */}
              {/* won't work with this loop  */}
              {users.map(user =>
                <leItem
                  label={user.firstName}
                  value={user.userId}
                  key={user.userId}
                />
              )}
            </Picker>
          </Form>
          <Button block primary onPress={this.handleDone}>
            <Text> DONE </Text>
          </Button>
          {/* <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right> */}
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
