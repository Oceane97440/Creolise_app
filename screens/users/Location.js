import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Locationstyles } from '../../styles/IndexStyles';
import * as Location from 'expo-location';
import ListAdresse from '../../components/ListAdresse';


const Geolocalisation = ({data,navigation}) => {

  const [geodata, setGeodata] = useState('0');
  const [listAdresse, setListAdresse] = useState([]);

  useEffect(() => {

    setListAdresse(data);

  }, [listAdresse]);

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
      setGeodata([location.coords.latitude, location.coords.longitude])

    } catch (err) {
      console.log(err);
    }
  };

  var latitude = geodata[0]
  var logitude = geodata[1]

  const data_location =[]

  listAdresse.map(obj => {
    var endLatitude = obj.latitude
    var endLongitude = obj.longitude
  
    var theta = logitude - endLongitude;
    var dist = Math.sin(deg2rad(latitude))
    * Math.sin(deg2rad(endLatitude))
    + Math.cos(deg2rad(latitude))
    * Math.cos(deg2rad(endLatitude))
    * Math.cos(deg2rad(theta));
    dist = Math.acos(dist);
    dist = rad2deg(dist);
    dist = dist * 60 * 1.1515;
  

    if (dist<=3) {

      data_location.push(obj)
    }

  });



  function rad2deg(dist) {
    return (dist * 180.0 / Math.PI);

  }

  function deg2rad(latitude) {
    return (latitude * Math.PI / 180.0);

  }

  return (
    <View style={Locationstyles.container}>
      <View style={Locationstyles.divHead}>
        <Text style={Locationstyles.h1}>Vos adresses localisées </Text>

        <FlatList 
      
      data={data_location}
      renderItem={({item})=><ListAdresse item={item} navigation={navigation}/>}
      keyExtractor={item => item.id}
      horizontal={false}
      
      
      />

      </View>
    </View>
  );

}




export default Geolocalisation;
