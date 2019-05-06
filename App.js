import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import LoadingScreen from './screens/LoadingScreen';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
      'montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'montserrat-thin-italic': require('./assets/fonts/Montserrat/Montserrat-ThinItalic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
      return (
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator
            persistenceKey={"NavigationState"}
            renderLoadingExperimental={() => <LoadingScreen />}
            /> */}
            <LoadingScreen />
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
