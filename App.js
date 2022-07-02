import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React from "react";
import HomeStackNav from './routes/HomeStackNav';
import Index from './screens/home/Index';
export default function App() {



  return (

    <View style={styles.container} >

      <Index />

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
