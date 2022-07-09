import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React from "react";
import HomeStackNav from './routes/HomeStackNav';
import Index from './screens/home/Index';
import Detaile from './screens/home/Detail';
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
