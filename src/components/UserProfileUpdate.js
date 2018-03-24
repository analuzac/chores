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
import { View, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class UserProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  handleName(name) {
    this.setState({ name: name });
  }

  handleEmail(email) {
    this.setState({ email: email.toLowerCase() });
  }

  async handleSubmit() {
    const leName = this.state.name
      ? this.state.name.trim()
      : this.props.userInfo.firstName;
    const leEmail = this.state.email
      ? this.state.email.trim()
      : this.props.userInfo.email;

    // 1 email format
    var mailformat = /^\w+\@\w+\.([A-Za-z0-9]{2,4})$/;

    if (!leEmail.match(mailformat)) {
      Alert.alert('Invalid email format');
      return false;
    }

    let changes = {
      firstName: leName,
      email: leEmail
      // role: this.props.userInfo.role,
      // pointsAwarded: this.props.userInfo.pointsAwarded,
      // pointsReedemed: this.props.userInfo.pointsReedemed
    };

    let userId = this.props.userInfo.id;
    let householdId = this.props.userInfo.householdId;

    let returnedUser = await this.props.onUpdateUser(
      householdId,
      userId,
      changes
    );
    console.log('RETURNED USER', returnedUser);

    if (returnedUser.firstName) {
      Actions.pop();
    } else {
      Alert.alert('Error');
    }
  }

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
        {/* <HeaderComponent title="User Profile" /> */}
        <Content>
          {/* mccode */}
          <Card>
            <CardItem large style={styles.itemStyle}>
              <Left>
                {/* <Thumbnail source={assignedImage} /> */}

                <Body>
                  <Text style={styles.textStyle1}>
                    Name: {this.props.userInfo.firstName}
                  </Text>
                  <Item stackedLabel>
                    {/* <Label style={styles.textStyle2}>{this.props.userInfo.firstName}</Label> */}
                    <Input placeholder="name" onChangeText={this.handleName} />
                  </Item>

                  <Text style={styles.textStyle1}>
                    Email: {this.props.userInfo.email}
                  </Text>
                  <Item stackedLabel>
                    {/* <Label style={styles.textStyle2}>{this.props.userInfo.email}</Label> */}
                    <Input
                      placeholder="email"
                      onChangeText={this.handleEmail}
                      value={this.state.email}
                    />
                  </Item>
                  <Text style={styles.textStyle1}>
                    Role: {this.props.userInfo.role}
                  </Text>
                  {/* <Text note>Points Awarded: {this.props.userInfo.pointsAwarded}</Text>
                  <Text note>Points Reedemed: {this.props.userInfo.pointsRedeemed}</Text> */}
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody large style={styles.itemStyle}>
              <Image
                source={assignedImage}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem large style={styles.itemStyle}>
              <Button
                style={styles.buttonStyle}
                onPress={this.handleSubmit}
                full
                rounded
                primary>
                <Text> DONE </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

//
//   <View style={{ alignItems: 'center' }}>
//

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
    fontSize: 18,
    // textDecorationLine: 'underline',
    marginRight: 5,
    marginLeft: 5,
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
