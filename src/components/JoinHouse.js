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

export default class JoinHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
      house: '',
      keycode: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleHouse = this.handleHouse.bind(this);
    this.handleKeyCode = this.handleKeyCode.bind(this);
  }

  handleHouse(house) {
    //this.setState({ name: name});
    this.setState({ house: house });
  }

  handleKeyCode(keycode) {
    //this.setState({ name: name});
    this.setState({ keycode: keycode });
  }

  handleSubmit = () => {
    const householdInfo = {
      house: this.state.house,
      keycode: this.state.keycode
    };

    console.log('HOUSE INFO', householdInfo);
    this.props.onJoin(householdInfo);
    Actions.dashboard();
  };

  handleNew = () => {
    Actions.registerhouse();
  };

  render() {
    console.log('THE PROPS', this.props);
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Log In - Household </Text>
            </Separator>
            <Item stackedLabel>
              <Label>Household Name</Label>
              <Input placerholder="house" onChangeText={this.handleHouse} />
            </Item>
            <Item stackedLabel last>
              <Label>Key Code</Label>
              <Input placerholder="keycode" onChangeText={this.handleKeyCode} />
            </Item>
            <Button block primary onPress={this.handleSubmit}>
              <Text> Submit </Text>
            </Button>
            <Text style={styles.textStyle}> - or - </Text>
            <Button success style={styles.buttonStyle} onPress={this.handleNew}>
              <Text> Create New Household </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25
    // fontWeight: 'bold'
  }
};
