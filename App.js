import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import LoadingScreen from './screens/LoadingScreen';

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator
            persistenceKey={"NavigationState"}
            renderLoadingExperimental={() => <LoadingScreen />}
            />
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
