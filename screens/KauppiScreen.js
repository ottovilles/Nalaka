import React from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import JuvenesCard from '../components/JuvenesCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class KauppiScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };

    this.juvenes1 = React.createRef();
    this.juvenes2 = React.createRef();
    this.juvenes3 = React.createRef();
    this.juvenes4 = React.createRef();
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Kaupin kampus',
      // headerRight: <Icon style={styles.headerIcon} name="settings" size={28} onPress={() => navigation.navigate('Settings')} />
    };
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
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
        <JuvenesCard ref={this.juvenes1} restaurantName="Ravintola Arvo" kitchenId={5} menuTypeId={60} />
        <JuvenesCard ref={this.juvenes2} restaurantName="Ravintola Arvo, Street food" kitchenId={5} menuTypeId={86} />
        <JuvenesCard ref={this.juvenes3} restaurantName="Café Lea" kitchenId={50026} menuTypeId={83} />
        <JuvenesCard ref={this.juvenes4} restaurantName="Café Lea, Fusion Kitchen" kitchenId={50026} menuTypeId={3} />
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