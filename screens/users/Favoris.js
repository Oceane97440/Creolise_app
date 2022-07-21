import React, { Component } from 'react';
import {Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,FlatList,StyleSheet} from 'react-native';

const Favoris=()=> {
 
    return (
      <View style={styles.container}>
        <View style={styles.divHead}>
        <Text style={styles.h1}>Vos Favoris </Text>

        <View style={styles.divList}>
        <Image source={{uri: "https://passtime-media.s3.eu-west-3.amazonaws.com/SPs3comf4pP3vUxu6AhnCHNm"}}
              style={styles.img} />

         <View style={styles.divText}>   
           <View>
           <Text style={styles.h2}>Saint-Hubert</Text>
            <Text >Restaurant</Text>
           </View>
      

          <Text style={styles.price}>20€/plat</Text>

        
        </View>     

  
        </View>
        
        </View>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
    margin:10,
    alignItems:"left",
  },
  divHead:{
    display:'flex',
    width: '100%',
},
h1:{
  color:"#125386",
  fontSize: 26,
  fontWeight: "bold"
},
divList:{
  marginTop:10,
  display:'flex',
  flexDirection:'column'
},
img:{
  width:'100%',
  height:210,
  borderRadius:20,
  resizeMode: 'center',

},
divText:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  margin:10,
  alignContent:'center',
  alignItems:'center'
},
h2:{
  color:"#000",
  fontSize: 25,
  fontWeight: "bold",
},
price:{
  color:'#d43d35',
  fontWeight:'bold',
  fontSize: 25,

},
})




export default Favoris;
