import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native';
import { selectAllItem } from '../../database/db';
import ListLike from '../../components/ListLike';

const Favoris = ({ navigation }) => {
  const [dataFavoris, setdataFavoris] = useState([]);

  const fetchData = async () => {

    try {
      const itemData = await selectAllItem()
       setdataFavoris(itemData.rows._array)
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    fetchData()
  }, [dataFavoris]);

  const functionMap = () => {

    console.log(dataFavoris)

    return dataFavoris.map((element) => {
      return (
        <View key={element.id} style={{ margin: 10 }}>
          <Text>{element.item_name}</Text>
        </View>
      );
    });
  };



  return (
    <View style={styles.container}>
      <View style={styles.divHead}>
        <Text style={styles.h1}>Vos Favoris </Text>


        <FlatList

          data={dataFavoris}
          renderItem={({ item }) => <ListLike item={item} navigation={navigation} />}
          keyExtractor={item => item.id}
          horizontal={false}


        />

      </View>
    </View>
  );




}


const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    margin: 10,
    alignItems: "left",
  },
  divHead: {
    display: 'flex',
    width: '100%',
  },
  h1: {
    color: "#125386",
    fontSize: 26,
    fontWeight: "bold"
  }
})



export default Favoris;
