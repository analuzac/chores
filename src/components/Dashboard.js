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
  Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
// import HeaderIconText from './HeaderIconText';
// import Footer from './Footer';

import CardComponent from './CardComponent';

export default class Dashboard extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        {/* <HeaderIconText /> */}
        <Content>
          {/* <Text onPress={() => Actions.login()}>Go to Login Screen</Text>

          <Text onPress={() => Actions.register()}>
            Go to Registration Screen
          </Text> */}

          <CardComponent assigned="Bart Simpson" chore="Kitchen" image={pic} />
          {/* <Card>
            <CardItem>
              <Body>
                <Text>Hi There</Text>
              </Body>
            </CardItem>
          </Card> */}
        </Content>
        {/* <Footer /> */}
      </Container>
    );
  }
}
