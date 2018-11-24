import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Icon, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';

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
      <View style={{flexDirection: 'column', height: 200}}>


        <View style={{paddingHorizontal: 15, justifyContent:'space-between', backgroundColor: '#109eff', height: 60, flexDirection: 'row', alignItems:'center'}}>
          <TouchableOpacity onPress={this._goToMap} style={{width:30}}>
            <Image source={require("./images/goBackButton.png")} style={{width:30, height: 30, resizeMode: 'contain'}}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>마이페이지</Text>
          <View style={{width:30}}></View>
        </View>
        

        <View style={{flex: 1, backgroundColor: "#109eff", }}>
          <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10, marginLeft: 10, marginRight: 10, margin: 5, backgroundColor: "white", borderRadius: 10, flex: 1, alignItems: "center", justifyContent: "center", }}>
            <View style={{flex: 1, width: 10, height: 20,  backgroundColor: '#74DF00', justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>칭호</Text>
            </View>
            <View style={{flex: 10, justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: 'black', fontSize: 15, textDecorationLine: 'underline'}}>연못 속의 개구리</Text>
            </View>            
            <View style={{flex: 1}}></View>
          </View>
        </View>        
        

        <View style={{flex: 1, flexDirection: "row", backgroundColor: "#109eff", paddingRight: 10, paddingLeft: 10}}>
          
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', borderRadius: 5, width: 50, height: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#109eff'}}>
                Lv. 4
              </Text>
            </View>
          </View>

          <View style={{flex: 4, backgroundColor: '#109eff', flexDirection: 'column', }}>          
            <View style={{flex: 1, justifyContent:'flex-end' }}>
              <Progress.Bar progress={0.33} width={260} color={'#FFBF00'} unfilledColor={'white'} borderColor={'#109eff'} />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text style={{color: 'white', fontSize: 7}}>
                80 / 240
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
