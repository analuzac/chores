import React, { Component } from 'react';
import { Container, Content, Text, Item, Label, Input } from 'native-base';
import { View, Image } from 'react-native';

export default class UserProfileUpdate extends Component {
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
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.leUser.name}
            </Label>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leUser.name}
          </Text> */}
          <Text style={styles.textStyle1}>Email:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.leUser.email}
            </Label>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leUser.email}
          </Text> */}

          <Text style={styles.textStyle1}>Household:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leUser.household}
          </Text>
          <Text style={styles.textStyle1}>Role:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leUser.role}
          </Text>
          <Text style={styles.textStyle1}>Points Awarded:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leUser.pointsAwarded}
          </Text>
          <Text style={styles.textStyle1}>Points Reedemed:</Text>
          <Text style={styles.textStyle2}>
            {this.props.leUser.pointsReedemed}
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
