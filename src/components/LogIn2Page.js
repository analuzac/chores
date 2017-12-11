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

import LogIn2 from './LogIn2';

export default function LogIn2Page({ onLogIn, userInfo, history, errorMsg }) {
  console.log('THE PROPS - PAGE', this.props);
  return (
    <Container>
      <Content>
        <LogIn2
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
