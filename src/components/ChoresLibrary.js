import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Badge,
  Alert
} from 'native-base';
import { Actions } from 'react-native-router-flux';
// import HeaderIconText from './HeaderIconText';
// import Footer from './Footer';

export default class ChoresLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleChore = this.handleChore.bind(this);
  }

  handleChore(key) {
    console.log('KEY....', key);
  }

  pressButton() {
    Alert.alert('hi button');
  }
  render() {
    let leChores = this.props.chores;
    //console.log('INSIDE CHORES LIBRARY COMPONENT', leChores);
    //onPress={this.handleChore}

    return (
      <Container>
        {/* <HeaderIconText /> */}
        <Content>
          {leChores.map(leChore => {
            //console.log('leChore', leChore);
            return (
              <Button
                bordered
                style={styles.buttonStyle}
                key={leChore.id}
                onPress={() => {
                  return this.handleChore(leChore.id);
                }}>
                {/* onPress={this.pressButton}> */}
                <Text>
                  {leChore.type}
                </Text>
              </Button>
            );
          })}
          <Button>
            <Icon name="add" />
            <Text>Add A Chore</Text>
          </Button>

          <Button onPress={() => Actions.choresview()}>
            <Text>Assign Chores</Text>
          </Button>
        </Content>
        {/* <Footer /> */}
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
