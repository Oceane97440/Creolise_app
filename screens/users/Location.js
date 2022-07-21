import React, { useEffect,useState } from 'react';
import {Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,FlatList,StyleSheet} from 'react-native';
import * as Location from 'expo-location';

const Geolocalisation = ()=> {

  const [geodata, setGeodata] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      getApi(location);
    })();
  }, []);

  const getApi = async (location) => {
    try {
      //Endpoint API avec la clès api + latitude et longitude
      console.log(location);
      setGeodata([location.coords.latitude,location.coords.longitude])

    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <View style={styles.container}>
      <Text>{geodata}</Text>
      <View style={styles.divHead}>
      <Text style={styles.h1}>Vos adresses localisées </Text>

      <View style={styles.divList}>
      <Image source={{uri: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/32/05/320511_v6.jpeg"}}
            style={styles.img} />

       <View style={styles.divText}>   
         <View>
         <Text style={styles.h2}>Saint-Hubert</Text>
          <Text >Restaurant</Text>
         </View>
    

        <Text style={styles.price}>20€/plat</Text>

      
      </View>     


      </View>
      
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
    margin:10,
    alignItems:"left",
  },
  divHead:{
    display:'flex',
    width: '100%',
},
h1:{
  color:"#125386",
  fontSize: 26,
  fontWeight: "bold"
},
divList:{
  marginTop:10,
  display:'flex',
  flexDirection:'column'
},
img:{
  width:'100%',
  height:210,
  borderRadius:20,
  resizeMode: 'center',

},
divText:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  margin:10,
  alignContent:'center',
  alignItems:'center'
},
h2:{
  color:"#000",
  fontSize: 25,
  fontWeight: "bold",
},
price:{
  color:'#d43d35',
  fontWeight:'bold',
  fontSize: 25,

},
})


export default Geolocalisation;
