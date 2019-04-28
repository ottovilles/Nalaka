import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
export default class LoadingScreen extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <PacmanIndicator style={styles.indicator} color='orange' size={80} />
        <Text style={styles.loadingText}>Käynnistetään sovellusta...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  indicator: {
    position: 'absolute'
  },
  loadingText: {
    marginBottom: '-25%',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
