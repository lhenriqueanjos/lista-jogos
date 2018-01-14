import { Text } from 'react-native';
import React from 'react';

export default class AboutContainer extends React.Component {
  static navigationOptions = {
    title: 'About'
  };
  render() {
    return <Text>Created by server_ino</Text>;
  }
}
