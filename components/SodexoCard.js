import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class SodexoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sodexoCourses: [],
      isLoading: false
    };
  }

  getCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0
    let yyyy = today.getFullYear();

    return today = yyyy + '/' + mm + '/' + dd;
  }

  fetchSodexo() {
    this.setState({ isLoading: true});
    axios.get('https://www.sodexo.fi/ruokalistat/output/daily_json/' +
    this.props.kitchenId + '/' +
    this.getCurrentDate() + '/' +
    'fi'
    )
    .then((response) => {
      this.setState({
        sodexoCourses: this.state.sodexoCourses.concat(response.data.courses)
      });
      this.setState({ isLoading: false });
    })
    .catch((error) => {
      this.setState({ isLoading: false });
    })
  };

  componentDidMount() {
    this.fetchSodexo();
  }
  render() {
    return (
    <View style={styles.container}>
      <Card title={this.props.restaurantName} dividerStyle={styles.divider}>
        {
          this.state.sodexoCourses.length > 0
          ?
           this.state.sodexoCourses.map((course, i) => (
              <ListItem
                key={i}
                title={course.title_fi}
                topDivider={i === 0 ? false : true}
                titleStyle={styles.listTitle}
                />
          ))
          :
          <Text>{ this.state.isLoading ? 'Ladataan ruokatietoja' : 'Ravintola ei tarjoa ruokatietoja tälle päivälle'}</Text>
        }
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
  }
});
