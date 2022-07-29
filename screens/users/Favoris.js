import React, { useEffect, useState } from 'react';
import { Text, View,FlatList } from 'react-native';
import { Locationstyles } from '../../styles/IndexStyles';
import ListLike from '../../components/ListLike';
import { selectAllItem } from '../../database/db';

const Favoris = ({ navigation,favoris }) => {


  const [dataFavoris, setdataFavoris] = useState(favoris);

  const selectAll = async ()=>{
    try {
      const itemData = await selectAllItem()
      setdataFavoris(itemData.rows._array)
    } catch (error) {
      
    }
  }




  useEffect(() => {
    (async () => {

      await selectAll();

      
      
    })();
  }, [dataFavoris]);


  return (
    <View style={Locationstyles.container}>
      <View style={Locationstyles.divHead}>
        <Text style={Locationstyles.h1}>Vos Favoris </Text>


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





export default Favoris;
