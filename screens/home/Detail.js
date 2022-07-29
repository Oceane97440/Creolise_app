import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Detailstyles } from '../../styles/IndexStyles';
export default function Detaile({ navigation, route }) {


    const [like, setLike] = useState('#000');
    const onClicLike = () => {

        if (like === '#d43d35') {
            setLike('#000')

        } else {
            setLike('#d43d35')
        }
    };

    const { name } = route.params.item;
    const { price } = route.params.item;
    const { categorie } = route.params.item;
    const { description } = route.params.item;
    const { photos } = route.params.item;
    const { avantage } = route.params.item;


    switch (categorie) {
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
        return avantage.map(obj => {

            const icon = obj.icon

            return (
                <View key={obj.id} style={Detailstyles.divContenteIcone}>
                    <Image style={Detailstyles.icon} source={{ uri: icon }} />
                    <Text style={Detailstyles.textIcon}>{obj.point_fort}</Text>
                </View>
            );
        });
    };

    const handlessPressBack = () => {
        navigation.goBack()

    };

    return (

        <View style={Detailstyles.container}>




            <View style={Detailstyles.divBtnHead}>

                <View style={Detailstyles.divIconBack}>
                    <TouchableOpacity onPress={handlessPressBack}>
                        <Icon name="arrow-left" size={30} style={Detailstyles.iconback} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={Detailstyles.divIconHead}>
                    <TouchableOpacity onPress={onClicLike}>
                        <Icon name="heart" size={30} color={like} style={Detailstyles.iconhead} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="share" size={30} color="#000" style={Detailstyles.iconhead} />
                    </TouchableOpacity>

                </View>
            </View>
            <Image source={{ uri: photos }}
                style={Detailstyles.imghead} />


            <View style={Detailstyles.divInfo}>

                <View style={Detailstyles.titre}>

                    <Text style={Detailstyles.h1}>{name}</Text>
                    <Text style={Detailstyles.price}>{price}{string}</Text>

                </View>


                <Text> <Icon name="star" size={25} color="#f2da15" style={Detailstyles.iconhead} /> 4.5 (16 avis)</Text>

                <View style={Detailstyles.divDescription}>

                    <Text>{description}</Text>





                    <Text style={Detailstyles.h2}>Points forts :</Text>

                    <View style={Detailstyles.divIcon}>

                        {list()}





                    </View>


                    <View style={Detailstyles.divBtn}>
                        <TouchableOpacity onPress={3} style={Detailstyles.btnSite}>
                            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", padding: 10 }}>
                                <Icon name="link" size={20} color="#fff" style={Detailstyles.iconSite} />


                                Voir le site</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={3} style={Detailstyles.btnPhone}>
                            <Text style={{ color: "#d43d35", fontSize: 20, fontWeight: "bold", padding: 10 }}>
                                <Icon name="phone" size={20} color="#d43d35" style={Detailstyles.iconSite} />


                                Réserver</Text>
                        </TouchableOpacity>


                    </View>




                </View>



            </View>




        </View>


    )






}


