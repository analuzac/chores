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

import RegisterHousehold from './RegisterHousehold';

export default function RegisterHousePage({
  onRegister,
  householdInfo,
  history,
  errorMsg
}) {
  console.log('THE PROPS - PAGE', this.props);
  return (
    <Container>
      <Content>
        <RegisterHousehold
          householdInfo={householdInfo}
          onRegister={onRegister}
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
