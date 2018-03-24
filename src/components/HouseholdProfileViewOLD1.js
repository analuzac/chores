import React, { Component } from 'react';
import {
  Container,
  Content,
  Body,
  Text,
  Header,
  Footer,
  Card,
  CardItem,
  Button
} from 'native-base';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import CardListMemberComponent from './CardListMemberComponent';

export default class HouseholdProfileView extends Component {
  // mccode 2/17
  constructor(props) {
    super(props);
  }

  // end of mccode
  render() {
    const leMembers = this.props.householdInfo;
    // if (!leMembers) {
    //   leMembers = [{ name: '' }];
    // }
    let houseHoldPics = [
      {
        uri:
          'https://cdn1.thr.com/sites/default/files/2016/04/simpsons_family_house.jpg'
      }
    ];
    let houseHoldImage = houseHoldPics[0];
    // function memberChart(arr) {
    //   arr.forEach(element =>
    //     <Text style={styles.textStyle2}>
    //       {`${element.name} - ${element.points}pts`}
    //     </Text>
    //   );
    // }
    console.log('PROPS in HouseholdProfileView COMP 3333333', leMembers);
    if (leMembers !== null) {
      //console.log('no MEMbERS');

      return (
        <Container>
          <HeaderComponent title="Household Profile" />
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Household Name: {this.props.householdInfo[0].name}
                  </Text>
                  <Text>
                    Description: {this.props.householdInfo[0].description}
                  </Text>
                  <Text>
                    Type: {this.props.householdInfo[0].type}
                  </Text>
                </Body>
              </CardItem>
              <CardItem cardBody large style={styles.itemStyle}>
                <Image
                  source={houseHoldImage}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem large style={styles.itemStyle}>
                {this.props.userInfo.role === 'head'
                  ? <Button
                      style={styles.buttonStyle}
                      full
                      rounded
                      info
                      onPress={() => Actions.houseupdate()}>
                      <Text>EDIT HOUSEHOLD</Text>
                    </Button>
                  : null}
              </CardItem>
            </Card>
            {/* <CardListMemberComponent leMembers={leMembers} /> */}
            {leMembers.map(leMember => {
              console.log('leMember....', leMember);
              // return (
              //   <Text key={leMember.userId} style={styles.textStyle2}>
              //     {leMember.firstName}
              //   </Text>
              // );
              return (
                <CardListMemberComponent
                  userId={leMember.userId} //
                  firstName={leMember.firstName} //
                  householdId={leMember.householdId}
                  role={leMember.role}
                />
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
  } // end of render
} // end of class

//
//   <View style={{ alignItems: 'center' }}>
//

const styles = {
  itemStyle: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15
    // marginHorizontal: 15,
    // justifyContent: 'center'
  },
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
