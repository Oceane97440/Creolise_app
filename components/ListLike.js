import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';

const ListLike = ({ item, navigation }) => {

    const [loading, setLoading] = useState(true);
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
            setLoading(false);




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
            <View style={styles.divList}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Detaile', { item: items })

                    }}>
                    <Image source={{ uri: item.item_photos }}
                        style={styles.img} />
                </TouchableOpacity>

                <View style={styles.divText}>
                    <View>
                        <Text style={styles.h2}>{item.item_name}</Text>
                        <Text >{item.item_categorie}</Text>
                    </View>


                    <Text style={styles.price}>{item.item_price}{string}</Text>


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



export default ListLike
