import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class JuvenesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      juvenesJson: '',
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
    axios.get(
      'http://www.juvenes.fi//DesktopModules/Talents.LunchMenu/LunchMenuServices.asmx/GetMenuByDate?' +
      'KitchenId=' + this.props.kitchenId +
      '&MenuTypeId=' + this.props.menuTypeId +
      '&Date=' + this.getCurrentDate() +
      '&lang=fi'
      )
    .then((response) => {
      const json = this.cleanJSON(response.data);
      this.setState({
        juvenesJson: json
      });
    })
    .catch((error) => {
      console.log(error);
    })
  };

  returnSides(course) {
    if (course.MenuItems.length > 1) {
      let sideDishes = ''

      for (let i = 1; i < course.MenuItems.length; i++) {
        sideDishes = sideDishes + course.MenuItems[i].Name;
        
        if (i < course.MenuItems.length - 1) {
          sideDishes = sideDishes + '\n';
        }
      }
      return sideDishes;
    }

    return null;
  }

  componentDidMount() {
    this.fetchJuvenes();
  }

  render() {
    let juvenesObject = '';
    if (this.state.juvenesJson) {
      juvenesObject = JSON.parse(this.state.juvenesJson);
    } 

    return (
    <View style={styles.container}>
      <Card title={this.props.restaurantName} dividerStyle={styles.divider}>
        {
          this.state.juvenesJson
          ?
          juvenesObject.MealOptions.map((course, i) => (
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
          <Text>no data</Text>
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