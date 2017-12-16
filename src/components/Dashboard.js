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
  Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
// import HeaderIconText from './HeaderIconText';
// import Footer from './Footer';

import CardComponent from './CardComponent';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    };
  }
  render() {
    const leAssignments = this.props.assignments;
    const users = this.props.users;
    console.log('INSIDE DASHBOARD', leAssignments, users);
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Container>
        {/* <HeaderIconText /> */}
        <Content>
          {/* <Text onPress={() => Actions.login()}>Go to Login Screen</Text>

          <Text onPress={() => Actions.register()}>
            Go to Registration Screen
          </Text> */}

          {/* <CardComponent
            key="99"
            assigned="Bart Simpson"
            chore="Kitchen"
            image={pic}
          /> */}

          {leAssignments.map(leAssignment => {
            //console.log('leAssignment', leAssignment);
            //console.log('ID', leAssignment.userId);

            return (
              <Content key={leAssignment.assignmentId}>
                <CardComponent
                  assignmentId={leAssignment.assignmentId} //
                  assigned={leAssignment.firstName} //
                  chore={leAssignment.type} //
                  choreId={leAssignment.choreId} //
                  image={pic} //
                  users={users}
                  assignedUserId={leAssignment.userId}
                  updateAssignment={this.props.updateAssignment}
                  householdId={leAssignment.householdId}
                  status={leAssignment.status}
                />
              </Content>
            );
          })}
          {/* <Card>
            <CardItem>
              <Body>
                <Text>Hi There</Text>
              </Body>
            </CardItem>
          </Card> */}
        </Content>
        {/* <Footer /> */}
      </Container>
    );
  }
}
