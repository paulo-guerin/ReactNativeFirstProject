import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Alert, Modal, TouchableHighlight, Button} from 'react-native';
import stylesHomepage from '../../assets/css/Homepage.component.style.android.js';
import stylesGlobal from '../../assets/css/global.style.android.js';
import AddList from '../AddList/AddList';
import HomepageFooter from '../HomepageFooter/HomepageFooter'
import NewAddForm from '../NewAddForm/NewAddForm';
import { Container, Header, Content } from 'native-base';
import NewAddModal from '../NewAddModal/NewAddModal';

export default class Homepage extends Component {
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
        newAdd: {
            title: '',
            description: '',
            category: '',
        },
        newAddClear: {
            title: '',
            description: '',
            category: '',
        }
    };

    constructor(props) {
        super(props);
    }

    handleDelete = (id) => {
        const addList = this.state.addList.slice();
        const indexToDiscard = addList.findIndex((add)=>{
            return add.id === id
        });
        addList.splice(indexToDiscard, 1);
        this.setState( {addList} );
    }

    handleClick = () => {
        const newAdd = {
            id: new Date().getTime(),
            title: this.state.newAdd.title,
            description: this.state.newAdd.description,
            category: this.state.newAdd.category,
        };
        const newAddList = this.state.addList.slice();
        newAddList.push(newAdd);
        this.setState({addList: newAddList, newAdd: this.state.newAddClear});
    }

    handleChanges = (text, field)=>{
        const value = text;
        const newAdd = {...this.state.newAdd};
        newAdd[field] = value;
        this.setState({newAdd});
    }

  render() {
        return(
            <Container>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9370DB" translucent = {true}/>
                <NewAddModal newAdd={this.state.newAdd} handleClick={this.handleClick} handleChanges= {this.handleChanges}/>
                <AddList navigation={this.props.navigation} addList={this.state.addList} handleDelete={this.handleDelete}/>
                <HomepageFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}
