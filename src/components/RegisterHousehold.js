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

export default class RegisterHousehold extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Separator bordered>
              <Text style={styles.textStyle}>Household Registration</Text>
            </Separator>
            <Item fixedLabel>
              <Label>Household Name</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Type of Household</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Description</Label>
              <Input />
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
