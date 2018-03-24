import React, { Component } from 'react';
import { Container, Content, Text, Header, Footer } from 'native-base';
import { View, Image } from 'react-native';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default class HouseholdProfileView extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    // function memberChart(arr) {
    //   arr.forEach(element =>
    //     <Text style={styles.textStyle2}>
    //       {`${element.name} - ${element.points}pts`}
    //     </Text>
    //   );
    // }
    console.log('PROPS', this.props);
    const leMembers = this.props.householdInfo;

    if (leMembers !== null) {
      return (
        <Container>
          <HeaderComponent title="Household Profile" />
          <Content>
            <Text>{`made it far ...`}</Text>

            {/* <Image source={pic} style={styles.imageStyle} />
          <Text style={styles.textStyle1}>Household Name:</Text>
          <Text style={styles.textStyle2}>
            {this.props.householdInfo.name}
          </Text>
          <Text style={styles.textStyle1}>Description:</Text>
          <Text style={styles.textStyle2}>
            {this.props.householdInfo.description}
          </Text>
          <Text style={styles.textStyle1}>Members:</Text>
          {memberChart(this.props.householdInfo.members)}
          <Text style={styles.textStyle2}>
            {this.props.leHouse.members}
          </Text> */}
            <Text style={styles.textStyle1}>Household Name:</Text>
            <Text style={styles.textStyle2}>
              {this.props.householdInfo[0].name}
            </Text>
            <Text style={styles.textStyle1}>Description:</Text>
            <Text style={styles.textStyle2}>
              {this.props.householdInfo[0].description}
            </Text>

            <Text style={styles.textStyle1}>Members:</Text>
            {leMembers.map(leMember => {
              console.log('leMember....', leMember);
              return (
                <Text key={leMember.userId} style={styles.textStyle2}>
                  {leMember.firstName}
                </Text>
              );
            })}
          </Content>
          <Footer>
            <FooterComponent selected={'houseview'} />
          </Footer>
        </Container>
      );
    } else {
      return (
        <Container>
          <Content>
            <Text>Loading...</Text>
          </Content>
        </Container>
      );
    }
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