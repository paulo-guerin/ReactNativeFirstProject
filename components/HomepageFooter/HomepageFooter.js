import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import stylesHomepage from '../../assets/css/Homepage.component.style.android.js';
import stylesGlobal from '../../assets/css/global.style.android.js';
import AddList from '../AddList/AddList';

export default class Homepage extends Component {
    state = {
    };

    constructor(props) {
        super(props);
    }

  render() {
        return(
           <Footer>
               <FooterTab style={stylesGlobal.containerFooter}>
                 <Button onPress={() => this.props.navigation.navigate('Homepage')}>
                   <Icon name="home"/>
                 </Button>
                 <Button onPress={() => this.props.navigation.navigate('UserSpace')}>
                   <Icon name="person"/>
                 </Button>
                 <Button onPress={() => this.props.navigation.navigate('LogIn')}>
                    <Icon name="build"/>
                  </Button>
                 <Button onPress={() => this.props.navigation.navigate('Sandbox')}>
                   <Icon name="build"/>
                 </Button>
               </FooterTab>
            </Footer>
        )
  }
}
