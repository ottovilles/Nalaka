import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
