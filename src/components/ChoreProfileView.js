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
  Item as FormItem
} from 'native-base';
import { View, Image, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ChoreProfileView extends Component {
  render() {
    // let pic = {
    //   uri:
    //     'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };

    // chore images
    // 0 livingroom (? not working use 5), 1 kitchen, 2 bathroom, 3 trash, 4 default, 5 living room , 7 simpsons livingroom , 8 friends living room
    let choreImages = [
      {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/c/c4/Ovolo_2AR_living_room.jpg'
      },
      {
        uri:
          'https://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Kitchen/BRANDS-LP-Am-Woodmark-D.jpg'
      },
      {
        uri:
          'https://remodelerplatform.blob.core.windows.net/wwwstatewideremodelingcom/gallery/original/9b2f0ae9-c69c-4767-bb5b-4913ae04baff.jpg'
      },
      {
        uri:
          'https://soflcooperator.com/_data/fl/articles/6348_image1.jpg?w=793'
      },
      {
        uri:
          'https://cdn.cricut.com/media/catalog/product/full/2/0/2000169-7000172_4.jpg'
      },
      {
        uri:
          'https://vignette.wikia.nocookie.net/simpsons/images/c/c8/SimpsonsCouchS20HD.png/revision/latest?cb=20100605193111'
      },
      {
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/c/c4/Ovolo_2AR_living_room.jpg'
      },
      {
        uri:
          'https://newcastlelive.com.au/wp-content/uploads/2017/12/Simpsons-Christmas.jpg'
      },
      {
        uri: 'https://tvseriesfinale.com/wp-content/uploads/2015/12/S1EP7.jpg'
      }
    ];

    let images = ['.././images/livingroomSimpsonsChristmas.jpg'];

    let choreImage = choreImages[4];
    // console.log('CHORES........................', this.props.currentChore.type.toLowerCase(), this.props.currentChore.type.toLowerCase().indexOf('kitchen'));

    if (this.props.currentChore.type.toLowerCase().indexOf('livingroom') > -1) {
      console.log('HOUSEHOLD ...', this.props.currentChore.householdId);
      if (this.props.currentChore.householdId === 1) {
        console.log('THE SIMPSONS');
        choreImage = choreImages[7];
      } else if (this.props.currentChore.householdId === 2) {
        //console.log('DEFAULT ');

        choreImage = choreImages[8];
      } else {
        //console.log('DEFAULT ');

        choreImage = choreImages[0];
      }
      //console.log('LIVINGROOOM........................', this.props.chore.toLowerCase(), this.props.chore.toLowerCase().indexOf('livingroom'), choreImage);
    } else if (
      this.props.currentChore.type.toLowerCase().indexOf('kitchen') > -1
    ) {
      choreImage = choreImages[1];
    } else if (
      this.props.currentChore.type.toLowerCase().indexOf('bathroom') > -1
    ) {
      choreImage = choreImages[2];
    } else if (
      this.props.currentChore.type.toLowerCase().indexOf('trash') > -1
    ) {
      choreImage = choreImages[3];
    }

    // end of mccode //
    return (
      <Container>
        <Content>
          {/* mccode */}
          <Card>
            <CardItem large style={styles.itemStyle}>
              <Left>
                {/* <Thumbnail source={assignedImage} /> */}

                <Body>
                  <Text>
                    Chore Name: {this.props.currentChore.type}
                  </Text>
                  <Text>
                    Instructions: {this.props.currentChore.instructions}
                  </Text>
                  <Text note>
                    Status: {this.props.currentChore.status}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody large style={styles.itemStyle}>
              <Image
                source={choreImage}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem large style={styles.itemStyle}>
              {/* mccode */}
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
            </CardItem>
          </Card>
          {/* end of mccode */}
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
