import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, TouchableOpacity } from 'react-native';
import { Mapstyles } from '../../styles/IndexStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailMap = ({ route,navigation }) => {
  const { latitude } = route.params.item;
  const { longitude } = route.params.item;
  const { name } = route.params.item;

  const handlessPressBack = () => {
    navigation.goBack()

};


  const markerCoord = {
    latitude:parseFloat(latitude),
    longitude:parseFloat(longitude)
  }

  return (
    <View style={Mapstyles.container}>
      <View style={Mapstyles.divBtnHead}>

        <View style={Mapstyles.divIconBack}>
          <TouchableOpacity onPress={handlessPressBack}>
            <Icon name="arrow-left" size={30} style={Mapstyles.iconback} color="#000" />
          </TouchableOpacity>
        </View>

      </View>


      <MapView style={{ width: '100%', height: 600,margin:1 }}
        initialRegion={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

    <Marker
      coordinate={markerCoord}
      title={name}

    />
      </MapView>

    </View>


  );

}

export default DetailMap;
