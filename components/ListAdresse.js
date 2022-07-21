import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';

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
            <View style={styles.divList}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Detaile', { item })

                    }}>
                    <Image source={{ uri: item.photos }}
                        style={styles.img} />
                </TouchableOpacity>

                <View style={styles.divText}>
                    <View>
                        <Text style={styles.h2}>{item.name}</Text>
                        <Text >{item.categorie}</Text>
                    </View>


                    <Text style={styles.price}>{item.price}{string}</Text>


                </View>


            </View>
        </View>
    );

}


const styles = StyleSheet.create({
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

    }
})



export default ListAdresse
