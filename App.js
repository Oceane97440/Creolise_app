import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React from "react";
import HomePage from './screens/hp/HomePage';
import Etape1 from './screens/hp/Etape1';
import Etape2 from './screens/hp/Etape2';
import HomeStackNav from './routes/HomeStackNav';
export default function App() {



  return (

    <View style={styles.container} >

      <HomeStackNav />

    </View>
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
