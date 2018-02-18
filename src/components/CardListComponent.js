import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Right,
  Left,
  Thumbnail
} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class CardListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleChore = this.handleChore.bind(this);
  }

  async handleChore(key) {
    let choreId = key;
    let householdId = this.props.householdId;
    console.log('HANDLE CHORE....', choreId, householdId);
    // console.log('HOUSEHOLD ID?', this.props.userInfo);
    let returnedChore = await this.props.onOneChore(choreId, householdId);
    console.log('RETURNED CHORE', returnedChore);

    if (returnedChore.type) {
      Actions.choresview();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    // mccode
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
    //console.log('CHORES........................', this.props.chore.toLowerCase(), this.props.chore.toLowerCase().indexOf('kitchen'));
    if (this.props.choreType.toLowerCase().indexOf('livingroom') > -1) {
      if (this.props.householdId === 1) {
        console.log('THE SIMPSONS');
        choreImage = choreImages[7];
        // choreImage = require('./images/livingroomSimpsonsChristmas.jpg');
      } else if (this.props.householdId === 2) {
        //console.log('DEFAULT ');

        choreImage = choreImages[8];
      } else {
        //console.log('DEFAULT ');

        choreImage = choreImages[0];
      }
      //console.log('LIVINGROOOM........................', this.props.chore.toLowerCase(), this.props.chore.toLowerCase().indexOf('livingroom'), choreImage);
    } else if (this.props.choreType.toLowerCase().indexOf('kitchen') > -1) {
      choreImage = choreImages[1];
    } else if (this.props.choreType.toLowerCase().indexOf('bathroom') > -1) {
      choreImage = choreImages[2];
    } else if (this.props.choreType.toLowerCase().indexOf('trash') > -1) {
      choreImage = choreImages[3];
    }

    // end of mccode
    return (
      // <Container>
      //   <Header />
      //   <Content>
      <Card
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
        <CardItem>
          <Left>
            <Thumbnail source={choreImage} />
          </Left>
          <Text>
            {this.props.choreType}
          </Text>

          <Right>
            <Button
              onPress={() => {
                return this.handleChore(this.props.choreId);
              }}>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </CardItem>
      </Card>
      //   </Content>
      // </Container>
    );
  }
}
