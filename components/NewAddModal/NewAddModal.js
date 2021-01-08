import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Alert, Modal, TouchableHighlight, Button} from 'react-native';
import styles from './NewAddModal.component.style.android.js';
import NewAddForm from '../NewAddForm/NewAddForm';
import { Container, Header, Content } from 'native-base';

export default class Homepage extends Component {

    state = {
        modalVisible : false,
    };

    constructor(props) {
        super(props);
    }

    setModalVisible = () => {
        this.setState({modalVisible : !this.state.modalVisible});
    }

  render() {
    return(
        <View>
            <Button
               onPress={this.setModalVisible}
               title="+ Ajouter une annonce"
               color="#9370DB"
               accessibilityLabel="Delete Add"
            />
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <NewAddForm value={this.props.newAdd} handleClick={this.props.handleClick} handleChanges={this.props.handleChanges} setModalVisible={this.setModalVisible}/>
                  </View>
                </View>
              </Modal>
            </View>
        </View>
    )
  }
}
