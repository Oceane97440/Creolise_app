import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';
import React from "react";

export default function HomePage() {
    return (
      <View style={styles.container}>
          <Text style={styles.baseText}>
        <Text style={styles.h1}>Profitez de vos vacances avec Créolise</Text>   {"\n"}   {"\n"}
        <Text>Venez découvrir notre culture locale réunionnaise, profiter de votre voyage dans le confort et explorer divers lieux</Text>
        {"\n"}
        </Text>

            
        <TouchableOpacity onPress="" style={styles.btn}>
            <Text style={{color:"#fff",fontSize:20,fontWeight: "bold", padding:1,paddingRight:30,paddingLeft:30}}>Explorer</Text>
        </TouchableOpacity>


        <Image
          style={styles.img_travel}
          source={require('../../public/img/babel.config.png')}
        />



      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      margin:10,
      alignItems:"flex-start",
    },
    img_travel: {
      width:'100%',
      height: 315,
      marginTop:20,
    },
    baseText: {
        fontFamily: "Verdana"
      },
      h1:{
          color:"#d43d35",
          fontSize: 30,
          fontWeight: "bold"
      },
      btn:{
        backgroundColor:'#d43d35',
        borderRadius: 10,
        padding:10,
        fontWeight: "bold",
       
      }
  });