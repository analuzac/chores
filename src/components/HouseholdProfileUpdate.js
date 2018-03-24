import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Header,
  Title,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form,
  Card,
  CardItem,
  Item,
  Input,
  Label,
  Item as FormItem
} from 'native-base';
import { View, Image, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

const leItem = Picker.Item;

export default class HouseholdProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.householdInfo[0].type,
      name: '',
      description: ''
      //points: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    //this.handlePoints = this.handlePoints.bind(this);
  }

  onValueChange(value: string) {
    this.setState({
      type: value
    });
  }

  handleName(name) {
    this.setState({ name: name });
  }

  handleDescription(description) {
    this.setState({ description: description });
  }

  async handleSubmit() {
    console.log('Hand Sub 0');
    const leName = this.state.name
      ? this.state.name.trim()
      : this.props.householdInfo[0].name;

    const leDescription = this.state.description
      ? this.state.description.trim()
      : this.props.householdInfo[0].description;

    let updateHousehold = {
      name: leName,
      description: leDescription,
      type: this.state.type
    };
    let householdId = this.props.householdInfo[0].householdId;
    console.log('HANDLE SUB 1', updateHousehold, householdId);
    let returnedHousehold = await this.props.onUpdateHousehold(
      householdId,
      updateHousehold
    );
    console.log('RETURNED HOUSEHOLD', returnedHousehold);

    if (returnedHousehold.type) {
      Actions.houseview();
    } else {
      Alert.alert('Error');
    }
  }

  render() {
    let houseHoldPics = [
      {
        uri:
          'https://cdn1.thr.com/sites/default/files/2016/04/simpsons_family_house.jpg'
      }
    ];
    let houseHoldImage = houseHoldPics[0];
    console.log('HOUSEHOLD UPDATE - PROPS...', this.props);
    return (
      <Container>
        {/* <HeaderComponent title="Household Profile" /> */}
        <Content>
          <Card>
            <CardItem large style={styles.itemStyle}>
              <Left>
                <Body>
                  <Text style={styles.textStyle1}>
                    Household Name: {this.props.householdInfo[0].name}
                  </Text>
                  <Item style={styles.itemStyle}>
                    <Input
                      style={styles.inputStyle}
                      placeholder="name"
                      onChangeText={this.handleName}
                    />
                  </Item>
                  <Text style={styles.textStyle1}>
                    Description: {this.props.householdInfo[0].description}
                  </Text>
                  <Item stackedLabel>
                    <Input
                      placeholder="description"
                      onChangeText={this.handleDescription}
                    />
                  </Item>

                  {/* </CardItem>
            <CardItem large style={styles.itemStyle}> */}
                  <Text style={styles.textStyle1}>Type:</Text>
                  <Form>
                    <Picker
                      iosHeader="Select one"
                      mode="dropdown"
                      selectedValue={this.state.type}
                      onValueChange={this.onValueChange.bind(this)}>
                      <leItem label="family" value="family" />
                      <leItem label="roommates" value="roommates" />
                      <leItem label="other" value="other" />
                    </Picker>
                  </Form>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody large style={styles.itemStyle}>
              <Image
                source={houseHoldImage}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
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
        {/* <Footer>
          <FooterComponent selected={'houseview'} />
        </Footer> */}
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
    marginBottom: 15
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
