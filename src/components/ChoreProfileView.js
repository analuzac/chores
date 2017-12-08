import React, { Component } from 'react';
import { Container, Content, Text, Item } from 'native-base';
import { View, Image, Platform } from 'react-native';

export default class ChoreProfileView extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        <Content>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle1}>Chore Type:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leChore.type}
          </Text>
          <Text style={styles.textStyle1}>Instructions:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leChore.instructions}
          </Text>
          <Text style={styles.textStyle1}>Points:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leChore.points}
          </Text>
          <Text style={styles.textStyle1}>Status:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leChore.status}
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = {
  textStyle1: {
    fontSize: 20,
    textDecorationLine: 'underline'
    // fontWeight: 'bold'
  },
  textStyle2: {
    fontSize: 17,
    fontStyle: 'italic'
    // fontWeight: 'bold'
  },
  imageStyle: {
    width: 193,
    height: 110
  }
};
