import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Map extends Component {

  constructor(props) {
    super(props);
    const {width, height} = Dimensions.get("window")
    this.state = {
      width,
      height
    }
  }

  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _goToRecommand = () => { Actions.recommand() }

  _goToGuestBook = () => { Actions.guestbook() }

  render() {
    return (
      <View>
        <View style={{width: this.state.width, height: this.state.height - 25, justifyContent: 'space-between'}}>
          <View style={{borderBottomLeftRadius: 7, borderBottomRightRadius: 7, elevation: 7,
            backgroundColor: '#4dc3ff', height: 45, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17, marginLeft: 10}}>현재 위치</Text>
            <Text style={{color: 'white', marginLeft: 10}}>|  성북구 정릉3동</Text>
          </View>

          <View style={{width: this.state.width, height: this.state.height - 119, alignItems : 'center'}}>
            <Image source={require("./images/Logo.png")} style={{width: 300, resizeMode: 'contain', opacity: 0.4}}></Image>
          </View>

          <View style={{borderTopLeftRadius: 7, borderTopRightRadius: 7, paddingHorizontal: 15,
            backgroundColor: '#4dc3ff', height: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this._goToRecommand}>
              <Image source={require("./images/Modal_Button.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
            {/* <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{color: 'white', marginLeft: 10}}>- 5개</Text>
            </View> */}
            </TouchableOpacity>
            <Image source={require("./images/Logo.png")} style={{width: 55, height: 45, resizeMode: 'contain'}}></Image>
            <TouchableOpacity onPress={this._goToGuestBook}>
              <Image source={require("./images/Setting_Button.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  modal: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  }
});
