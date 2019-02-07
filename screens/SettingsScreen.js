import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

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
        <Text>Asetukset</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  }
});
