/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, Button} from 'react-native';
import MapView from 'react-native-maps';
import geolib from 'geolib';
import {Dimensions} from "react-native";
import StopOnImg from './images/travelstop(on).png';
import StopOffImg from './images/travelstop(off).png';




export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1,
        longitudeDelta: 1,
      },
      stops:[],
    };
  }


  import_json_url(){
    return fetch('http://35.231.168.105/travelstop/37.610304/126.996917')
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        stops: responseJson,
      })
      console.log(this.state.stops)
    })
    .catch(error => alert(error));
  }


  componentDidMount(){
    this.import_json_url()
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
          (position) =>{
            this.setState({
              user: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }
            });
          },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 2000}
      )
    }, 2000);
  }




  render() {
    return (

      <View style={styles.view}>
        <View style={styles.view}>
          <Text>User Position</Text>
          <Text>{this.state.user.latitude}</Text>
          <Text>{this.state.user.longitude}</Text>
          <Button
            title="refresh"
            onPress={this.import_json_url}
          />

        </View>
        <MapView style={styles.mapview}
          showsUserLocation = {true}
          initialRegion={{
              latitude: 37.611026,
              longitude: 126.996917,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          region={this.state.user}
          /*
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          zoomEnabled={true}
          */
        >


          {this.state.stops.map((contact, i) =>
              geolib.getDistance(contact.location, this.state.user) <= 50 ?
              <MapView.Marker coordinate={contact.location} key={i} image={StopOffImg}
              onPress={e => alert("Place name : " + contact.name + "\n"
              + "Distance with User : " + geolib.getDistance(contact.location, this.state.user) + "m")}/>
              : <MapView.Marker coordinate={contact.location} key={i} image={StopOffImg}
            />

          )}



        </MapView>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1
  },
  mapview:{
    flex: 5,
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
});
