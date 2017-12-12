import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
export default class CardComponent extends Component {
  render() {
    // var imageUrl = '../../public/images/bart.jpg';
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{ uri: '../../public/images/bart.jpg' }} /> */}
                {/* <Thumbnail source={require('../../public/images/bart.jpg')} /> */}
                {/* <Thumbnail source={require(imageUrl} /> */}

                <Body>
                  <Text>
                    {this.props.chore}
                  </Text>
                  <Text note>
                    Assigned: {this.props.assigned}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={this.props.image}
                style={{ height: 100, width: 200, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
