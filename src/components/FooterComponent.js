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
    return (
      // <Container>
      //   <Header />
      //   <Content />
      // <Footer>
      // <Content>
      <FooterTab>
        <Button
          vertical
          active={this.props.selected === 'dashboard'}
          onPress={() => Actions.dashboard()}>
          <Icon active={this.props.selected === 'dashboard'} name="people" />
          <Text>Chores</Text>
        </Button>

        <Button
          vertical
          active={this.props.selected === 'choreslibrary'}
          onPress={() => Actions.choreslibrary()}>
          <Icon active={this.props.selected === 'choreslibrary'} name="apps" />
          <Text>Library</Text>
        </Button>

        <Button
          vertical
          active={this.props.selected === 'choreslibrary'}
          onPress={() => Actions.choreslibrary()}>
          <Icon active={this.props.selected === 'choreslibrary'} name="home" />
          <Text>House</Text>
        </Button>

        <Button
          vertical
          active={this.props.selected === 'userview'}
          onPress={() => Actions.userview()}>
          <Icon active={this.props.selected === 'userview'} name="person" />
          <Text>Profile</Text>
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
