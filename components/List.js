import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Pressable, TouchableHighlight, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../styles/IndexStyles';
import { addItem } from '../database/db';
import { deleteItem } from '../database/db';
import { selectOneItem } from '../database/db';
const List = ({ item, favoris, navigation }) => {



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


    const list = () => {
        const key = item.id

        if (favoris.length > 0) {
            return favoris.map((element) => {
                

                if ((element.item_id === key) && (element.is_favorie === 1)) {
                    var color = "#d43d35"


                    return (
                        <Icon key={key} name="heart" size={30}

                            color={color}

                        />
                    )

                }


            });
        }
 
        
    };









    const addItemFavoris = async (id, name, photos, price, categorie, statut) => {
        try {
            const findOne = await selectOneItem(id)

            if (findOne.rows.length !== 0) {
                const deleteFavoris = await deleteItem(id)
            } else {
                const dbinsertData = await addItem(id, name, photos, price, categorie, statut)
            }

        } catch (error) {
            console.log(error)

        }

    }

    const handlePressLike = (item, statut) => {
        const id = item.id
        const name = item.name
        const photos = item.photos
        const price = item.price
        const categorie = item.categorie



        addItemFavoris(id, name, photos, price, categorie, statut)
    }

    if (item) {
        return (


            <View style={{ margin:1,paddingRight:1,paddingLeft:1,width:230 }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Detaile', { item })

                    }}>
                    <Image source={{ uri: item.photos }}
                        style={Indexstyles.img} />
                </TouchableOpacity>



                <View style={Indexstyles.divCard}>

                    <Text style={Indexstyles.textCardTop}> {item.ville}</Text>



                    <TouchableOpacity style={Indexstyles.iconlike} onPress={() => handlePressLike(item, true)}>

                        {list() }
                        
                    </TouchableOpacity>

                    <Text style={Indexstyles.textCardBottom}>{item.name}</Text>
                    <Text style={Indexstyles.prix}>{item.price}{string}</Text>



                </View>


            </View>
        )
    }












}

export default List;
