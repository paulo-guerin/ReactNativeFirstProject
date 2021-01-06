import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import styles from '../../assets/css/Homepage.component.style.android.js';
import AddListItem from '../AddListItem/AddListItem';
import NewAddForm from '../NewAddForm/NewAddForm';

export default class AddList extends Component {
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

    handleDelete = (id) => {
        const addList = this.state.addList.slice();
        const indexToDiscard = addList.findIndex((add)=>{
            return add.id === id
        });
        addList.splice(indexToDiscard, 1);
        this.setState( {addList} );
    }

    handleClick = () => {
        const newAddId = new Date().getTime();
        const newAddTitle = this.state.newAdd;
        const newAdd = {id:newAddId, title: newAddTitle};
        const newAddList = this.state.addList.slice();
        newAddList.push(newAdd);
        this.setState({addList: newAddList, newAdd: ''});
    }

    handleChanges = (text)=>{
    console.log(text);
        const value = text;
        this.setState({newAdd: value});
    }

  render() {
        return(
          <View>
              <NewAddForm value={this.state.newAdd} handleClick={this.handleClick} handleChanges= {this.handleChanges}/>
              <Text>Liste des Annonces</Text>
              <FlatList
                  style={{margin: 40}}
                  data={this.state.addList}
                  renderItem={({item}) => <AddListItem item={item} handleDelete={this.handleDelete} key={item.id}/>
                  }
              />
          </View>
        )
    }
}
