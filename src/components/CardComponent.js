import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

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

// const leItem = Picker.Item;

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.assignedUserId,
      assignmentId: this.props.assignmentId,
      householdId: this.props.householdId,
      choreId: this.props.choreId,
      users: this.props.users
    };
    this.handleDone = this.handleDone.bind(this);
  }

  async handleDone() {
    //console.log('State Assmgt ', this.state.assignmentId);

    const updateAssignment = {
      assignmentId: this.state.assignmentId,
      assignedUserId: this.props.assignedUserId,
      status: 'done',
      householdId: this.props.householdId
    };
    //  console.log('updateAmt', updateAssignment);

    const assignment = await this.props.updateAssignment(updateAssignment);

    //console.log('Assigned and all users', this.props.assignedUserId, this.props.users);

    // 1 get the next User to assign based on the Array
    let indexUser = 10;

    indexUser = this.props.users.findIndex(element => {
      // console.log('COMPARE', element.userId, this.props.assignedUserId);

      console.log('element.userId ==', element.userId);
      console.log('this.props.assignedUserId===', this.props.assignedUserId);
      if (element.userId === this.props.assignedUserId) {
        console.log('...', element.userId, element);
        //
        return element;
      }
    });
    //  console.log('INDX USER', indexUser, this.props.users.length);

    if (indexUser + 1 === this.props.users.length) {
      indexUser = 0;
    } else {
      indexUser += 1;
    }

    //  console.log('Next USER', indexUser, this.props.users[indexUser].userId);
    // ADD
    const newAssignment = {
      choreId: this.state.choreId,
      assignedUserId: this.props.users[indexUser].userId,
      status: 'pending',
      dueDate: '2017-12-15 12:29:45.964056'
    };
    const theAssignment = await this.props.createAssignment(newAssignment);

    console.log('CC ADD ASSMT', theAssignment);

    if (assignment.status) {
      Alert.alert('High Five! \n🙌🏼');
      // Actions.dashboard();
    } else {
      Alert.alert('Error');
    }
  }

  async onValueChange(value: string) {
    //console.log('VALUE.............', value, this.state.assignmentId);
    this.setState({
      selected: value
    });

    const updateAssignment = {
      assignmentId: this.state.assignmentId,
      householdId: this.state.householdId,
      assignedUserId: value
    };

    const assignment = await this.props.updateAssignment(updateAssignment);
    console.log('CC1 UPDATE ASGME', assignment);

    if (assignment.status) {
      Alert.alert(
        'Reassigned ' + this.props.chore + ' to ' + this.props.assigned
      );
      // Actions.dashboard();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    // console.log('CC USERS', this.props);
    //console.log('CC PROPS ', this.props);

    const users = this.props.users;
    const assignedUserId = this.props.assignedUserId;
    //console.log('assignedUserId...........', assignedUserId);
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
    // console.log('ASSIGNED ', this.props.assigned.toLowerCase());
    if (this.props.assigned.toLowerCase() === 'bart') {
      assignedImage = userImages[0];
    } else if (this.props.assigned.toLowerCase() === 'lisa') {
      assignedImage = userImages[1];
    } else if (this.props.assigned.toLowerCase() === 'marge') {
      assignedImage = userImages[2];
    } else if (this.props.assigned.toLowerCase() === 'homer') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[3];
    }

    if (this.props.assigned.toLowerCase() === 'joey') {
      assignedImage = userImages[5];
    } else if (this.props.assigned.toLowerCase() === 'rachel') {
      assignedImage = userImages[6];
    } else if (this.props.assigned.toLowerCase() === 'phoebe') {
      assignedImage = userImages[7];
    } else if (this.props.assigned.toLowerCase() === 'ross') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[8];
    } else if (this.props.assigned.toLowerCase() === 'monica') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[9];
    } else if (this.props.assigned.toLowerCase() === 'chandler') {
      // console.log('HOMERR', userImages[3]);
      assignedImage = userImages[10];
    }

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
    if (this.props.chore.toLowerCase().indexOf('livingroom') > -1) {
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
    } else if (this.props.chore.toLowerCase().indexOf('kitchen') > -1) {
      choreImage = choreImages[1];
    } else if (this.props.chore.toLowerCase().indexOf('bathroom') > -1) {
      choreImage = choreImages[2];
    } else if (this.props.chore.toLowerCase().indexOf('trash') > -1) {
      choreImage = choreImages[3];
    }

    // end of mccode //

    return (
      // <Container>
      //   <Header />
      //   <Content>
      <Card>
        <CardItem large style={styles.itemStyle}>
          <Left>
            <Thumbnail source={assignedImage} />

            <Body>
              <Text>
                Chore: {this.props.chore}
              </Text>
              <Text>
                Assigned: {this.props.assigned}
              </Text>
              <Text note>
                Note: {this.props.instructions}
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
          {this.props.userInfo.role === 'head' && users.length > 1
            ? <Form style={styles.inputStyle}>
                <Text>Assign</Text>
                <Picker
                  iosHeader="Select one"
                  selectedValue={this.state.selected}
                  mode="dropdown"
                  onValueChange={this.onValueChange.bind(this)}>
                  {/* {console.log('USERS=', users)} */}
                  {users.map(user => {
                    return (
                      <Picker.Item
                        label={user.firstName}
                        value={user.userId}
                        key={user.userId}
                      />
                    );
                  })}
                </Picker>
              </Form>
            : null}

          {/* mccode */}
          {this.props.userInfo.role === 'head' ||
          this.props.userInfo.id === this.props.assignedUserId
            ? <Button
                block
                primary
                large
                full
                rounded
                success
                style={styles.buttonStyle}
                onPress={this.handleDone}>
                <Text> DONE </Text>
              </Button>
            : null}
        </CardItem>
      </Card>
      //   </Content>
      // </Container>
    );
  }
}

const styles = {
  itemStyle: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15
    // marginHorizontal: 15,
    // justifyContent: 'center'
  },
  inputStyle: {
    backgroundColor: 'white'
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 15
    //flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    // fontWeight: 'bold'
    textAlign: 'center'
  },
  formStyle: {
    display: 'flex',
    // backgroundColor: 'red',
    justifyContent: 'center'
    // alignItems: 'center'
  }
};

// ORIG mccode
// const styles = {
//   buttonStyle: {
//     flex: 1,
//     marginHorizontal: 15
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textStyle1: {
//     fontSize: 20,
//     textDecorationLine: 'underline'
//     // fontWeight: 'bold'
//   },
//   textStyle2: {
//     fontSize: 17,
//     fontStyle: 'italic'
//     // fontWeight: 'bold'
//   },
//   imageStyle: {
//     width: 193,
//     height: 110
//   }
// };
