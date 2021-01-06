import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import styles from '../../assets/css/Homepage.component.style.android.js';
import PropTypes from 'prop-types';

export default class AddList extends Component {
    state = {
    };

    static propTypes = {
        item: PropTypes.object.isRequired,
        handleDelete: PropTypes.any.isRequired,
    }

    constructor(props) {
        super(props);
    }

  render() {
        return(
          <View style={styles.itemDiv}>
              <Text style={styles.item}>{this.props.item.title} </Text>
              <Button
                   onPress={()=>this.props.handleDelete(this.props.item.id)}
                   title="X"
                   color="#841584"
                   accessibilityLabel="Delete Add"
              />
          </View>
        )
    }
}
