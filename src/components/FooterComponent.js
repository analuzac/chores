import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterComponent extends Component {
  render() {
    console.log('Hi Footer.....');
    return (
      // <Container>
      //   <Header />
      //   <Content />
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.dashboard()} active badge vertical>
            <Icon active name="people" />
            <Text>Assignments</Text>
          </Button>

          <Button onPress={() => Actions.choreslibrary()} active badge vertical>
            <Icon active name="apps" />
            <Text>Chores Library</Text>
          </Button>

          {/* <Button vertical>
            <Icon name="home" />
            <Text>Household</Text>
          </Button> */}
        </FooterTab>
      </Footer>
      // </Container>
    );
  }
}
