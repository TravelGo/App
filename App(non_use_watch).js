/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';
import MapView from 'react-native-maps';
import {Dimensions} from "react-native";

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      latitudeDelta: null,
      longitudeDelta: null,
      error: null
    };
  }

  watchID: ?number = null

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        //현재 위치 저장
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000}
  );

  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)

    var lastRegion = {
      latitude: lat,
      longitude: long,
      longitudeDelta: 0.1,
      latitudeDelta: 0.1
    }

    this.setState({initialPosition: lastRegion})
    this.setState({markerPosition: lastRegion})
  })
}

  render() {
    return (

      <View style={styles.view}>
        <MapView style={StyleSheet.absoluteFillObject}
          showsUserLocation = {true}
          region={{
            latitude: 37.611026,
            longitude: 126.996917,
            latitudeDelta: 0.005,
            longitudeDelta: 0.002,
          }}
        >
        </MapView>

        <View style={styles.details}>
        <Text>{this.state.latitude}</Text>
        <Text>{this.state.longitude}</Text>
        </View>
      </View>

    );
  }
}

const styles = {
  view:{
    flex: 1
  },
  details:{
    flex: 1,
    paddingtop: 60
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tile:{
        height:30,
        justifyContent:'center',
        marginHorizontal:15,
        fontSize:40,
        borderBottomColor: '#000',
        borderBottomWidth: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
};
