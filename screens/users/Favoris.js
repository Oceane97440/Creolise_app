import React, { useEffect, useState } from 'react';
import { Text, View,FlatList, StyleSheet } from 'react-native';
import ListLike from '../../components/ListLike';

const Favoris = ({ navigation,favoris }) => {
  const [dataFavoris, setdataFavoris] = useState(null);

  useEffect(() => {
      
    setdataFavoris(favoris)

  }, [dataFavoris]);




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
