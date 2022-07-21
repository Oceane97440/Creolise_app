import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const Geolocalisation = () => {

  const [fullList, setFullList] = useState([
    {
      id: '1',
      name: 'Hotêl Dina',
      price: '230',
      description: 'Jolie hotel de st denis',
      ville: 'Saint-Denis',
      categorie: 'Hotels',
      latitude: "-20.876211767943236",
      longitude: "55.45515146403774",
      photos: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Salle de sport',
          icon: require("../../public/img/3d-fluency-football-player.png")
        },
        {
          id: '3',
          point_fort: 'Spa',
          icon: require("../../public/img/3d-fluency-pink-flower.png")
        },
        {
          id: '4',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
      ]

    },

    {
      id: '2',
      name: 'Saint-Hubert',
      price: '20',
      description: 'Brasserie',
      ville: 'Saint-Denis',
      categorie: 'Restaurants',
      latitude: "-20.877662583983522",
      longitude: "55.451286468272166",

      photos: 'https://passtime-media.s3.eu-west-3.amazonaws.com/SPs3comf4pP3vUxu6AhnCHNm',
      avantage: [
        {
          id: '1',
          point_fort: 'Restaurant',
          icon: require("../../public/img/3d-fluency-spoon-and-knife.png")
        },
        {
          id: '2',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        },
        {
          id: '3',
          point_fort: 'Animation music',
          icon: require("../../public/img/3d-fluency-music-note.png")
        },

      ]

    },
    {
      id: '3',
      name: 'Forêt \n Providence',
      price: '',
      description: 'Randonner en plein nature au coeur de St-denis',
      ville: 'Saint-Denis',
      categorie: 'Nature',
      latitude: "-20.896054851347284",
      longitude: "55.45567356140664",

      photos: 'http://medias.tourism-system.fr/3/5/158493_la_providence-1.jpg',
      avantage: [

        {
          id: '1',
          point_fort: 'Place de parking',
          icon: require("../../public/img/3d-fluency-blue-car.png")
        }
      ]

    },
  ]);

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
      setGeodata([location.coords.latitude, location.coords.longitude])

    } catch (err) {
      console.log(err);
    }
  };

  var latitude = geodata[0]
  var logitude = geodata[1]


  
  var endLatitude = -20.876211767943236
  var endLongitude = 55.45515146403774

  var theta = logitude - endLongitude;
  var dist = Math.sin(deg2rad(latitude))
  * Math.sin(deg2rad(endLatitude))
  + Math.cos(deg2rad(latitude))
  * Math.cos(deg2rad(endLatitude))
  * Math.cos(deg2rad(theta));
  dist = Math.acos(dist);
  dist = rad2deg(dist);
  dist = dist * 60 * 1.1515;

  console.log("Distance :" + dist)


  function rad2deg(dist) {
    return (dist * 180.0 / Math.PI);

  }

  function deg2rad(latitude) {
    return (latitude * Math.PI / 180.0);

  }

  return (
    <View style={styles.container}>
      <Text>{geodata}</Text>
      <View style={styles.divHead}>
        <Text style={styles.h1}>Vos adresses localisées </Text>

        <View style={styles.divList}>
          <Image source={{ uri: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/32/05/320511_v6.jpeg" }}
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
  container: {
    paddingTop: 30,
    margin: 10,
    alignItems: "left",
  },
  divHead: {
    display: 'flex',
    width: '100%',
  },
  h1: {
    color: "#125386",
    fontSize: 26,
    fontWeight: "bold"
  },
  divList: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  img: {
    width: '100%',
    height: 210,
    borderRadius: 20,
    resizeMode: 'center',

  },
  divText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  h2: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
  },
  price: {
    color: '#d43d35',
    fontWeight: 'bold',
    fontSize: 25,

  },
})


export default Geolocalisation;
