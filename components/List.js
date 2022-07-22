import React,{useState,useEffect} from 'react';
import {Text, View ,Image,TouchableOpacity,Pressable,TouchableHighlight,TextInput,ScrollView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../styles/IndexStyles';
import { addItem } from '../database/db';
const List =({item,navigation})=> {


    switch (item.categorie) {
        case "Hotels":
            var string = "€/nuit"
        break;
        case "Restaurants":
            var string = "€/plat"
        break;

        default:
            var string = ""

        break;
    }

  const addItemFavoris = async(id,name,photos,price,categorie,statut)=>{
    try {
       const dbinsertData = await addItem(id,name,photos,price,categorie,statut)
       // console.log(dbinsertData)
    } catch (error) {
        console.log(error)
        
    }

  }

   const handlePressLike = (item,statut)=>{
    const id = item.id
    const name = item.name
    const photos = item.photos
    const price = item.price
    const categorie = item.categorie

    console.log(item)
    console.log(statut)

    
    addItemFavoris(id,name,photos,price,categorie,statut)
   }

    if (item) {
        return(

            
            <View style={{marginRight:-15}}>
              
              <TouchableOpacity 
              onPress={() => {
              navigation.navigate('Detaile',{item})
        
               }}>
              <Image source={{uri: item.photos}}
              style={Indexstyles.img} />
              </TouchableOpacity>
        
      
      
              <View style={Indexstyles.divCard}>
               
              <Text style={Indexstyles.textCardTop}> {item.ville}</Text>
      
              <TouchableOpacity style={Indexstyles.iconlike} onPress={()=>handlePressLike(item,true)}>
                <Icon name="heart" size={30} color='#d43d35' />
              </TouchableOpacity>

      
            
              <Text style={Indexstyles.textCardBottom}>{item.name}</Text>
              <Text style={Indexstyles.prix}>{item.price}{string}</Text>
      
      
      
              </View>
      
            
            </View>
        )
    }
        
    
      


    
      
    


    
  
}

export default List;
