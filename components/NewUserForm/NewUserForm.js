import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import styles from './NewUserForm.component.style.android.js';

class NewUserForm extends Component {
    static propTypes = {
        handleClick: PropTypes.any.isRequired,
        handleChanges: PropTypes.any.isRequired,
        newUser: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#9370DB" }}
                  onPress={
                    this.props.setModalVisible
                  }
                >
                  <Text style={styles.textStyle}>X</Text>
                </TouchableHighlight>
                <Container>
                    <Content>
                      <Form>
                        <Text>Email</Text>
                        <Item regular>
                          <Input
                              onChangeText={(text) => this.props.handleChanges(text, 'email', 'SignUp')}
                              value = {this.props.newUser}
                          />
                        </Item>
                        <Text>Password</Text>
                        <Textarea
                            rowSpan={5}
                            bordered
                            onChangeText={(text) => this.props.handleChanges(text, 'password', 'SignUp')}
                            value = {this.props.newUser}
                        />
                      </Form>
                    </Content>
                </Container>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#9370DB" }}
                  onPress={()=>{this.props.handleClick('SignUp') ; this.props.setModalVisible()}}
                >
                  <Text style={styles.textStyle}>Inscription</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default NewUserForm;