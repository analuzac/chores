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

const leItem = Picker.Item;

export default class ChoreProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'active',
      type: '',
      instructions: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleInstructions = this.handleInstructions.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  onValueChange(value: string) {
    this.setState({
      status: value
    });
  }

  handleType(type) {
    this.setState({ type: type });
  }

  handleInstructions(instructions) {
    this.setState({ instructions: instructions });
  }

  // handlePoints(points) {
  //   this.setState({ points: points });
  // }

  async handleSubmit() {
    const leType = this.state.type
      ? this.state.type.trim()
      : this.props.currentChore.type;
    const leInstructions = this.state.instructions
      ? this.state.instructions.trim()
      : this.props.currentChore.instructions;
    // const lePoints = this.state.points
    //   ? this.state.points.trim()
    //   : this.props.currentChore.points;

    let updateChore = {
      type: leType,
      instructions: leInstructions,
      //points: lePoints,
      status: this.state.status
    };
    let choreId = this.props.currentChore.id;
    let householdId = this.props.currentChore.householdId;
    let returnedChore = await this.props.onUpdateChore(
      householdId,
      choreId,
      updateChore
    );
    console.log('RETURNED CHORE', returnedChore);

    if (returnedChore.type) {
      Actions.pop();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
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

    return (
      <Container>
        <Content>
          {/* mccode */}
          <Card>
            <CardItem large style={styles.itemStyle}>
              <Left>
                {/* <Thumbnail source={assignedImage} /> */}

                <Body>
                  <Text style={styles.textStyle1}>
                    Chore Name: {this.props.currentChore.type}
                  </Text>
                  <Item stackedLabel>
                    <Input
                      placeholder="chore name"
                      onChangeText={this.handleType}
                    />
                  </Item>
                  <Text style={styles.textStyle1}>
                    Instructions: {this.props.currentChore.instructions}
                  </Text>
                  <Item stackedLabel>
                    <Input
                      placeholder="instructions"
                      onChangeText={this.handleInstructions}
                    />
                  </Item>
                  <Text style={styles.textStyle1}>Status:</Text>
                  <Form>
                    <Picker
                      iosHeader="Select one"
                      mode="dropdown"
                      selectedValue={this.state.status}
                      onValueChange={this.onValueChange.bind(this)}>
                      <leItem
                        label="active"
                        value="active"
                        style={styles.textStyle2}
                      />
                      <leItem label="inactive" value="inactive" />
                    </Picker>
                  </Form>
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
                    onPress={this.handleSubmit}
                    full
                    rounded
                    primary>
                    <Text> DONE </Text>
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
