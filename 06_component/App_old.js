import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          marginTop: 40,
        }}
      >
        <View style={{backgroundColor: 'blue', flex: 0.4}} />
        <View style={{backgroundColor: 'red', flex: 0.6}} />
      </View>
    );
  }
}

