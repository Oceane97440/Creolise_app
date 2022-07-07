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
       style={styles.img} />






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

    }
})   