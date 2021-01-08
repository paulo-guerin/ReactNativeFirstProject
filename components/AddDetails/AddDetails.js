import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SearchBar } from 'react-native';
import styles from '../../assets/css/AddDetails.component.style.android.js';

export default class AddDetails extends Component {

    constructor(props) {
        super(props);
    }

  render() {
  console.log();
      return(
          <View style={styles.containerAddDetails}>
            <Text>Titre de l'annonce : {this.props.route.params.item.title}</Text>
            <Text>Description de l'annonce : {this.props.route.params.item.description}</Text>
            <Text>Catégorie : {this.props.route.params.item.category}</Text>
            <StatusBar style="auto" />
          </View>
      )
  }
}
