import React, {Component} from "react";
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import PropTypes from 'prop-types';

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
                <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={(text) => this.props.handleChanges(text)}
                      value = {this.props.value}
                />
                <Button
                   onPress={()=>this.props.handleClick()}
                   title="Rajouter une annonce"
                   color="#841584"
                   accessibilityLabel="Delete Add"
                />
            </View>
        )
    }
}

export default NewAddForm;