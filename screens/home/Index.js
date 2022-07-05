import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  
    return (
      <View style={styles.container}>

    <View style={styles.divBtnProfil}>
      <TouchableOpacity >
            <Icon name="user" size={30} color="#000"  />
          </TouchableOpacity> 
      </View>
      
      <Text style={styles.baseText}>
        <Text style={styles.h1}>Rechercher votre destinations</Text>   {"\n"}   {"\n"}
        <Text>Localiser les meilleur adresse à la Réunion</Text>
        {"\n"}
      </Text>

      <TextInput style={styles.input}  placeholder='Recherche...'>
      <Icon name="search" size={20} color="#d43d35"  />

      </TextInput>

      <View style={styles.ul}>
      <ScrollView horizontal={true}>

      <TouchableOpacity>
      <Text style={styles.li}>Tout |</Text>
      </TouchableOpacity>
  
     

      </ScrollView>

      </View>

      <View style={styles.bloc}>
      <ScrollView horizontal={true}>

       <View>
       <Image source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60666169.jpg?k=649bef690224bdbc0f51b75208b6b328ddc8a3e22d8085cea59d424499c97a53&o=&hp=1'}}
       style={styles.img} />

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={{position: 'relative',bottom:170,left:150}} />
        </TouchableOpacity>

       </View>

       <View>
       <Image source={{uri: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/32/05/320511_v6.jpeg'}}
       style={styles.img} />

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#d43d35" style={{position: 'relative',bottom:170,left:150}} />
        </TouchableOpacity>

       </View>


       <View>
       <Image source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/05/73/64/58/hotel-les-creoles.jpg'}}
       style={styles.img} />

        <TouchableOpacity>
        <Icon name="heart" size={30} color="#fff" style={{position: 'relative',bottom:170,left:150}} />
        </TouchableOpacity>

       </View>
    
       </ScrollView>
      </View>

      
      </View>
    );
  
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        margin:10,
        alignItems:"left",
        //justifyContent: 'center',
    },
    divBtnProfil:{
        display:'flex',
        width: 358,
        flexDirection:'row-reverse',
        bottom:20,
        width: '100%',
    },
    
    baseText: {
        fontFamily: "Verdana",
       textAlign:'left'

      },
      h1:{
          color:"#125386",
          fontSize: 30,
          fontWeight: "bold"
      },
      input:{

        backgroundColor:'#fafafa',
        height:'4%',
        margin:10,
        width:'90%',
        borderRadius:40,
        padding:30,
        color:'black',

        
    },
    ul:{

      display:'flex',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
    },
    li:{
      paddingRight:10
    },
    bloc:{

      display:'flex',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
    },
    img:{
      width:200,
      height:180,
      borderRadius:10,
      marginRight:25
    }
});