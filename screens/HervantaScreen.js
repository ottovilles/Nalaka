import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HervantaScreen extends React.Component {
  static navigationOptions = {
    title: 'Hervannan kampus',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HERVANTA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
