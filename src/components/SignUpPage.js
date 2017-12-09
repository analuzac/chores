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

import SignUpPageLayout from './SignUpPageLayout';
import SignUp from './SignUp';

export default function SignUpPage({ onSignUp, userInfo, history, errorMsg }) {
  return (
    <Container>
      <Content>
        <SignUp
          userInfo={userInfo}
          onSignUp={onSignUp}
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
