import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import JuvenesCard from '../components/JuvenesCard';

export default class KauppiScreen extends React.Component {
  static navigationOptions = {
    title: 'Kaupin kampus',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <JuvenesCard restaurantName="Ravintola Arvo" kitchenId={5} menuTypeId={60} />
        <JuvenesCard restaurantName="Ravintola Arvo, Street food" kitchenId={5} menuTypeId={86} />
        <JuvenesCard restaurantName="Café Lea" kitchenId={50026} menuTypeId={83} />
        <JuvenesCard restaurantName="Café Lea, Fusion Kitchen" kitchenId={50026} menuTypeId={3} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
