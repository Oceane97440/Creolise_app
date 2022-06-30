import { StyleSheet, Text, View ,Image,TouchableOpacity,Button,TextInput} from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Signup() {

  

    return (
      <View style={styles.container}>
    
    <TouchableOpacity style={styles.btn_login}>
            <Text style={{color:'#d43d35', textAlign:'center',fontSize:15}}>Connexion</Text>
        </TouchableOpacity>   

    <Text style={styles.h1}>Inscription {"\n"} </Text>  


        <View style={styles.divInput}>
        <TextInput style={styles.inputGroup}  placeholder='nom'/>
        <TextInput style={styles.inputGroup}  placeholder='prenom'/>
        </View>
       
        <TextInput style={styles.input}  keyboardType="numeric" placeholder='numéros de téléphone'/>
        <TextInput style={styles.input}  placeholder='email*'/>
        <TextInput style={styles.input}  placeholder='mot de passe*'/>



  <TouchableOpacity style={styles.btn}>
            <Text style={{color:'#fff', textAlign:'center',fontWeight:'bold',fontSize:22}}>Valider</Text>
        </TouchableOpacity>  
       
       

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      margin:10,
      alignItems:"center",   
      justifyContent: 'center',
    },
    divInput:{
        flexDirection: 'row',
    },
    input:{

        backgroundColor:'#fafafa',
        height:'10%',
        margin:10,
        width:'100%',
        borderRadius:'22px',
        padding:30,
        color:'black'
    },
    inputGroup:{
        backgroundColor:'#fafafa',
        height:'10%',
        margin:10,
        width:'45%',
        borderRadius:22,
        padding:30,
        color:'black'
    },
    h1:{
        color:"#d43d35",
        fontSize: 30,
        fontWeight: "bold",
        textAlign:'center'
    },
    
      btn:{
        backgroundColor:'#d43d35',
        borderRadius: 10,
        padding:10,
        fontWeight: "bold",
        width:'100%',
        padding:20,
       
       
      },
      btn_login:{
        backgroundColor:'#f5f5f5',
        borderRadius: 20,
        padding:1,
        fontWeight: "600",
        width:'30%',
        padding:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

       marginBottom:30

      }
  });