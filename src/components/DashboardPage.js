import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Separator
} from 'native-base';

import Dashboard from './Dashboard';

export default function DashboardPage({
  onRegister,
  householdInfo,
  history,
  errorMsg
}) {
  console.log('THE PROPS - PAGE', this.props);
  return (
    <Container>
      <Content>
        <Dashboard history={history} errorMsg={errorMsg} />
      </Content>
    </Container>
  );
}

//<Dashboard
//   assignments={assigments}
//   history={history}
//   errorMsg={errorMsg}
// />
{
  /* <View style={{ height: '100%', paddingTop: 60 }}>
</View>
   */
}
