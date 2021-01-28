import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import styles from './LogIn.component.style.android.js';
import NewUserModal from '../NewUserModal/NewUserModal';
import HomepageFooter from '../HomepageFooter/HomepageFooter';
import LogInForm from '../LogInForm/LogInForm';

class LogIn extends Component {
    static propTypes = {
    }

    constructor(props) {
        super(props);
    }

    state = {
        userList: [
            {id: 1, email: 'user@user.com', password:'user', status: 'user'},
            {id: 2, email: 'admin@admin.com', password:'admin', status: 'admin'},
            {id: 3, email: 'test@test.test', password:'admin', status: 'user'},
        ],
        logInDatas: {
            email: '',
            password: '',
        },
        logInDatasClear: {
            email: '',
            password: '',
        },
        newUser: {
            email: '',
            password: '',
        },
        newUserClear: {
            title: '',
            description: '',
        }
    };

    handleClick = (form) => {
        if(form === 'SignUp'){
            const newUser = {
                id: new Date().getTime(),
                email: this.state.newUser.email,
                password: this.state.newUser.password,
                status: 'user',
            };
            const newUserList = this.state.userList.slice();
            newUserList.push(newUser);
            this.setState({userList: newUserList, newUser: this.state.newUserClear});
        } else {
            const LogInDatas = {
                email: this.state.newUser.email,
                password: this.state.newUser.password,
            };
            console.log(LogInDatas);
            this.setState({LogInDatas: this.state.logInDatasClear});
        }

    }

    handleChanges = (text, field, form)=>{
        if(form === 'SignUp'){
            const value = text;
            const newUser = {...this.state.newUser};
            newUser[field] = value;
            this.setState({newUser});
            console.log(this.state.newUser);
        } else {
            const value = text;
            const logInDatas = {...this.state.logInDatas};
            logInDatas[field] = value;
            this.setState({logInDatas});
            console.log(this.state.logInDatas);
        }
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9370DB" translucent = {true}/>
                <LogInForm logInDatas={this.state.logInDatas} handleClick={this.handleClick} handleChanges= {this.handleChanges}/>
                <NewUserModal newUser={this.state.newUser} handleClick={this.handleClick} handleChanges= {this.handleChanges}/>
                <HomepageFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}

export default LogIn;