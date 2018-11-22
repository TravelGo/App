TravelStop.js
========

## Travel STOP 이름 받아오기
> 아래 코드의 '< <Text> </Text> >' 부분을 받아와야함
```'javascript
'''
class T_Title extends Component {
  render () {
      return (
          <View style={styles.T_Title}>
              <Text style={styles.T_Title_Text}>
                  국민대학교 용두리
              </Text>
          </View>
      );
  }
}
'''
```

## Travel STOP 사진 받아오고, 방문확인 추가
> 아래 코드의 '< <Image /> >' 부분의 '<source={{uri: }}>' 주소 부분 받아와야 함
```javascript
'''
class T_View extends Component {
  render () {
      return (
          <View style={styles.T_View}>
                <TouchableOpacity onPress={() => alert("방문확인")}>
                    <Image
                        style={{flex: 1, width: 260, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: 50, marginRight: 50, marginTop: 10, marginBottom: 10,}}
                        source={{uri: 'http://www.doopedia.co.kr/_upload/image4/1711/03/171103021618274/171103021618274_thumb_400.jpg'}}
                    />
                </TouchableOpacity>
          </View>
      );
  }
}
'''
```

