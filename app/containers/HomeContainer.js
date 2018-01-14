import { Button, Text, View } from 'react-native';
import React from 'react';

export default class HomeContainer extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigation.navigate('About')}
          title="About"
        />
      </View>
    );
  }
}
