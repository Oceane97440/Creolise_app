import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Etape1() {
    return (
      <View style={styles.container}>
           <Image
          style={styles.img_travel}
          source={require('../../public/img/cherry-page-not-found.png')}
        />

          <Text style={styles.baseText}>
        <Text style={styles.h1}>Explorer des destinations</Text>   {"\n"}   {"\n"}
        <Text>Notre application repère des lieux, monuments historiques et randonner proches de vous</Text>
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
      width:'85%',
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