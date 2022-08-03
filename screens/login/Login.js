import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from "react";
import { actionLogin } from "../../redux/actions/actionAuths";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadScreen from '../hp/LoadScreen';


export default function Login({ navigation }) {
  const dispatch = useDispatch()


  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState(null);
  const [isLoad, setisLoad] = useState(false);


  const load = async () => {
    const userDetail = await AsyncStorage.getItem("dataUser")

    if (userDetail !== null) {
      const userDetailObj = JSON.parse(userDetail)
      const { token, userId, dateTokenExpire } = userDetailObj

      //verif valide du token
      const expireDate = new Date(dateTokenExpire);
      const now = new Date()

      if ((expireDate <= now) || (!token) || (!userId)) {
        return;
      }
      navigation.navigate('Home')
    }
    setisLoad(true)

  }

  useLayoutEffect(() => {
    load()
  }, []);

  useEffect(() => {
    if (error !== null) {
      Alert.alert("Erreur",
        error,
        [{ text: "OK" }])
    }

  }, [error]);

  const handlessPressSignup = () => {
    navigation.navigate('Signup')

  };
  const handlessPressLogin = async () => {
    if ((email) && (password)) {
      const dataUser = {
        email: email,
        password: password,

      }
      try {
        /*const jsonValue = JSON.stringify(dataUser)
        await AsyncStorage.setItem('datauser', jsonValue)*/
        await dispatch(actionLogin(dataUser))

        navigation.navigate('Home')

      } catch (e) {
        seterror(e.message)
      }


    } else {
      alert("Il y a des champs manquantes")


    }

  };

  if (isLoad) {
    return (
      <View style={styles.container}>

        <View style={styles.divBtnSignup}>
          <TouchableOpacity onPress={handlessPressSignup} style={styles.btn_login}>
            <Text style={{ color: '#d43d35', textAlign: 'center', fontSize: 15 }}>Inscription</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divForm}>

          <Text style={styles.h1}>Connexion {"\n"} </Text>


          <TextInput style={styles.input} placeholderTextColor="#000"
            onChangeText={text => { setemail(text) }} keyboardType="email-address" placeholder='Votre email*' />
          <TextInput style={styles.input} placeholderTextColor="#000"
            onChangeText={text => { setpassword(text) }} secureTextEntry placeholder='Votre mot de passe*' />



          <TouchableOpacity onPress={handlessPressLogin} style={styles.btn}>
            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 22 }}>Valider</Text>
          </TouchableOpacity>
          <Text style={styles.textSmall}>Les champs marqués d'un astérisque (*) sont obligatoires</Text>



          {/*<TouchableOpacity style={styles.btnGoogle}>
  
            <Text style={{ color: '#000', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>
              <Icon name="google" size={20} color="#000" />
  
              Connectez-vous avec Google</Text>
          </TouchableOpacity>*/}
        </View>
      </View>
    );
  }
  return (<LoadScreen />)



}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
  },
  divForm: {
    width: '100%',
    margin: 5,
    bottom: 40
  },
  divInput: {
    flexDirection: 'row',
  },
  input: {

    backgroundColor: '#fafafa',
    margin: 10,
    width: '100%',
    height: 60,
    borderRadius: 22,
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
  btnGoogle: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginTop: 15,
    fontWeight: "bold",
    width: '100%',
    padding: 15,

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
  divBtnSignup: {
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