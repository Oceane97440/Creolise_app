import { StyleSheet, Text, View ,Image,TouchableOpacity,ImageBackground} from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Etape1({navigation}) {

  const  handlessPressBack = () => {
    navigation.goBack()
  
    };

  const  handlessPress = () => {
    navigation.navigate('Etape2')
  
    };

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

            
        <Text>
        <TouchableOpacity onPress={handlessPressBack} style={styles.btn}>
            <Text style={{paddingRight:10,paddingLeft:30}}>
            <Icon name="arrow-left" size={30} color="#d43d35"  />

            
            </Text>
        </TouchableOpacity>    

        <TouchableOpacity onPress={handlessPress} style={styles.btn}>
            <Text style={{paddingRight:10,paddingLeft:30}}>
            <Icon name="arrow-right" size={30} color="#d43d35"  />

            
            </Text>
        </TouchableOpacity>
        </Text>


     



      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      margin:10,
      alignItems:"center",
      //backgroundColor: '#fff',
      justifyContent: 'center',
    },
    img_travel: {
      width:'78%',
      height: '60%',

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
       // backgroundColor:'#d43d35',
        //borderRadius: 50,
        padding:10,
        fontWeight: "bold",
       
      }
  });