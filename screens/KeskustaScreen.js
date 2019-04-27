import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import SodexoCard from '../components/SodexoCard';
import JuvenesCard from '../components/JuvenesCard';
import FazerCard from '../components/FazerCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Overlay, Divider, Button } from 'react-native-elements';

export default class KeskustaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Keskustakampus',
      // headerRight: <Icon style={styles.headerIcon} name="settings" size={28} onPress={() => navigation.navigate('Settings')} />
      headerRight: <Icon style={styles.headerIcon} name="playlist-edit" size={28} onPress={navigation.getParam('visibility')} />   
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ visibility: this.changeVisibility });
  }

  changeVisibility = () => {
    this.setState({ isVisible: true });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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

        <Overlay style={styles.overlayContainer} isVisible={this.state.isVisible} onBackdropPress={() => this.setState({ isVisible: false })}>
          <Text style={styles.modalHeader}>Järjestä ravintolat</Text>
          <Divider style={styles.divider} />

          <View style={styles.buttonContainer}>
            <Button
              titleStyle={{ color: 'orange' }}
              style={styles.button}
              title="Peruuta"
              type="clear"
              onPress={() => this.setState({ isVisible: false })} />

            <Button
              titleStyle={{ color: 'orange' }}
              style={styles.button}
              title="Vahvista"
              type="clear"
              onPress={() => this.setState({ isVisible: false })} />
          </View>
        </Overlay>
      </View>
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
  },
  overlayContainer: {
    display: 'flex',
  }, 
  modalHeader: {
    padding: 8,
    alignSelf: 'center',
    fontSize: 16
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    paddingLeft: 16
  }
});
