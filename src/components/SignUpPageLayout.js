import React, { Component } from 'react';
import { Container } from 'native-base';
export default class SignupPageLayout extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
