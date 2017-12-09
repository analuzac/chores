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

import LogIn from './LogIn';

export default function LogInPage({ onLogIn, userInfo, history, errorMsg }) {
  console.log('THE PROPS - PAGE', this.props);
  return (
    <Container>
      <Content>
        <LogIn
          userInfo={userInfo}
          onLogIn={onLogIn}
          history={history}
          errorMsg={errorMsg}
        />
      </Content>
    </Container>
  );
}

{
  /* <View style={{ height: '100%', paddingTop: 60 }}>
</View>
   */
}
