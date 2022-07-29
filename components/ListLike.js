import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Liststyles } from '../styles/IndexStyles';
import axios from 'axios';

const ListLike = ({ item, navigation }) => {

    const [dataApi, setdataApi] = useState([]);


    const getOneDataApi = async () => {
        try {
            //Endpoint API avec la clès api + latitude et longitude
            const response = await axios({
                method: 'get',
                url: `https://api-monuments-re.herokuapp.com/items/${item.item_id}`,
            });

            //setdataApi(response.data);
            setdataApi(response.data.avantage)




        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        (async () => {

            await getOneDataApi();



        })();
    }, []);

    const items = {

        "id": item.item_id,
        "name": item.item_name,
        "price": item.item_price,
        "description": item.item_description,
        "categorie": item.item_categorie,
        "photos": item.item_photos,
        "avantage": dataApi


    }


    switch (item.item_categorie) {
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
                        navigation.navigate('Detaile', { item: items })

                    }}>
                    <Image source={{ uri: item.item_photos }}
                        style={Liststyles.img} />
                </TouchableOpacity>

                <View style={Liststyles.divText}>
                    <View>
                        <Text style={Liststyles.h2}>{item.item_name}</Text>
                        <Text >{item.item_categorie}</Text>
                    </View>


                    <Text style={Liststyles.price}>{item.item_price}{string}</Text>


                </View>


            </View>
        </View>
    );

}





export default ListLike
