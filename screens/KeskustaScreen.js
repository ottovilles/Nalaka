import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';

export default class KeskustaScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    title: 'Keskustakampus',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <JuvenesCard restaurantName="Yliopiston ravintola" kitchenId={13} menuTypeId={60} />
        <SodexoCard restaurantName="Linna" kitchenId={92} />
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
