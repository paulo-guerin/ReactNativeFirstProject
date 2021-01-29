import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import styles from '../../assets/css/Homepage.component.style.android.js';
import AddListItem from '../AddListItem/AddListItem';
import AddListItemRedux from '../AddListItemRedux/AddListItemRedux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {connect} from 'react-redux';

class AddList extends Component {

    state = {
        addList: state => state.addList,
    }

    constructor(props) {
        super(props);
    }
 
  render() {
        console.log('hello',this.props);
        return(
          <Container>
              <Text>Liste des Annonces</Text>
              <SafeAreaView style={{flex: 1}}>
                <ScrollView style={styles.scrollView}>
                  <FlatList
                      style={{margin: 20}}
                      data={this.props.addList}
                      renderItem={({item}) => <AddListItem item={item} handleDelete={this.props.handleDelete} navigation ={this.props.navigation}/>
                      }
                  />
                  <Text>Liste des Annonces en utilisant redux</Text>
                  <FlatList
                        style={{margin: 20}}
                        data={this.props.adds}
                        renderItem={({item}) => <AddListItemRedux item={item} navigation ={this.props.navigation}/>
                        }
                  />
                </ScrollView>
              </SafeAreaView>
          </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adds: state.add.addList,
    }
}
export default connect(mapStateToProps)(AddList)