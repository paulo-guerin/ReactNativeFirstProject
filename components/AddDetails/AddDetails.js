import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SearchBar } from 'react-native';
import styles from '../../assets/css/AddDetails.component.style.android.js';

export default class AddDetails extends Component {
    state = {
        addList: [
            {id: 1, title: 'Dvds Rick and Morty', category:'multimédia', description: 'Lorem Ipsum'},
            {id: 2, title: 'Dvds Bojack Horseman', category:'multimédia', description: 'Lorem Ipsum'},
            {id: 3, title: 'Dvds Steven Universe', category:'multimédia', description: 'Lorem Ipsum'},
            {id: 4, title: 'Dvds Gravity Falls', category:'multimédia', description: 'Lorem Ipsum'},
            {id: 5, title: 'Dvds Avatar the last air bender', category:'multimédia', description: 'Lorem Ipsum'},
            {id: 6, title: 'MBK Rocket', category:'véhicules', description: 'Lorem Ipsum'},
            {id: 7, title: 'Suzuki Marauder 125cc', category:'véhicules', description: 'Lorem Ipsum'},
            {id: 8, title: 'Fiat Panda', category:'véhicules', description: 'Lorem Ipsum'},
            {id: 9, title: 'K2000', category:'véhicules', description: 'Lorem Ipsum'},
            {id: 10, title: 'Supercopter', category:'véhicules', description: 'Lorem Ipsum'},
        ],
        newAdd: '',
    };

    constructor(props) {
        super(props);
    }

  render() {
      return(
          <View style={styles.containerAddDetails}>
            <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} value={search}/>
            <Text>Heloooooooo!</Text>
            <StatusBar style="auto" />
          </View>
      )
  }
}
