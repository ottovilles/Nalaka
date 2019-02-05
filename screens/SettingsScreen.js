import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import {AsyncStorage} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
        keskustaChecked: true,
        hervantaChecked: false,
        kauppiChecked: false
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Asetukset',
    };
  };

  handleKeskustaCheckbox() {
    this.setFavoriteCampus('Keskusta');
    this.setState({
      keskustaChecked: true,
      hervantaChecked: false,
      kauppiChecked: false
    });
  }

  handleHervantaCheckbox() {
    this.setFavoriteCampus('Hervanta');

    this.setState({
      hervantaChecked: true,
      keskustaChecked: false,
      kauppiChecked: false
    });
  }

  handleKauppiCheckbox() {
    this.setFavoriteCampus('Kauppi');

    this.setState({
      keskustaChecked: false,
      hervantaChecked: false,
      kauppiChecked: true
    });
  }

  setFavoriteCampus = async (favoriteCampus) => {
    try {
      console.log('Asetettu: ' + favoriteCampus)
      await AsyncStorage.setItem('favoriteCampus', favoriteCampus);
    } catch (error) {
      console.log(error);
    }
  };

  getFavoriteCampus = async () => {
    try {
      const value = await AsyncStorage.getItem('favoriteCampus');
      if (value !== null) {
        console.log('Haettu: ' + value);
        switch (value) {
          case 'Keskusta':
            this.handleKeskustaCheckbox();
            break;
          
          case 'Hervanta':
            this.handleHervantaCheckbox();
            break;

          case 'Kauppi':
            this.handleKauppiCheckbox();
            break;

          default:
            this.handleKeskustaCheckbox();
            break;
        }
      }
    } catch (error) {
    }
  };

  componentDidMount() {
    this.getFavoriteCampus();
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
        title="Keskusta"
        checked={this.state.keskustaChecked}
        onPress={() => this.handleKeskustaCheckbox()}
        />
        <CheckBox
        title="Hervanta"
        checked={this.state.hervantaChecked}
        onPress={() => this.handleHervantaCheckbox()}
        />
        <CheckBox
        title="Kauppi"
        checked={this.state.kauppiChecked}
        onPress={() => this.handleKauppiCheckbox()}
        />
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
