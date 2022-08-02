import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actionSignup } from "../../redux/actions/actionAuths";
import { useDispatch } from "react-redux";

export default function Signup({ navigation }) {

  const dispatch = useDispatch()

  const [nom, setnom] = useState();
  const [prenom, setprenom] = useState();
  const [num, setnum] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const SaveData = async () => {

    if ((email) && (password) && (nom) && (prenom)) {

      var dataUser = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        num: num,

      }

      try {
        /*const jsonValue = JSON.stringify(dataUser)
        await AsyncStorage.setItem('datauser', jsonValue)*/
        dispatch(actionSignup(dataUser))
        
        navigation.navigate('Login')

      } catch (e) {
        console.log(e)
      }
    } else {
      alert("Il y a des champs manquantes")

    }
  };


  const handlessPressLogin = () => {
    navigation.navigate('Login')

  };

  return (
    <View style={styles.container}>


      <View style={styles.divBtnLogin}>
        <TouchableOpacity onPress={handlessPressLogin} style={styles.btn_login}>
          <Text style={{ color: '#d43d35', textAlign: 'center', fontSize: 15 }}>Connexion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divForm}>
        <Text>{nom} - {prenom} - {num} - {email}  - {password}</Text>
        <Text style={styles.h1}>Inscription {"\n"} </Text>


        <View style={styles.divInput}>
          <TextInput style={styles.inputGroup} placeholderTextColor="#000" onChangeText={text => { setnom(text) }} placeholder='Votre nom*' />
          <TextInput style={styles.inputGroup} placeholderTextColor="#000"
            onChangeText={text => { setprenom(text) }} placeholder='Votre prénom*' />
        </View>


        <TextInput style={styles.input} placeholderTextColor="#000"
          onChangeText={text => { setnum(text) }} keyboardType="numeric" placeholder='Votre n° de tel' />
        <TextInput style={styles.input} placeholderTextColor="#000"
          onChangeText={text => { setemail(text) }} keyboardType="email-address" placeholder='Votre email*' />
        <TextInput style={styles.input} placeholderTextColor="#000"
          onChangeText={text => { setpassword(text) }} secureTextEntry placeholder='Votre mot de passe*' />



        <TouchableOpacity style={styles.btn} onPress={SaveData}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }}>Valider</Text>
        </TouchableOpacity>
        <Text style={styles.textSmall}>Les champs marqués d'un astérisque (*) sont obligatoires</Text>


      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
  },
  divForm:{
    width:'100%',
    margin:5,
    bottom:40
  },
  divInput: {
    flexDirection: 'row',
  },
  input: {

    backgroundColor: '#fafafa',
    margin: 10,
    width: '100%',
    height: 50,
    borderRadius: 22,
    height: '10%',
    color: 'black',
    paddingLeft: 20,
    margin: 5,
    padding: 10,


  },
  inputGroup: {
    backgroundColor: '#fafafa',
    height: 50,
    margin: 10,
    width: '50%',
    borderRadius: 22,
    padding: 10,
    color: 'black',
    paddingLeft: 20,
    margin: 5,
    padding: 10,
  },
  h1: {
    color: "#d43d35",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },

  btn: {
    backgroundColor: '#d43d35',
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
    width: '100%',
    padding: 20,
    marginTop: 10


  },
  btn_login: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 1,
    fontWeight: "600",
    width: '30%',
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    marginBottom: 30

  },
  divBtnLogin: {
    display: 'flex',
    width: 350,
    flexDirection: 'row-reverse',
    bottom: 30
  },
  textSmall: {
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'left',
    padding: 5
  }

});