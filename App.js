import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNav from './routes/HomeStackNav';
import MyTabs from "./routes/BottonTabNav";


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