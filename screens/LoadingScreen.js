import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {AsyncStorage} from 'react-native';

export default class LoadingScreen extends React.Component {

  constructor() {
    super();
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('favoriteCampus');
      if (value !== null) {
        console.log(value);
        this.props.navigation.navigate(value);
      } else {
        this.props.navigation.navigate('Keskusta');
      }
    } catch (error) {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
