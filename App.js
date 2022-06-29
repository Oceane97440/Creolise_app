import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";
import HomePage from './components/hp/HomePage';
import Etape1 from './components/hp/Etape1';
import Etape2 from './components/hp/Etape2';

export default function App() {
  return (
    <View style={styles.container}>
      <Etape2/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'left',
   // justifyContent: '',
  }
 
});
