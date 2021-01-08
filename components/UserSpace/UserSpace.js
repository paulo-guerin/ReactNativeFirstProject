import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import stylesHomepage from '../../assets/css/Homepage.component.style.android.js';
import stylesGlobal from '../../assets/css/global.style.android.js';
import AddList from '../AddList/AddList';
import HomepageFooter from '../HomepageFooter/HomepageFooter'
import { Container, Header, Content} from 'native-base';

export default class UserSpace extends Component {
    state = {
    };

    constructor(props) {
        super(props);
    }

  render() {
        return(
            <Container>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9370DB" translucent = {true}/>
                <Content>
                    <Text>Espace Utilisateur</Text>
                </Content>
                <HomepageFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}
