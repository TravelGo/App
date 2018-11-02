import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Recommand extends Component {
    
    constructor(props) {
        super(props);
        const {width, height} = Dimensions.get("window")
        this.state = {
          width,
          height
        }
    }

    _goToMap = () => { Actions.map() }

    render() {
     return (
        <View style={{flex: 1, width: this.state.width, height: this.state.height - 25}}>
          <View style={{paddingHorizontal: 15, padding: 10,
            backgroundColor: '#787878', height: 70, resizeMode: 'contain', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this._goToMap}>
              <Image source={require("./images/Back_Button.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 25}}>용두리</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Image source={require("./images/Setting_Button.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#ffffff', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
          </View>
        </View>
     );
  }
}