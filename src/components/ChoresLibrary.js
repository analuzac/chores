import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Badge,
  Alert,
  Separator,
  Footer,
  FooterTab
} from 'native-base';
import { Actions } from 'react-native-router-flux';
// import HeaderIconText from './HeaderIconText';
// import Footer from './Footer';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default class ChoresLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleChore = this.handleChore.bind(this);
  }

  async handleChore(key) {
    let choreId = key;
    let householdId = this.props.userInfo.householdId;
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
    console.log('WHATS IN THE STATE?', this.props);
    let leChores = this.props.chores;
    //console.log('INSIDE CHORES LIBRARY COMPONENT', leChores);

    return (
      <Container>
        {/* <HeaderIconText /> */}
        <HeaderComponent title="Chores Library" />
        <Content>
          <Separator bordered>
            <Text style={styles.textStyle}>Household Chores:</Text>
          </Separator>
          {leChores.map(leChore => {
            //console.log('leChore', leChore);
            return (
              <Button
                large
                full
                rounded
                bordered
                style={styles.buttonStyle}
                key={leChore.id}
                onPress={() => {
                  return this.handleChore(leChore.id);
                }}>
                <Text>
                  {leChore.type}
                </Text>
              </Button>
            );
          })}
          <Text />
          {this.props.userInfo.role === 'head'
            ? <Button
                style={styles.buttonStyle}
                full
                rounded
                info
                onPress={() => Actions.choresadd()}>
                <Icon name="add" />
                <Text>Add a Chore</Text>
              </Button>
            : null}
          <Text />
          {this.props.userInfo.role === 'head'
            ? <Button
                style={styles.buttonStyle}
                full
                rounded
                info
                onPress={() => Actions.dashboard()}>
                <Icon name="people" />
                <Text>Assign Chores</Text>
              </Button>
            : null}
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Container>
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
    // marginRight: 15,
    // marginLeft: 15,
    // marginBottom: 15
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
