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

const leItem = Picker.leItem;

export default class ChoreProfileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0'
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Create Chore</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Image source={pic} style={styles.imageStyle} />

          <Text style={styles.textStyle1}>Chore Type:</Text>
          <Item>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.type}
          </Text> */}

          <Text style={styles.textStyle1}>Instructions:</Text>
          <Item>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.instructions}
          </Text> */}

          <Text style={styles.textStyle1}>Points:</Text>
          <Item>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leChore.points}
          </Text> */}

          <Text style={styles.textStyle1}>Status:</Text>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <leItem label="active" value="key0" style={styles.textStyle2} />
              <leItem label="inactive" value="key1" />
            </Picker>
          </Form>
          <Button block primary>
            <Text> DONE </Text>
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
