import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class JuvenesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      juvenesObject: null,
      isLoading: false
    };
  }

  cleanJSON(jsonToClean) {
    const removePrefix = jsonToClean.substring(jsonToClean.indexOf("{"));
    const removeTrail = removePrefix.substr(0, removePrefix.lastIndexOf("}") + 1);
    return removeTrail;
  }

  getCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0
    let yyyy = today.getFullYear();

    return today = dd + '/' + mm + '/' + yyyy;
  }

  fetchJuvenes() {
    this.setState({ isLoading: true });
    axios.get(
      'http://www.juvenes.fi//DesktopModules/Talents.LunchMenu/LunchMenuServices.asmx/GetMenuByDate?' +
      'KitchenId=' + this.props.kitchenId +
      '&MenuTypeId=' + this.props.menuTypeId +
      '&Date=' + this.getCurrentDate() +
      '&lang=fi'
      )
    .then((response) => {
      this.setState({ juvenesObject: JSON.parse(this.cleanJSON(response.data)) });
      this.setState({ isLoading: false });
    })
    .catch((error) => {
      this.setState({ isLoading: false });
    })
  };

  returnSides(course) {
    if (course.MenuItems.length > 1) {
      let sideDishes = ''

      for (let i = 1; i < course.MenuItems.length; i++) {
        if (course.MenuItems[i].Name && course.MenuItems[i].Name !== '') {
          sideDishes = sideDishes + course.MenuItems[i].Name + '\n';
        }
      }
      return sideDishes.trim();
    }

    return null;
  }

  componentDidMount() {
    this.fetchJuvenes();
  }

  render() {
    return (
    <View style={styles.container}>
      <Card title={this.props.restaurantName} dividerStyle={styles.divider}>
        {
          this.state.juvenesObject && this.state.juvenesObject.MealOptions.length > 0
          ?
          this.state.juvenesObject.MealOptions.map((course, i) => (
          <ListItem
            key={i}
            title={course.MenuItems[0].Name}
            subtitle={this.returnSides(course)}
            subtitleStyle={styles.subtitleStyle}
            topDivider={i === 0 ? false : true}
            titleStyle={styles.listTitle}
            subtitleNumberOfLines={course.MenuItems.length - 1}
            hideChevron
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
  },
  subtitleStyle: {
    fontSize: 12,
    color: 'gray'
  }
});