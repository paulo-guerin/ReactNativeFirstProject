import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import styles from './NewAddForm.component.style.android.js';

class NewAddForm extends Component {
    static propTypes = {
        handleClick: PropTypes.any.isRequired,
        handleChanges: PropTypes.any.isRequired,
        value: PropTypes.string.isRequired,
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
                        <Text>Titre de l'annonce</Text>
                        <Item regular>
                          <Input
                              onChangeText={(text) => this.props.handleChanges(text, 'title')}
                              value = {this.props.value}
                          />
                        </Item>
                        <Text>Description</Text>
                        <Textarea
                            rowSpan={5}
                            bordered
                            onChangeText={(text) => this.props.handleChanges(text, 'description')}
                            value = {this.props.value}
                        />
                        <Text>Catégorie</Text>
                        <Item last regular>
                          <Input
                              onChangeText={(text) => this.props.handleChanges(text, 'category')}
                              value = {this.props.value}
                          />
                        </Item>
                      </Form>
                    </Content>
                </Container>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#9370DB" }}
                  onPress={()=>{this.props.handleClick() ; this.props.setModalVisible()}}
                >
                  <Text style={styles.textStyle}>Ajouter une annonce</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default NewAddForm;