import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

export default class FazerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fazerObject: null,
      isLoading: false
    };
  }

  fetchFazer() {
    this.setState({ isLoading: true });
    axios.get('https://www.fazerfoodco.fi/modules/json/json/Index?' + 
    'costNumber=' + this.props.kitchenId + 
    '&language=' + 'fi'
    )
    .then((response) => {
      this.setState({ fazerObject: response.data });
      this.setState({ isLoading: false });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ isLoading: false });
    })
  };

  returnSides(course) {
    if (course.Components.length > 1) {
      let sideDishes = ''

      for (let i = 1; i < course.Components.length; i++) {
        if (course.Components[i] && course.Components[i] !== '') {
          sideDishes = sideDishes + this.removeParenthesesFromName(course.Components[i]) + '\n';
        }
      }
      return sideDishes.trim();
    }

    return null;
  }

  removeParenthesesFromName(name) {
    return name.replace(/ *\([^)]*\) */g, "");
  }

  componentDidMount() {
    this.fetchFazer();
  }

  render() {
    console.log(this.state.fazerObject);
    return (
    <View style={styles.container}>
      <Card title={this.props.restaurantName} dividerStyle={styles.divider}>
      {
          this.state.fazerObject &&
          this.state.fazerObject.MenusForDays.length > 0 &&
          this.state.fazerObject.MenusForDays[0].SetMenus.length > 0
          ?
          this.state.fazerObject.MenusForDays[0].SetMenus.map((course, i) => (
            course.Components.length > 0
            &&
          <ListItem
            key={i}
            title={this.removeParenthesesFromName(course.Components[0])}
            subtitle={this.returnSides(course)}
            subtitleStyle={styles.subtitleStyle}
            topDivider={i === 0 ? false : true}
            titleStyle={styles.listTitle}
            subtitleNumberOfLines={course.Components.length - 1}
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