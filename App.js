import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Text style={styles.containerText}>
          Wow! This is my first react native app!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerText: {
    color: 'white',
  },
});

