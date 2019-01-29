import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class SodexoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sodexoCourses: []
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
    axios.get('https://www.sodexo.fi/ruokalistat/output/daily_json/' +
    this.props.kitchenId + '/' +
    this.getCurrentDate() + '/' +
    'fi'
    )
    .then((response) => {
      this.setState({
      sodexoCourses: this.state.sodexoCourses.concat(response.data.courses)
      });
    })
    .catch((error) => {
      console.log(error);
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
           this.state.sodexoCourses.map((course, i) => (
              <ListItem
                key={i}
                title={course.title_fi}
                topDivider={i === 0 ? false : true}
                titleStyle={styles.listTitle}
                hideChevron
              />
          ))
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
