import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import styles from './NewAddForm.component.style.android.js';
import {newAdd} from '../../store/actions/addActions';
import {connect} from 'react-redux';

class NewAddForm extends Component {

    state = {
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

    static propTypes = {
        handleClick: PropTypes.any.isRequired,
        handleChanges: PropTypes.any.isRequired,
        value: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.newAdd(this.state.newAdd);
        this.setState({newAdd: this.state.newAddClear});
    }

    handleChanges = (text, field)=>{
        const value = text;
        const newAdd = {...this.state.newAdd};
        newAdd[field] = value;
        this.setState({newAdd});
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
                              onChangeText={(text) => this.handleChanges(text, 'title')}
                              value = {this.props.value}
                          />
                        </Item>
                        <Text>Description</Text>
                        <Textarea
                            rowSpan={5}
                            bordered
                            onChangeText={(text) => this.handleChanges(text, 'description')}
                            value = {this.props.value}
                        />
                        <Text>Catégorie</Text>
                        <Item last regular>
                          <Input
                              onChangeText={(text) => this.handleChanges(text, 'category')}
                              value = {this.props.value}
                          />
                        </Item>
                      </Form>
                    </Content>
                </Container>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#9370DB" }}
                  onPress={()=>{this.handleClick() ; this.props.setModalVisible()}}
                >
                  <Text style={styles.textStyle}>Ajouter une annonce</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        newAdd: (add) => dispatch(newAdd(add))
    }
}

export default connect(null, mapDispatchToProps)(NewAddForm);