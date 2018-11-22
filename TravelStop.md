TravelStop.js
========

## Travel STOP 이름 받아오기
> 아래 코드의 `<Text />` 부분을 받아와야함
```javascript
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
```

## Travel STOP 사진 받아오기, 방문확인 추가
> 아래 코드의 `<Image />` 부분의 `<source={{uri: }}>` 주소 부분 받아와야함
> `<Toucable Opacity />` 를 통해 사진이 클릭될 경우 방문자 수가 늘어나야함
```javascript
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
```

## Travel STOP 소개(정보) 받아오기
> 아래 코드의 `<Text />` 부분에 소개하는 내용을 받아와야함.
```javascript
class T_Info extends Component {
  render () {
      return (
          <View style={styles.T_Info}>
              <Text style={styles.T_Info_Text}>
                  국민대학교 용두리 안녕하세요 리엑트 네이티브{"\n"}
                  도서관 장태진 코딩 컴퓨터구조 배고프다 으악...{"\n"}
              </Text>
            <TouchableOpacity onPress={() => alert("자세히 보기 기능")}>
                    <Text style={{fontSize: 10, color: "#000000", textDecorationLine: 'underline'}}>
                        자세히보기
                    </Text>
            </TouchableOpacity>
          </View>
      );
  }
}
```

## Travel STOP 최근 방명록 받아오기
> 아래 코드의 `최근 방명록 1, 2, 3` 부분에 최근 방명록 3개를 받아와야함.
```javascript
class T_Mention extends Component {
  render () {
      return (

          <View style={styles.T_Mention}>
              <View style={styles.Mention_Group}>
                  <Text style={styles.T_Mention_Text}>
                      최근 방명록 1
                  </Text>
              </View>
              <View style={styles.Mention_Group}>
                  <Text style={styles.T_Mention_Text}>
                      최근 방명록 2
                  </Text>
              </View>

              <View style={styles.Mention_Group}>
                  <Text style={styles.T_Mention_Text}>
                      최근 방명록 3
                  </Text>
              </View>
          </View>
      ); 
  }
}
```

## Travel STOP 좌표값 받아와서 지도 불러오기
> 아래 코드의 `return()` 내부의 `latitude: `, `lomgitude: ` 에 위도, 경도 값 받아와야함.
```javascript
class T_Map extends Component{

  constructor(props) {
    super(props);

    this.state = {
      user:{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1,
        longitudeDelta: 1,
      },
      stop:{
        latitude: 37.611026,
        longitude: 126.996917
      }
    };
  }

  componentDidMount(){
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
      <View style={styles.T_Map}>
        <MapView style={styles.mapview}
          showsUserLocation = {true}
          initialRegion={{
              latitude: 37.611026,
              longitude: 126.996917,
              latitudeDelta: 0.002,
              longitudeDelta: 0.002,
            }}          
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          zoomEnabled={false}
        >
          {data.stops.map((contact, i) =>
            <MapView.Marker coordinate={contact.location} key={i} image={StopOffImg}/>
          )}
        </MapView>
      </View>
    );
  }
}
```