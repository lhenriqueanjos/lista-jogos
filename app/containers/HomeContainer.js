import { Text } from 'react-native';
import React from 'react';

export default class HomeContainer extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}
