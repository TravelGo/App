
import React, {Component} from 'react';
import {Modal, Platform, StyleSheet, Text, View, AppRegistry, Image, Button} from 'react-native';
import MapView from 'react-native-maps';
import geolib from 'geolib';
import {Dimensions} from "react-native";
import StopOnImg from './images/travelstop(on).png';
import StopOffImg from './images/travelstop(off).png';
import Geocoder from 'react-native-geocoding';


export default class App extends Component{


  constructor(props) {
    super(props);

    Geocoder.init("AIzaSyC-wh2GZ92W7jsNjtHD1JUDoMl1nNLRJgo");

    this.state = {
      user:{
        latitude: 37.6105,
        longitude: 126.997,
        latitudeDelta: 1,
        longitudeDelta: 1,
      },
      userloc: "a",
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
      );

      Geocoder.from(this.state.user.latitude, this.state.user.longitude)
      		.then(json => {
              		const addressComponent = json.results[0].formatted_address;
      			console.log(addressComponent);
            this.setState({
              userloc : addressComponent
            })
      		})
  		.catch(error => console.warn(error));


    }, 2000);


  }




  render() {

    return (

      <View style={styles.view}>
        <View style={styles.view}>
        <Text styles={{fontSize:20}}>{this.state.userloc}</Text>

        </View>
        <MapView style={styles.mapview}
          showsUserLocation = {true}
          initialRegion={{
              latitude: 38.611026,
              longitude: 126.996917,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          region={this.state.user}

          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          zoomEnabled={false}

        >


          {this.state.stops.map((contact, i) =>
              geolib.getDistance(contact.location, this.state.user) <= 50 ?
              <MapView.Marker coordinate={contact.location} key={i} image={StopOnImg}
              onPress={e => {
                alert("Place name : " + contact.name + "\n"
              + "Distance with User : " + geolib.getDistance(contact.location, this.state.user) + "m")}}><Image source={StopOnImg}/></MapView.Marker>
              : <MapView.Marker coordinate={contact.location} key={i} image={StopOffImg}><Image source={StopOffImg} style={{ width: 40, height: 40 }} /></MapView.Marker>
          )}



        </MapView>

        <View styles={styles.view}>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1
  },
  mapview:{
    flex: 10,
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
