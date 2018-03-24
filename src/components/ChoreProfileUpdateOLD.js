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
import { View, Image, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

const leItem = Picker.Item;

export default class ChoreProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'active',
      type: '',
      instructions: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  onValueChange(value: string) {
    this.setState({
      status: value
    });
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
    const leType = this.state.type
      ? this.state.type.trim()
      : this.props.currentChore.type;
    const leInstructions = this.state.instructions
      ? this.state.instructions.trim()
      : this.props.currentChore.instructions;
    // const lePoints = this.state.points
    //   ? this.state.points.trim()
    //   : this.props.currentChore.points;

    let updateChore = {
      type: leType,
      instructions: leInstructions,
      //points: lePoints,
      status: this.state.status
    };
    let choreId = this.props.currentChore.id;
    let householdId = this.props.currentChore.householdId;
    let returnedChore = await this.props.onUpdateChore(
      householdId,
      choreId,
      updateChore
    );
    console.log('RETURNED CHORE', returnedChore);

    if (returnedChore.type) {
      Actions.pop();
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
          <Item stackedLabel style={styles.itemStyle}>
            <Label style={styles.textStyle2}>
              {this.props.currentChore.type}
            </Label>
            <Input placerholder="type" onChangeText={this.handleType} />
          </Item>

          <Text style={styles.textStyle1}>Instructions:</Text>
          <Item stackedLabel style={styles.itemStyle}>
            <Label style={styles.textStyle2}>
              {this.props.currentChore.instructions}
            </Label>
            <Input
              placerholder="instructions"
              onChangeText={this.handleInstructions}
            />
          </Item>

          {/* <Text style={styles.textStyle1}>Points:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.currentChore.points}
            </Label>
            <Input placerholder="points" onChangeText={this.handlePoints} />
          </Item> */}

          <Text style={styles.textStyle1}>Status:</Text>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.status}
              onValueChange={this.onValueChange.bind(this)}>
              <leItem label="active" value="active" style={styles.textStyle2} />
              <leItem label="inactive" value="inactive" />
            </Picker>
          </Form>
          <Button
            style={styles.buttonStyle}
            onPress={this.handleSubmit}
            full
            rounded
            primary>
            <Text> DONE </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  // formStyle: {
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
  },
  imageStyle: {
    width: 193,
    height: 110
  }
};