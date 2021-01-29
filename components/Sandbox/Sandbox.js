import { StatusBar } from 'expo-status-bar';
import React, { Component, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Alert, Modal, TouchableHighlight, Button, Share, Divider, Vibration, Platform, Linking, ScrollView, TouchableOpacity} from 'react-native';
import stylesSandbox from './Sandbox.component.style.android.js';
import AddList from '../AddList/AddList';
import { Container, Header, Content } from 'native-base';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';

export default class Sandbox extends Component {
    state = {
        ONE_SECOND_IN_MS : 1000,
        vibrationPattern:[
          1 * 1000,
          2 * 1000,
          3 * 1000
        ],
        location : null,
        textLocationLocation: 'Votre localisation',
        type: Camera.Constants.Type.back,
        stateCamera: null,
    };

    constructor(props) {
        super(props);
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    handlePress = async (url) => {
            // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };

    getLocation = async () => {
          console.log('hello');
          this.setState({textLocation: 'Waiting...'});
          console.log(this.state);
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            this.setState({textLocation: 'Permission to access location denied'});
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          let textLocation = JSON.stringify(location);
          this.setState({location, textLocation});
    };

    useEffect = async () => {
          const { status } = await Camera.requestPermissionsAsync();
          if (status !== 'granted') {
              this.setState({stateCamera: <Text>Permission to access camera denied</Text>});
              return;
          }
          this.setStateCamera();
    };

    setStateCamera = () => {
        this.setState({stateCamera:
          <View style={stylesSandbox.container}>
            <Camera style={stylesSandbox.camera} type={this.state.type}>
              <View style={stylesSandbox.buttonContainer}>
                <TouchableOpacity
                  style={stylesSandbox.button}
                  onPress={this.setType}>
                  <Text style={stylesSandbox.text}> Flip </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        });
    };

    setType = () => {
        if(this.state.type === Camera.Constants.Type.back){
            this.setState({type: Camera.Constants.Type.front});
        } else {
         this.setState({type: Camera.Constants.Type.back});
        }
        this.useEffect();
    }

  render() {
        {/*Platform*/}
        console.log(Platform.OS, Platform.Version, Platform.isTV, Platform.isPad);
        return(
            <ScrollView>

              {/*StatusBar*/}
              <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#9370DB" translucent = {true}/>
              <Text style={[stylesSandbox.header, stylesSandbox.paragraph]}>Share API</Text>
              {/*Share*/}
              <Button onPress={this.onShare} title="Share" />

              {/*Vibration*/}
                <Text style={[stylesSandbox.header, stylesSandbox.paragraph]}>Vibration API</Text>
                <View>
                  <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
                </View>
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                {Platform.OS == "android"
                  ? [
                      <View>
                        <Button
                          title="Vibrate for 10 seconds"
                          onPress={() => Vibration.vibrate(10 * this.state.ONE_SECOND_IN_MS)}
                        />
                      </View>,
                      <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                    ]
                  : null}
                <Button
                  title="Vibrate with pattern"
                  onPress={() => Vibration.vibrate(this.state.vibrationPattern)}
                />
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                <Button
                  title="Vibrate with pattern until cancelled"
                  onPress={() => Vibration.vibrate(this.state.vibrationPattern, true)}
                />
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                <Button
                  title="Stop vibration pattern"
                  onPress={() => Vibration.cancel()}
                  color="#FF0000"
                />
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />

                {/*Linking*/}
                <Text style={[stylesSandbox.header, stylesSandbox.paragraph]}>Linking</Text>
                <Button title='Linking Google Supported URL' onPress={()=>{this.handlePress("https://google.com")}} />
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                <Button title='Linking unsupported URL' onPress={()=>{this.handlePress("slack://open?team=123456")}} />
                <View style={Platform.OS === "android" ? stylesSandbox.separator : null} />
                <Button title='Linking mail to' onPress={()=>{this.handlePress("mailto: paul64@laposte.net")}} />

                {/*Location*/}
                <Text style={[stylesSandbox.header, stylesSandbox.paragraph]}>Location</Text>
                <View>
                  <Button title="Votre localisation" onPress={this.getLocation} />
                  <Text>{this.state.textLocation}</Text>
                </View>

                {/*Camera*/}
                <Text style={[stylesSandbox.header, stylesSandbox.paragraph]}>Camera</Text>
                <View>
                  <Button title="Activer la caméra" onPress={this.useEffect} />
                  {this.state.stateCamera}
                </View>
            </ScrollView>
        )
    }
}
