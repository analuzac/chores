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

export default class RegisterHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHouse = this.handleHouse.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleHouse(name) {
    //this.setState({ name: name});
    this.setState({ name: name });
  }

  handleType(type) {
    //this.setState({ name: name});
    this.setState({ type: type });
  }

  handleDescription(description) {
    //this.setState({ name: name});
    this.setState({ description: description });
  }

  async handleSubmit() {
    const householdInfo = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description
    };

    let returnedHousehold = await this.props.onRegister(householdInfo);

    console.log('PROPS INSIDE REGISTER HOUSEHOLD', this.props);
    console.log('returnedHousehold', returnedHousehold);
    if (returnedHousehold.name) {
      this.props.onUpdateUser(this.props.userInfo, this.props.householdInfo);
      Alert.alert('Welcome!', returnedHousehold.name);
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
              <Text style={styles.textStyle}>Household Registration</Text>
            </Separator>
            <Item stackedLabel>
              <Label>Household Name</Label>
              <Input
                name="name"
                onChangeText={this.handleHouse}
                value={this.state.name}
              />
            </Item>
            <Item stackedLabel>
              <Label>Type of Household</Label>
              <Input
                name="type"
                onChangeText={this.handleType}
                value={this.state.type}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Description</Label>
              <Input
                name="description"
                onChangeText={this.handleDescription}
                value={this.state.description}
              />
            </Item>
            <Button onPress={this.handleSubmit} block primary>
              <Text> Submit </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

//

const styles = {
  // buttonStyle: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  textStyle: {
    // color: 'blue',
    // fontWeight: 'bold',
    fontSize: 25
  }
};
