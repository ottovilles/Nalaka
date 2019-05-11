import React from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import FazerCard from '../components/FazerCard';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HervantaScreen extends React.Component {
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
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Hervannan kampus',
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
        <SodexoCard ref={this.sodexo} restaurantName="Hertsi" kitchenId={12812} />
        <FazerCard ref={this.fazer} restaurantName="Reaktori" kitchenId='0812' />

        <JuvenesCard ref={this.juvenes1} restaurantName="Newton" kitchenId={6} menuTypeId={60} />
        <JuvenesCard ref={this.juvenes2} restaurantName="Newton, Street food" kitchenId={6} menuTypeId={86} />
        <JuvenesCard ref={this.juvenes3} restaurantName="Café Konehuone, Fusion Kitchen" kitchenId={60038} menuTypeId={3} />
        <JuvenesCard ref={this.juvenes4} restaurantName="Café Konehuone, Såås Bar" kitchenId={60038} menuTypeId={77} />

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
