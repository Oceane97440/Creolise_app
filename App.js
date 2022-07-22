import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { initSqlite } from "./database/db";
import HomeStackNav from './routes/HomeStackNav';

initSqlite().then(()=>{
  console.log('Table initialiser')
}).catch(err=>{

  console.log(err)
})

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