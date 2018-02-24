import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Header,
  Title,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form,
  Item,
  Input,
  Label,
  Item as FormItem
} from 'native-base';
import { Alert, View, Image, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChoreProfileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      instructions: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  handleType(type) {
    this.setState({ type: type });
  }

  handleInstructions(instructions) {
    this.setState({ instructions: instructions });
  }

  // handlePoints(points) {
  //   this.setState({ points: points });
  // }

  async handleSubmit() {
    let newChore = {
      type: this.state.type,
      instructions: this.state.instructions
      //points: this.state.points
    };

    if (!newChore.type || !newChore.instructions) {
      Alert.alert('Please fill out the fields');
      return false;
    }

    let householdId = this.props.userInfo.householdId;
    let returnedChore = await this.props.onCreateChore(householdId, newChore);
    //console.log('RETURNED CHORE', returnedChore);

    const newAssignment = {
      choreId: returnedChore.id,
      assignedUserId: this.props.userInfo.id,
      status: 'pending',
      dueDate: '2017-12-15 12:29:45.964056'
    };
    const theAssignment = await this.props.createAssignment2(newAssignment);
    console.log('CC ADD ASSMT', theAssignment);

    if (returnedChore.type && theAssignment.status) {
      Alert.alert('Added Assignment');
      Actions.choreslibrary();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    // let pic = {
    //   uri:
    //     'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    return (
      <Container>
        <Content>
          {/* <Image source={pic} style={styles.imageStyle} /> */}
          <Text style={styles.textStyle1}>Chore Name:</Text>
          <Item style={styles.itemStyle}>
            <Input placerholder="type" onChangeText={this.handleType} />
          </Item>

          <Text style={styles.textStyle1}>Instructions:</Text>
          <Item style={styles.itemStyle}>
            <Input
              placerholder="instructions"
              onChangeText={this.handleInstructions}
            />
          </Item>

          {/* <Text style={styles.textStyle1}>Points:</Text>
          <Item>
            <Input placerholder="points" onChangeText={this.handlePoints} />
          </Item> */}

          <Button
            style={styles.buttonStyle}
            onPress={this.handleSubmit}
            full
            rounded
            primary>
            <Text> SUBMIT </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  // contentStyle: {
  //   display: 'flex',
  //   // backgroundColor: 'red',
  //   justifyContent: 'center'
  //   // alignItems: 'center'
  // },
  itemStyle: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5
    // marginHorizontal: 15,
    // justifyContent: 'center'
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 15
    //flexDirection: 'row',
  },
  textStyle1: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
    // textAlign: 'center'
    // fontWeight: 'bold'
  },
  textStyle2: {
    fontSize: 17,
    fontStyle: 'italic',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5
    // textAlign: 'center'
    // fontWeight: 'bold'
  }
  // imageStyle: {
  //   width: 193,
  //   height: 110
  // }
};
