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
export default class CardListMemberComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleUser = this.handleUser.bind(this);
  }

  handleUser(key) {
    let userId = key;
    let householdId = this.props.householdId;
    console.log('HANDLE User....', userId, householdId);
    // console.log('HOUSEHOLD ID?', this.props.userInfo);
    Actions.userView();
    // let returnedChore = await this.props.onOneChore(choreId, householdId);
    // console.log('RETURNED CHORE', returnedChore);
    //
    // if (returnedChore.type) {
    //   Actions.choresview();
    // } else {
    //   Alert.alert('Error');
    // }
  }

  render() {
    console.log('CardListMemberComponent');
    // mccode
    // chore images
    // 0 livingroom (? not working use 5), 1 kitchen, 2 bathroom, 3 trash, 4 default, 5 living room , 7 simpsons livingroom , 8 friends living room
    //console.log('firstNameUserId...........', firstNameUserId);
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

    let images = ['.././images/livingroomSimpsonsChristmas.jpg'];

    let userImage = userImages[4];
    //console.log('CHORES........................', this.props.chore.toLowerCase(), this.props.chore.toLowerCase().indexOf('kitchen'));
    if (this.props.firstName.toLowerCase() === 'bart') {
      userImage = userImages[0];
    } else if (this.props.firstName.toLowerCase() === 'lisa') {
      userImage = userImages[1];
    } else if (this.props.firstName.toLowerCase() === 'marge') {
      userImage = userImages[2];
    } else if (this.props.firstName.toLowerCase() === 'homer') {
      // console.log('HOMERR', userImages[3]);
      userImage = userImages[3];
    }

    if (this.props.firstName.toLowerCase() === 'joey') {
      userImage = userImages[5];
    } else if (this.props.firstName.toLowerCase() === 'rachel') {
      userImage = userImages[6];
    } else if (this.props.firstName.toLowerCase() === 'phoebe') {
      userImage = userImages[7];
    } else if (this.props.firstName.toLowerCase() === 'ross') {
      // console.log('HOMERR', userImages[3]);
      userImage = userImages[8];
    } else if (this.props.firstName.toLowerCase() === 'monica') {
      // console.log('HOMERR', userImages[3]);
      userImage = userImages[9];
    } else if (this.props.firstName.toLowerCase() === 'chandler') {
      // console.log('HOMERR', userImages[3]);
      userImage = userImages[10];
    }

    // end of mccode
    return (
      // <Container>
      //   <Header />
      //   <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={userImage} />
          </Left>
          <Text>
            {this.props.firstName}
          </Text>

          <Right>
            {/* <Button active={this.props.selected === 'houseview'} onPress={() => Actions.userview()}>
              <Icon active={this.props.selected === 'houseview'} name="arrow-forward" />
            </Button> */}
            <Button onPress={() => Actions.userview2()}>
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
