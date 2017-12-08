import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { View, Image } from 'react-native';

export default class HouseholdProfileView extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        <Content>
          <Text style={styles.textStyle}>...Household Name Here...</Text>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle}>...Description Here...</Text>
        </Content>
      </Container>
    );
  }
}

//
//   <View style={{ alignItems: 'center' }}>
//

const styles = {
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25
    // fontWeight: 'bold'
  },
  imageStyle: {
    width: 193,
    height: 110
  }
};
