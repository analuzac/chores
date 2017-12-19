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
      // <Footer>
      // <Content>
      <FooterTab>
        <Button vertical onPress={() => Actions.dashboard()}>
          <Icon name="people" />
          <Text>Assignments</Text>
        </Button>

        <Button vertical onPress={() => Actions.choreslibrary()}>
          <Icon name="apps" />
          <Text>Chores Library</Text>
        </Button>

        {/* <Button vertical>
            <Icon name="home" />
            <Text>Household</Text>
          </Button> */}
      </FooterTab>
      // </Content>
      // </Footer>
      // </Container>
    );
  }
}

const styles = {
  itemStyle: {
    flex: 1,
    marginTop: 10
  }
};
