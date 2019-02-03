import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Asetukset',
    };
  };

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
