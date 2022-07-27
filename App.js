import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import HomeStackNav from './routes/HomeStackNav';
import { initSqlite } from "./database/db";
import { selectAllItem } from "./database/db";


initSqlite().then(() => {
  console.log('Table initialiser')
}).catch(err => {

  console.log(err)
})

export default function App() {

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const [dataApi, setdataApi] = useState([]);
  const [dataListFavoris, setdataListFavoris] = useState([]);

  const getApi = async () => {
    try {
      //Endpoint API avec la clès api + latitude et longitude
      const response = await axios({
        method: 'get',
        url: "https://api-monuments-re.herokuapp.com/items",
      });

      setdataApi(response.data);
      setLoading(false); 
      
      
 
     
    } catch (err) {
      console.log(err);
    }
  };

  const selectAll = async ()=>{
    try {
      const itemData = await selectAllItem()
      setdataListFavoris(itemData.rows._array)
      setLoading2(false)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    (async () => {

      await getApi();

      
      
    })();
  }, []);

  useEffect(() => {
    (async () => {

      await selectAll();

      
      
    })();
  }, []);


  if ((loading)&&(loading2)&&(dataApi.length===0)) {

    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }else{

    return (

      <NavigationContainer style={styles.container}>
  
        <HomeStackNav data={dataApi} dataSqlite={dataListFavoris}/>
  
      </NavigationContainer>
  
  
    );
  }






}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'left',
    // justifyContent: '',
  }

});