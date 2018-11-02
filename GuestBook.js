/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, ScrollView, Button, View, Image, Dimensions, RefreshControl} from 'react-native';
// TextInput, ImageBackground, Button,
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ScrollItem extends React.Component {
  render() {
    const { className } = this.props;

  }
}

export default class GuestBook extends Component {

  constructor(props) {
    super(props);
    const {width, height} = Dimensions.get("window")
    this.state = {
      width,
      height
    }
  }

  fetchData = async() =>{
    const response = await fetch('');
    const products = await response.json();
    this.setState({data: products});
  }

  _onRefresh()
  {
    this.setState({refreshing: true});
    this.fetchData().then (() => 
    { 
      this.setState({refreshing: false})
    });
  }

  state={
    data:[],
    refreshing: false
  };

  render() {
    return (
      <View>
        <View style={{backgroundColor: '#787878', width: 412, height:80, alignItems: 'center', flexDirection: 'row', padding:20, justifyContent:'space-between'}} >
          <Button style={{width: 70, height: 70, textAlign: 'center', borderRadius: 20}} color='#841584' title="<"></Button>
          <Text style={{color: 'white', fontSize: 30}}>용두리</Text>
          <Button style={{width: 70, height: 70, textAlign: 'center', borderRadius: 20}} color='#841584' title="="></Button>
        </View>
        <View style={{height: 500, borderRadius: 20, paddingLeft: 10, paddingRight: 10}}>
          <View style={{height: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#00BFFF'}}>방명록(87)</Text> 
          </View>
          <ScrollView style={{borderWidth: 2, borderColor: '#b4b4b4', padding: 5} } 
            refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />} >
            <View style={{height: 85, borderWidth: 2, borderColor: '#841584', borderRadius:10, padding: 5, marginBottom:10}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:3}}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/220px-Regular_quadrilateral.svg.png'}} style={{width: 20, height: 20}} resizeMode='center'/>            
                <Text style={{fontSize:10, fontWeight: '800', color: '#841584'}}>사용자 본인(1)</Text>   
              </View>
              <Text style={{color: '#00BFFF', marginLeft:10, marginBottom:5}}>계획대로 되고 있어</Text>
              <View style={{paddingLeft:10, paddingRight:5, alignItems: 'baseline', flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style={{color: '#D3D3D3', fontSize:10}}>방금 전</Text>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Text style={{borderWidth: 1, borderColor: '#00BFFF', borderRadius: 7, paddingHorizontal: 5}}>5</Text>
                  <Image 
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png'}} 
                    style={{marginLeft: 5, width: 25, height: 25}} resizeMode='center'>
                  </Image>
                </View>
              </View>
            </View>
            <View style={{height: 85, borderWidth: 2, borderColor: '#00BFFF', borderRadius:10, padding: 5, marginBottom:10}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:3}}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/220px-Regular_quadrilateral.svg.png'}} style={{width: 20, height: 20}} resizeMode='center'/>            
                <Text style={{fontSize:10, fontWeight: '800'}}>학식친 구함(3)</Text>   
              </View>
              <Text style={{color: '#00BFFF', marginLeft:10, marginBottom:5}}>중간고사 극혐</Text>
              <View style={{paddingLeft:10, paddingRight:5, alignItems: 'baseline', flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style={{color: '#D3D3D3', fontSize:10}}>4시간 전</Text>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Text style={{borderWidth: 1, borderColor: '#00BFFF', borderRadius: 7, paddingHorizontal: 5}}>153</Text>
                  <Image 
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/1200px-Bot%C3%B3n_Me_gusta.svg.png'}} 
                    style={{marginLeft: 5, width: 25, height: 25}} resizeMode='center'>
                  </Image>
                </View>
              </View>
            </View>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
            <Text style={styles.ScrollItem}>Welcome to React Native</Text>
          </ScrollView>
        </View>
        <View style={{width:400, height:80, alignItems: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
          <TextInput style={[styles.TextInput_style]} placeholder='     방명록 작성하기'></TextInput>
          <Button style={[styles.button]} color='#841584' title="send"></Button>
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

  TextInput_style: {
    borderWidth: 2, 
    borderColor: '#00BFFF', 
    width: 330,
    height: 60,
    marginLeft: 5, 
    paddingLeft: 10,
    borderRadius: 30,
  },

  button: {
    width: 90,
    height: 80,
    textAlign: 'center',
    borderRadius: 5,
  },

  ScrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 2,
  },


});
