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
          <Text style={styles.textStyle1}>Name:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.firstName}
          </Text>
          <Text style={styles.textStyle1}>Email:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.email}
          </Text>
          {/* <Text style={styles.textStyle1}>Household:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.household}
          </Text> */}
          <Text style={styles.textStyle1}>Role:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.role}
          </Text>
          <Text style={styles.textStyle1}>Points Awarded:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.pointsAwarded}
          </Text>
          <Text style={styles.textStyle1}>Points Reedemed:</Text>
          <Text style={styles.textStyle2}>
            {this.props.userInfo.pointsRedeemed}
          </Text>
        </Content>
      </Container>
    );
  }
}

//
//   <View style={{ alignItems: 'center' }}>
//

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
