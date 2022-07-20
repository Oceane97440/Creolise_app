import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNav from './routes/HomeStackNav';


export default function App() {



  return (

    <NavigationContainer style={styles.container}>

      <HomeStackNav/>

    </NavigationContainer>

   
  );



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'left',
    // justifyContent: '',
  }

});