import React, { Component } from 'react';
import {
  Container, //
  Header, //
  Content, //
  Card, //
  CardItem, //
  Thumbnail, //
  Text, //
  Button, //
  Icon, //
  Left, //
  Body, //
  Right, //
  List,
  ListItem,
  Radio,
  Picker,
  Form,
  Input,
  Spinner,
  Label,
  Item,
  Item as FormItem,
  Footer,
  FooterTab
} from 'native-base';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default class UserProfileView extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    //mccode ////
    // 0 bart, 1 lisa, 2 marge, 3 homer,
    // 4 default
    // 5 joey, 6 rachel, 7 phoebe, 8 ross, 9 monica , 10 chander
    let userImages = [
      {
        uri:
          'https://static.comicvine.com/uploads/square_small/11/114183/5147868-bart_simpson.png'
      },
      {
        uri:
          'https://static.comicvine.com/uploads/square_small/11/114183/5147875-lisa_simpson.png'
      },
      {
        uri:
          'https://static.comicvine.com/uploads/square_small/11/114183/5147887-margesimpson.png'
      },
      {
        uri:
          'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=11624142'
      },
      { uri: 'https://i.imgflip.com/1slnr0.jpg' },
      //
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20070426103739'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/7/7e/5487b27b80c8d_-_mcx-rachel-green-0510-lgn.jpg/revision/latest/scale-to-width-down/191?cb=20160903061934'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/f/f5/Square_Phoebe.jpg/revision/latest?cb=20111216200026'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/latest?cb=20111216200027'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/7/75/Monica.jpg/revision/latest?cb=20130802071219'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/friends/images/2/21/2473459498_a3b4e40781.jpg/revision/latest/scale-to-width-down/350?cb=20100601130820'
      }
    ];

    // assingn the user images
    let assignedImage = userImages[4];
    // console.log('ASSIGNED ', this.props.userInfo.firstName.toLowerCase());
    if (this.props.userInfo.firstName.toLowerCase() === 'bart') {
      assignedImage = userImages[0];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'lisa') {
      assignedImage = userImages[1];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'marge') {
      assignedImage = userImages[2];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'homer') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[3];
    }

    if (this.props.userInfo.firstName.toLowerCase() === 'joey') {
      assignedImage = userImages[5];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'rachel') {
      assignedImage = userImages[6];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'phoebe') {
      assignedImage = userImages[7];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'ross') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[8];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'monica') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[9];
    } else if (this.props.userInfo.firstName.toLowerCase() === 'chandler') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[10];
    }

    return (
      <Container>
        <HeaderComponent title="User Profile" />
        <Content>
          {/* mccode */}
          <Card>
            <CardItem large style={styles.itemStyle}>
              <Left>
                {/* <Thumbnail source={assignedImage} /> */}

                <Body>
                  <Text>
                    Name: {this.props.userInfo.firstName}
                  </Text>
                  <Text>
                    Email: {this.props.userInfo.email}
                  </Text>
                  <Text>
                    Role: {this.props.userInfo.role}
                  </Text>
                  <Text note>Points Awarded:</Text>
                  <Text note>
                    {this.props.userInfo.pointsAwarded}
                  </Text>
                  <Text note>Points Reedemed:</Text>
                  <Text note>
                    {this.props.userInfo.pointsRedeemed}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody large style={styles.itemStyle}>
              <Image
                source={assignedImage}
                style={{ height: 500, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem large style={styles.itemStyle}>
              <Button
                style={styles.buttonStyle}
                onPress={() => Actions.userupdate()}
                full
                rounded
                primary>
                <Text> EDIT PROFILE </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterComponent selected={'userview'} />
        </Footer>
      </Container>
    );
  }
}

//
// should be: this.props.userInfo.id === householdInfo.userId
//the id of the user profile you just touched
//

//
//   <View style={{ alignItems: 'center' }}>
//

// {/* <Image source={pic} style={styles.imageStyle} />
// <Text style={styles.textStyle1}>Name:</Text>
// <Text style={styles.textStyle2}>
//   {this.props.userInfo.firstName}
// </Text>
// <Text style={styles.textStyle1}>Email:</Text>
// <Text style={styles.textStyle2}>
//   {this.props.userInfo.email}
// </Text>
//
// <Text style={styles.textStyle1}>Role:</Text>
// <Text style={styles.textStyle2}>
//   {this.props.userInfo.role}
// </Text>
// <Text style={styles.textStyle1}>Points Awarded:</Text>
// <Text style={styles.textStyle2}>
//   {this.props.userInfo.pointsAwarded}
// </Text>
// <Text style={styles.textStyle1}>Points Reedemed:</Text>
// <Text style={styles.textStyle2}>
//   {this.props.userInfo.pointsRedeemed}
// </Text> */}

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
