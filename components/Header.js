import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.headerContainer}>
            <Icon style={styles.headerMenuIcon} name="menu" size={28} /> 
            <Text style={styles.headerTitle}>{this.props.title}</Text>
            <Icon style={styles.headerSortIcon} name="import-export" size={28} /> 

        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: '600',
        fontSize: 16,
    },
    headerMenuIcon: {
        position: 'absolute',
        left: 0,
        paddingLeft: 8
    },
    headerSortIcon: {
        position: 'absolute',
        right: 0,
        paddingRight: 8
    }
  });