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

export default class JoinHousehold extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Log In - Household </Text>
            </Separator>
            <Item stackedLabel>
              <Label>Household Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Key Code</Label>
              <Input />
            </Item>
            <Button block primary>
              <Text> Submit </Text>
            </Button>
            <Text style={styles.textStyle}> - or - </Text>
            <Button success style={styles.buttonStyle}>
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
