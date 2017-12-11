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

export default class RegisterHousehold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
      house: '',
      type: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHouse = this.handleHouse.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleHouse(house) {
    //this.setState({ name: name});
    this.setState({ house: house });
  }

  handleType(type) {
    //this.setState({ name: name});
    this.setState({ type: type });
  }

  handleDescription(description) {
    //this.setState({ name: name});
    this.setState({ description: description });
  }

  handleSubmit = () => {
    const householdInfo = {
      house: this.state.house,
      type: this.state.type,
      description: this.state.description
    };

    console.log('HOUSE INFO', householdInfo);
    this.props.onRegister(householdInfo);
    //Actions.dashboard();
  };

  render() {
    console.log('THE PROPS', this.props);
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Household Registration</Text>
            </Separator>
            <Item stackedLabel>
              <Label>Household Name</Label>
              <Input placerholder="house" onChangeText={this.handleHouse} />
            </Item>
            <Item stackedLabel>
              <Label>Type of Household</Label>
              <Input placerholder="type" onChangeText={this.handleType} />
            </Item>
            <Item stackedLabel last>
              <Label>Description</Label>
              <Input
                placerholder="description"
                onChangeText={this.handleDescription}
              />
            </Item>
            <Button block primary>
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
