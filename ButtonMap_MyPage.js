import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

export default class Position extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
        <Image source={require("./images/Korea.png")} style={styles.Korea}/>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Gb.png")} style={styles.Gb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images/Gw.png")} style={styles.Gw}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images/Gy.png")} style={styles.Gy}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Cn.png")} style={styles.Cn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Cb.png")} style={styles.Cb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Gn.png")} style={styles.Gn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Jn.png")} style={styles.Jn}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Jb.png")} style={styles.Jb}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Us.png")} style={styles.Us}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Bs.png")} style={styles.Bs}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Gj.png")} style={styles.Gj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Dg.png")} style={styles.Dg}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Dj.png")} style={styles.Dj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Ic.png")} style={styles.Ic}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images//Jj.png")} style={styles.Jj}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._goToMap}>
          <Image source={require("./images/Sl.png")} style={styles.Sl}/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Korea: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 291,
    left: -30,
    width: 450,
    height: 450,
  },
  Gy: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 126,
    left: 76,
    width: 122,
    height: 122,
  },
  Sl: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 171.3,
    left: 110,
    width: 30,
    height: 30,
  },
  Ic: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 146,
    left: 31.5,
    width: 103,
    height: 103,
  },
  Gw: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 88,
    left: 137,
    width: 160,
    height: 160,
  },
  Cb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 218.3,
    left: 136.3,
    width: 113,
    height: 113,
  },
  Cn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 224,
    left: 59,
    width: 117,
    height: 117,
  },
  Gb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 142,
    left: 141,
    width: 240,
    height: 240,
  },
  Gn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 335,
    left: 168,
    width: 118,
    height: 118,
  },
  Jb: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 300,
    left: 80,
    width: 110,
    height: 110,
  },
  Jn: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 365,
    left: 35,
    width: 150,
    height: 150,
  },
  Bs: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 375,
    left: 233,
    width: 60,
    height: 60,
  },
  Us: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 355.5,
    left: 270,
    width: 36,
    height: 36,
  },
  Dj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 285,
    left: 141.5,
    width: 26,
    height: 26,
  },
  Gj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 394,
    left: 97,
    width: 28,
    height: 28,
  },
  Dg: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 328,
    left: 223,
    width: 35.5,
    height: 35.5,
  },
  Jj: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 495,
    left: 60,
    width: 63,
    height: 63,
  },
  
  text: {
    color: '#ffffff',
    fontSize: 80
  }
});