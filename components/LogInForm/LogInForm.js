import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import styles from './LogInForm.component.style.android.js';

class LogInForm extends Component {
    static propTypes = {
        handleClick: PropTypes.any.isRequired,
        handleChanges: PropTypes.any.isRequired,
        logInDatas: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
              <Form>
                <Text>Email</Text>
                <Item regular>
                  <Input
                      onChangeText={(text) => this.props.handleChanges(text, 'email', 'LogIn')}
                      value = {this.props.logInDatas}
                  />
                </Item>
                <Text>Password</Text>
                <Textarea
                    rowSpan={5}
                    bordered
                    onChangeText={(text) => this.props.handleChanges(text, 'password', 'LogIn')}
                    value = {this.props.logInDatas}
                />
              </Form>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#9370DB" }}
                  onPress={()=>{this.props.handleClick('LogIn')}}
                >
                  <Text style={styles.textStyle}>Connexion</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default LogInForm;