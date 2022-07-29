import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Liststyles } from '../styles/IndexStyles';

const ListAdresse = ({ item, navigation }) => {


    switch (item.categorie) {
        case "Hotels":
            var string = "€/nuit"
            break;
        case "Restaurants":
            var string = "€/plat"
            break;

        default:
            var string = ""

            break;
    }


    return (
        <View>
            <View style={Liststyles.divList}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Detaile', { item })

                    }}>
                    <Image source={{ uri: item.photos }}
                        style={Liststyles.img} />
                </TouchableOpacity>

                <View style={Liststyles.divText}>
                    <View>
                        <Text style={Liststyles.h2}>{item.name}</Text>
                        <Text >{item.categorie}</Text>
                    </View>


                    <Text style={Liststyles.price}>{item.price}{string}</Text>


                </View>


            </View>
        </View>
    );

}





export default ListAdresse
