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
    // 0 bart, 1 lisa, 2 marge, 3 homer, 4 blank
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
      { uri: 'https://i.imgflip.com/1slnr0.jpg' }
    ];

    // assingn the user images
    let assignedImage = userImages[4];
    // console.log('ASSIGNED ', this.props.assigned.toLowerCase());
    if (this.props.assigned === 'Bart') {
      assignedImage = userImages[0];
    } else if (this.props.assigned === 'Lisa') {
      assignedImage = userImages[1];
    } else if (this.props.assigned === 'Marge') {
      assignedImage = userImages[2];
    } else if (this.props.assigned.toLowerCase() === 'homer') {
      console.log('HOMERR', userImages[3]);
      assignedImage = userImages[3];
    }

    // chore images
    // 0 livingroom (? not working use 5), 1 kitchen, 2 bathroom, 3 trash, 4 default, 5 living room
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
        //  require('.././images/livingroomSimpsonsChristmas.jpg')
        uri:
          'https://newcastlelive.com.au/wp-content/uploads/2017/12/Simpsons-Christmas.jpg'
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
      } else {
        console.log('DEFAULT ');

        choreImage = choreImages[0];
      }
      console.log(
        'LIVINGROOOM........................',
        this.props.chore.toLowerCase(),
        this.props.chore.toLowerCase().indexOf('livingroom'),
        choreImage
      );
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
            {/* <Thumbnail source={{ uri: '../../public/images/bart.jpg' }} /> */}
            {/* <Thumbnail source={require('../../public/images/bart.jpg')} /> */}
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

              {/* <Text>
                Chore {this.props.chore} = {this.props.status}
              </Text>
              <Text>
                AmgtID: {this.props.assignmentId} ChoreID: {this.props.choreId} UserID: {this.props.assignedUserId}
              </Text>
              <Text note>
                Assigned: {this.props.assigned}
              </Text>
              <Text note>
                Logged in as role : {this.props.userInfo.role}
              </Text> */}
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody large style={styles.itemStyle}>
          {/* <Image source={this.props.image} style={{ height: 100, width: 200, flex: 1 }} /> */}
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

          {/* <Picker iosHeader="Select one"
              selectedValue={this.state.selected}
              mode="dropdown"
              onValueChange={this.onValueChange.bind(this)}>
              {console.log('USERS', users, this.state.selected)}
              {users.map(user => <leItem label={user.firstName} value={user.userId} key={user.userId} />)}
            </Picker> */}
          {/* <Picker iosHeader="Select one" mode="dropdown">
              {console.log('USERS', users, this.state.selected)}

            </Picker> */}
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
