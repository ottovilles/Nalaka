import React from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';
import FazerCard from '../components/FazerCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class KeskustaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };

    this.sodexo = React.createRef();
    this.fazer = React.createRef();
    this.juvenes1 = React.createRef();
    this.juvenes2 = React.createRef();
    this.juvenes3 = React.createRef();
    this.juvenes4 = React.createRef();
    this.juvenes5 = React.createRef();
    this.juvenes6 = React.createRef();
    this.juvenes7 = React.createRef();
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Keskustakampus',
      // headerRight: <Icon style={styles.headerIcon} name="settings" size={28} onPress={() => navigation.navigate('Settings')} />
    };
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.sodexo.current.fetchSodexo();
    this.fazer.current.fetchFazer();
    this.juvenes1.current.fetchJuvenes();
    this.juvenes2.current.fetchJuvenes();
    this.juvenes3.current.fetchJuvenes();
    this.juvenes4.current.fetchJuvenes();
    this.setState({refreshing: false});
  };
  
  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} /> }
      >
        <JuvenesCard ref={this.juvenes1} restaurantName="Yliopiston ravintola" kitchenId={13} menuTypeId={60} />
        <SodexoCard ref={this.sodexo} restaurantName="Linna" kitchenId={92} />
        <FazerCard ref={this.fazer} restaurantName="Minerva" kitchenId='0815' />

        <JuvenesCard ref={this.juvenes2} restaurantName="Yliopiston ravintola, VegeSÅÅSBar" kitchenId={13} menuTypeId={5} />
        <JuvenesCard ref={this.juvenes3} restaurantName="Yliopiston ravintola, Café Alakuppila" kitchenId={130018} menuTypeId={58} />
        <JuvenesCard ref={this.juvenes4} restaurantName="Yliopiston ravintola, Café & Aula Toivo (Leipäateria)" kitchenId={130019} menuTypeId={35} />
        <JuvenesCard ref={this.juvenes5} restaurantName="Yliopiston ravintola, Café & Aula Toivo (Salad & Soup)" kitchenId={130019} menuTypeId={23} />
        <JuvenesCard ref={this.juvenes6} restaurantName="Café & Lunch Pinni" kitchenId={130016} menuTypeId={60} />
        <JuvenesCard ref={this.juvenes7} restaurantName="Yliopiston ravintola, Fusion Kitchen" kitchenId={13} menuTypeId={3} />
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
  },
  divider: {
    height: 3,
    backgroundColor: 'orange'
  }
});
