import React, { Component } from 'react';
import {
  Container,
  Header,
  Center,
  Left,
  Body,
  Text,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HeaderComponent extends Component {
  // let tmp="          ";
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>ChoreZap</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
