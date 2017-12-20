import React, { Component } from 'react';
import { Container, Content, Text, Item, Button } from 'native-base';
import { View, Image, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChoreProfileView extends Component {
  render() {
    // let pic = {
    //   uri:
    //     'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    return (
      <Container>
        <Content>
          {/* <Image source={pic} style={styles.imageStyle} /> */}
          <Text style={styles.textStyle1}>Chore Name:</Text>
          <Text style={styles.textStyle2}>
            {this.props.currentChore.type}
          </Text>
          <Text style={styles.textStyle1}>Instructions:</Text>
          <Text style={styles.textStyle2}>
            {this.props.currentChore.instructions}
          </Text>
          {/* <Text style={styles.textStyle1}>Points:</Text>
          <Text style={styles.textStyle2}>
            {this.props.currentChore.points}
          </Text> */}
          <Text style={styles.textStyle1}>Status:</Text>
          <Text style={styles.textStyle2}>
            {this.props.currentChore.status}
          </Text>
          {this.props.userInfo.role === 'head'
            ? <Button
                style={styles.buttonStyle}
                onPress={() => Actions.choresupdate()}
                full
                rounded
                primary>
                <Text> EDIT CHORE </Text>
              </Button>
            : null}
        </Content>
      </Container>
    );
  }
}

const styles = {
  // formStyle: {
  //   display: 'flex',
  //   // backgroundColor: 'red',
  //   justifyContent: 'center'
  //   // alignItems: 'center'
  // },
  itemStyle: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5
    // marginHorizontal: 15,
    // justifyContent: 'center'
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 15
    //flexDirection: 'row',
  },
  textStyle1: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
    // textAlign: 'center'
    // fontWeight: 'bold'
  },
  textStyle2: {
    fontSize: 17,
    fontStyle: 'italic',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5
    // textAlign: 'center'
    // fontWeight: 'bold'
  },
  imageStyle: {
    width: 193,
    height: 110
  }
};
