import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';
import FazerCard from '../components/FazerCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class KeskustaScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Keskustakampus',
      headerRight: <Icon style={styles.headerIcon} name="settings" size={28} onPress={() => navigation.navigate('Settings')} />   
    };
  };
  

  render() {
    return (
      <ScrollView style={styles.container}>
        <JuvenesCard restaurantName="Yliopiston ravintola" kitchenId={13} menuTypeId={60} />
        <SodexoCard restaurantName="Linna" kitchenId={92} />
        <FazerCard restaurantName="Minerva" kitchenId='0815' />

        <JuvenesCard restaurantName="Yliopiston ravintola, VegeSÅÅSBar" kitchenId={13} menuTypeId={5} />
        <JuvenesCard restaurantName="Yliopiston ravintola, Café Alakuppila" kitchenId={130018} menuTypeId={58} />
        <JuvenesCard restaurantName="Yliopiston ravintola, Café & Aula Toivo (Leipäateria)" kitchenId={130019} menuTypeId={35} />
        <JuvenesCard restaurantName="Yliopiston ravintola, Café & Aula Toivo (Salad & Soup)" kitchenId={130019} menuTypeId={23} />
        <JuvenesCard restaurantName="Café & Lunch Pinni" kitchenId={130016} menuTypeId={60} />
        <JuvenesCard restaurantName="Yliopiston ravintola, Fusion Kitchen" kitchenId={13} menuTypeId={3} />
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
