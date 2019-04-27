import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FazerCard from '../components/FazerCard';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HervantaScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Hervannan kampus',
      headerRight: <Icon style={styles.headerIcon} name="settings" size={28} onPress={() => navigation.navigate('Settings')} />
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SodexoCard restaurantName="Hertsi" kitchenId={12812} />
        <FazerCard restaurantName="Reaktori" kitchenId='0812' />

        <JuvenesCard restaurantName="Newton" kitchenId={6} menuTypeId={60} />
        <JuvenesCard restaurantName="Newton, Street food" kitchenId={6} menuTypeId={86} />
        <JuvenesCard restaurantName="Café Konehuone, Fusion Kitchen" kitchenId={60038} menuTypeId={3} />
        <JuvenesCard restaurantName="Café Konehuone, Såås Bar" kitchenId={60038} menuTypeId={77} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerIcon: {
    paddingRight: 8
  }
});
