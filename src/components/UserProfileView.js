import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { View, Image } from 'react-native';

export default class UserProfileView extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        <Content>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle}>...User Name Here...</Text>
          <Text style={styles.textStyle}>...User Email Here...</Text>
          <Text style={styles.textStyle}>...Household Name Here - role...</Text>
          <Text style={styles.textStyle}>...Points Awarded...</Text>
          <Text style={styles.textStyle}>...Points Reedemed...</Text>
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
