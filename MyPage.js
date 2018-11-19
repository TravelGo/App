
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

export default class TabViewExample extends React.Component {
  
  state = {
    index: 0,
    routes: [
      { key: 'map', title: '지도' },
      { key: 'TravelStop', title: '트레블 스탑' },
      { key: 'Achieve', title: '도전 과제' },
    ],
  };

  _goToMap = () => { Actions.map() }
  
  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{paddingHorizontal: 15, padding: 35,
          backgroundColor: '#109eff', height: 100, resizeMode: 'contain', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={this._goToMap}>
            <Image source={require("./images/goBackButton.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 30}}>마이페이지</Text>
          <TouchableOpacity onPress={this._toggleModal}>
            <Image source={require("./images/goBackButton.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
          </TouchableOpacity>
        </View>
        <TabView
        
          navigationState={this.state}
          renderScene={SceneMap({
            map: FirstRoute,
            TravelStop: SecondRoute,
            Achieve: ThirdRoute
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
