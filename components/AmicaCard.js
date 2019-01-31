import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class AmicaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  fetchAmica() {
    this.setState({ isLoading: true });
    axios.get()
    .then((response) => {
      this.setState({ isLoading: false });
    })
    .catch((error) => {
      this.setState({ isLoading: false });
    })
  };


  componentDidMount() {
    this.fetchAmica();
  }

  render() {
    return (
    <View style={styles.container}>
      <Card title={this.props.restaurantName} dividerStyle={styles.divider}>
      </Card>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 8
  },
  divider: {
    height: 3,
    backgroundColor: 'orange'
  },
  listTitle: {
    fontSize: 14
  },
  subtitleStyle: {
    fontSize: 12,
    color: 'gray'
  }
});