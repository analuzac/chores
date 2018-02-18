import React, { Component } from 'react';
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
  Spinner,
  Label,
  Item,
  Item as FormItem,
  Footer,
  FooterTab
} from 'native-base';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class UserProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  handleName(name) {
    this.setState({ name: name });
  }

  handleEmail(email) {
    this.setState({ email: email.toLowerCase() });
  }

  async handleSubmit() {
    const leName = this.state.name
      ? this.state.name.trim()
      : this.props.userInfo.firstName;
    const leEmail = this.state.email
      ? this.state.email.trim()
      : this.props.userInfo.email;

    let changes = {
      firstName: leName,
      email: leEmail
      // role: this.props.userInfo.role,
      // pointsAwarded: this.props.userInfo.pointsAwarded,
      // pointsReedemed: this.props.userInfo.pointsReedemed
    };

    let userId = this.props.userInfo.id;
    let householdId = this.props.userInfo.householdId;

    let returnedUser = await this.props.onUpdateUser(
      householdId,
      userId,
      changes
    );
    console.log('RETURNED USER', returnedUser);

    if (returnedUser.firstName) {
      Actions.pop();
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
        <Content>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle1}>Name:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.userInfo.firstName}
            </Label>
            <Input placerholder="name" onChangeText={this.handleName} />
          </Item>

          <Text style={styles.textStyle1}>Email:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.userInfo.email}
            </Label>
            <Input
              placerholder="email"
              onChangeText={this.handleEmail}
              value={this.state.email}
            />
          </Item>

          <Text style={styles.textStyle1}>Role:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.role}
          </Text>

          <Text style={styles.textStyle1}>Points Awarded:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.pointsAwarded}
          </Text>

          <Text style={styles.textStyle1}>Points Reedemed:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.pointsReedemed}
          </Text>

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

//
//   <View style={{ alignItems: 'center' }}>
//

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
