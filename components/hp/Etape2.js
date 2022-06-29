import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Etape2() {
    return (
      <View style={styles.container}>
           <Image
          style={styles.img_travel}
          source={require('../../public/img/clip-1814.png')}
        />

          <Text style={styles.baseText}>
        <Text style={styles.h1}>Profiter de vos vacances</Text>   {"\n"}   {"\n"}
        <Text>Localise les lieux d'hébergements et {"\n"}  restaurants à la réunion</Text>
        {"\n"}
        </Text>

            
        <TouchableOpacity onPress={() => alert('View Clicked')} style={styles.btn}>
            <Text style={{paddingRight:30,paddingLeft:30}}>
            <Icon name="arrow-right" size={30} color="#fff"  />
            </Text>
        </TouchableOpacity>


     



      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      margin:10,
      alignItems:"center",
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    img_travel: {
      width:'100%',
      height: '60%',
      //marginTop:20,
    },
    baseText: {
        fontFamily: "Verdana",
       textAlign:'center'

      },
      h1:{
          color:"#125386",
          fontSize: 30,
          fontWeight: "bold"
      },
      btn:{
        backgroundColor:'#d43d35',
        borderRadius: 50,
        padding:10,
        fontWeight: "bold",
       
      }
  });