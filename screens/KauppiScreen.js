import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class KauppiScreen extends React.Component {
  static navigationOptions = {
    title: 'Kaupin kampus',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>KAUPPI</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
