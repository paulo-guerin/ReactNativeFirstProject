import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import styles from './AddListItemRedux.component.style.android.js';
import PropTypes from 'prop-types';
import { Container, Header, Content, Icon, Card, CardItem, Right } from 'native-base';

export default class AddListItemRedux extends Component {
    state = {
    };

    static propTypes = {
        item: PropTypes.any.isRequired,
        handleDelete: PropTypes.any.isRequired,
    }

    constructor(props) {
        super(props);
    }

  render() {
        return(
          <View style={styles.itemDiv}>
           <Card style={{flex: 9}}>
              <CardItem>
                <Image
                    style={styles.itemImg}
                    source={{uri :this.props.item.image}}
                />
                <Text style={styles.item} onPress={() => this.props.navigation.navigate('AddDetails', {item: this.props.item})}>
                    {this.props.item.title}
                </Text>
              </CardItem>
           </Card>
          </View>
        )
    }
}
