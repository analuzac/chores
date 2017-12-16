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

//const leItem = Picker.leItem;

export default class ChoreProfileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: 'key0',
      type: '',
      instructions: '',
      points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    this.handlePoints = this.handlePoints.bind(this);
  }

  // onValueChange(value: string) {
  //   this.setState({
  //     status: value
  //   });
  // }

  handleType(type) {
    this.setState({ type: type });
  }

  handleInstructions(instructions) {
    this.setState({ instructions: instructions });
  }

  handlePoints(points) {
    this.setState({ points: points });
  }

  async handleSubmit() {
    let newChore = {
      type: this.state.type,
      instructions: this.state.instructions,
      points: this.state.points
      // status: this.state.status
    };
    let householdId = this.props.userInfo.householdId;
    let returnedChore = await this.props.onCreateChore(householdId, newChore);
    console.log('RETURNED CHORE', returnedChore);

    if (returnedChore.type) {
      Actions.choreslibrary();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Create Chore</Title>
          </Body>
          <Right />
        </Header> */}
        <Content>
          <Image source={pic} style={styles.imageStyle} />

          <Text style={styles.textStyle1}>Chore Type:</Text>
          <Item>
            <Input placerholder="type" onChangeText={this.handleType} />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.type}
          </Text> */}

          <Text style={styles.textStyle1}>Instructions:</Text>
          <Item>
            <Input
              placerholder="instructions"
              onChangeText={this.handleInstructions}
            />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.instructions}
          </Text> */}

          <Text style={styles.textStyle1}>Points:</Text>
          <Item>
            <Input placerholder="points" onChangeText={this.handlePoints} />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.points}
          </Text> */}

          {/* <Text style={styles.textStyle1}>Status:</Text>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <leItem label="active" value="key0" style={styles.textStyle2} />
              <leItem label="inactive" value="key1" />
            </Picker>
          </Form> */}
          <Button onPress={this.handleSubmit} block primary>
            <Text> SUBMIT </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// {/* <Form>
//   <Picker
//     iosHeader="Select one"
//     mode="dropdown"
//     selectedValue={this.state.selected1}
//     onValueChange={this.onValueChange.bind(this)}>
//     <Item label="< select one >" value="key0" />
//     <Item label="Bathroom" value="key1" />
//     <Item label="Living Room" value="key2" />
//     <Item label="Kitchen" value="key3" />
//     <Item label="Floors" value="key4" />
//     <Item label="Trash/Recycling" value="key5" />
//   </Picker>
// </Form> */}
//
//   <View style={{ alignItems: 'center' }}>
//

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
