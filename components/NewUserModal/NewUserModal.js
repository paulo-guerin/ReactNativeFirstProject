import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Alert, Modal, TouchableHighlight, Button} from 'react-native';
import styles from './NewUserModal.component.style.android.js';
import NewUserForm from '../NewUserForm/NewUserForm';
import { Container, Header, Content } from 'native-base';

export default class NewUserModal extends Component {

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
               title="Pas encore inscrit? Cliquez ici"
               color="#9370DB"
               accessibilityLabel="Inscription"
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
                    <NewUserForm newUser={this.props.newUser} handleClick={this.props.handleClick} handleChanges={this.props.handleChanges} setModalVisible={this.setModalVisible}/>
                  </View>
                </View>
              </Modal>
            </View>
        </View>
    )
  }
}
