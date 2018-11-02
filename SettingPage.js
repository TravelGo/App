/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      switch1 : false,
      switch2 : false,
      switch3 : false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingview1}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:50}}>My Page</Text>
        </View>
        <View style={styles.settingview2}>
          <View style={styles.settingview2_1}>
            <Switch style={{margin: 5}} onValueChange={(value) => this.setState({switch1: value})} value={this.state.switch1} />
            <Switch style={{margin: 5}} onValueChange={(value) => this.setState({switch2: value})} value={this.state.switch2} />
            <Switch style={{margin: 5}} onValueChange={(value) => this.setState({switch3: value})} value={this.state.switch3} />
          </View>
          <View style={styles.settingview2_2}>
            <Text style={{margin:5, fontSize:20}}>setting 1</Text>
            <Text style={{margin:5, fontSize:20}}>setting 2</Text>
            <Text style={{margin:5, fontSize:20}}>setting 3</Text>
          </View>
        </View>
          <View style={styles.settingview3}>
            <TouchableOpacity onPress={() => alert('Hi')}>
              <Text style={{color:'white', fontWeight: 'bold', fontSize:50}}>Open Source</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  view:{
    flex: 1
  },
  settingview1:{
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20 ,
  },
  settingview2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
    borderTopWidth: 3,
    borderTopColor: 'grey',
    flexDirection: 'row',
  },
  settingview2_1:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    margin : 10,
  },
  settingview2_2:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    margin: 10,
  },
  settingview3:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
