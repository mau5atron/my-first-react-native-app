import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={stylesView.container}>
        <Text style={stylesText.container}>Wow! This is my first react native app!</Text>
      </View>
    );
  }
}

const stylesView = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesText = StyleSheet.create({
  container: {
    color: "white",
  },
});
