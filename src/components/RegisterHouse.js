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
  Separator,
  Picker
} from 'native-base';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

const leItem = Picker.Item;

export default class RegisterHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 'pick one'
      //description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHouse = this.handleHouse.bind(this);
    this.handleType = this.handleType.bind(this);
    //this.handleDescription = this.handleDescription.bind(this);
  }

  onValueChange(value: string) {
    this.setState({
      type: value
    });
  }

  handleHouse(name) {
    //this.setState({ name: name});
    this.setState({ name: name });
  }

  handleType(type) {
    //this.setState({ name: name});
    this.setState({ type: type });
  }

  // handleDescription(description) {
  //   //this.setState({ name: name});
  //   this.setState({ description: description });
  // }

  async handleSubmit() {
    const householdInfo = {
      name: this.state.name,
      type: this.state.type
      // description: this.state.description
    };

    if (
      householdInfo.name.trim().length === 0 ||
      householdInfo.type.trim().length === 0
    ) {
      Alert.alert('Invalid Entry');
      return false;
    }

    let returnedHousehold = await this.props.onRegister(householdInfo);

    //console.log('PROPS INSIDE REGISTER HOUSEHOLD', this.props);
    console.log('returnedHousehold', returnedHousehold);

    if (returnedHousehold.name) {
      const householdId = this.props.householdInfo.id;
      const userId = this.props.userInfo.id;
      const changes = {
        role: 'head',
        isHead: true,
        householdId: householdId
      };
      let returnedUpdatedUser = await this.props.onUpdateUser(
        householdId,
        userId,
        changes
      );
      console.log('>>>>>>', returnedUpdatedUser);
      if (returnedUpdatedUser.id) {
        Alert.alert(
          `Your household is live! \n🏡 \n \nInvite your housemates with: \nHousehold Name = ${returnedHousehold.name} \nKey Code = ${returnedHousehold.id}`
        );
        Actions.choreslibrary();
      }
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.formStyle}>
            {/* <Separator bordered>
              <Text style={styles.textStyle}>Household Registration</Text>
            </Separator> */}
            <Text />
            <Text />
            <Text />
            <Item large style={styles.itemStyle}>
              {/* <Label>Household Name</Label> */}
              <Input
                style={styles.inputStyle}
                name="name"
                placeholder="Name"
                onChangeText={this.handleHouse}
                value={this.state.name}
              />
            </Item>
            {/* <Item stackedLabel>
              <Label>Type of Household</Label>
              <Input
                name="type"
                onChangeText={this.handleType}
                value={this.state.type}
              />
            </Item> */}
            <Item large style={styles.itemStyle}>
              {/* <Label>Type of Household</Label> */}
              <Form style={styles.inputStyle}>
                <Picker
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.type}
                  onValueChange={this.onValueChange.bind(this)}>
                  <leItem
                    label="Type of Household        <pick one>              "
                    value="pick one"
                  />
                  <leItem label="family" value="family" />
                  <leItem label="roommates" value="rommates" />
                  <leItem label="other" value="other" />
                </Picker>
              </Form>
            </Item>
            {/* <Item stackedLabel last>
              <Label>Description</Label>
              <Input
                name="description"
                onChangeText={this.handleDescription}
                value={this.state.description}
              />
            </Item> */}
            <Button
              style={styles.buttonStyle}
              onPress={this.handleSubmit}
              large
              full
              rounded
              primary>
              <Text> Register Household </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

//

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
