import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detaile(){

    return (

        <View style={styles.container}>

        <View style={styles.divBtnHead}>

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={styles.iconhead} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon name="share" size={30} color="#000" style={styles.iconhead} />
        </TouchableOpacity>

        </View>
        
        <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1'}}
       style={styles.imghead} />


        <View style={styles.divInfo}>

            <View style={styles.titre}>

            <Text style={styles.h1}>Hotêl Dina</Text>
            <Text style={styles.price}>100€/nuit</Text>

            </View>

        
            <Text> <Icon name="star" size={25} color="#f2da15" style={styles.iconhead} /> 4.5 (16 avis)</Text>
        
      

                <View style={styles.divDescription}>

                <Text>
                Situé à Saint-Denis, à 700 mètres de la cathédrale, le DINA MORGABINE SAINT DENIS propose un restaurant, un parking privé, une salle de sport et un bar. Il se trouve à environ 1,3 km du musée d'histoire naturelle de la Réunion et à 2,8 km du parc de la Trinité.


               
                </Text>


                </View>
           
         
         
        </View>




        </View>


    )




  

}


const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        margin:10,
        alignItems:"left",
        //justifyContent: 'center',
    },
    divBtnHead:{
        display:'flex',
        width: 358,
        flexDirection:'row-reverse',
        bottom:20,
        width: '100%',
    },
    iconhead:{
        padding:10,
        margin:10
    },
    imghead:{
        width:"100%",
        height:250,
        borderRadius:20,
    },
    divInfo:{

    },
    h1:{
        color:"#125386",
        fontSize: 25,
        fontWeight: "bold"
    },
    price:{
        color:"#d43d35",
        fontSize: 25,
        fontWeight: "bold"
    },
    titre:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between',
        padding:10
    },
    divDescription:{
       
        textAlign:'left',
        marginTop:20,
        width:350
    }
})   