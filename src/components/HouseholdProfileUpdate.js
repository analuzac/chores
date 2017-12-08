import React, { Component } from 'react';
import { Container, Content, Text, Item, Label, Input } from 'native-base';
import { View, Image } from 'react-native';

export default class HouseholdProfileUpdate extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    function memberChart(arr) {
      arr.map(element => {
        return (
          <Text style={styles.textStyle2}>
            {`${element.name} - ${element.points}pts`}
          </Text>
        );
      });
    }
    return (
      <Container>
        <Content>
          <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle1}>Household Name:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.leHouse.name}
            </Label>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leHouse.name}
          </Text> */}
          <Text style={styles.textStyle1}>Description:</Text>
          <Item stackedLabel>
            <Label style={styles.textStyle2}>
              {this.props.leHouse.description}
            </Label>
            <Input />
          </Item>
          {/* <Text style={styles.textStyle2}>
            {this.props.leHouse.description}
          </Text> */}
          <Text style={styles.textStyle1}>Members:</Text>
          {memberChart(this.props.leHouse.members)}
          {/* <Text style={styles.textStyle2}>
            {this.props.leHouse.members}
          </Text> */}
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
