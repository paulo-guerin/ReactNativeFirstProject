import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import styles from '../../assets/css/Homepage.component.style.android.js';
import AddList from '../AddList/AddList';

export default class Homepage extends Component {
    state = {
    };

    constructor(props) {
        super(props);
    }

  render() {
        return(
            <View style={styles.containerHomepage}>
              <AddList/>
              <StatusBar style="auto" />
            </View>
        )
    }
}
