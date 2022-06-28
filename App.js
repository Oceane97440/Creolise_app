import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react";
import HomePage from './components/hp/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
    
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
