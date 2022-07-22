import React,{useState} from 'react';
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

  const addItemFavoris = async(id,statut)=>{
    try {
       const dbinsertData = await addItem(id,statut)
        console.log(dbinsertData)
    } catch (error) {
        console.log(error)
        
    }

  }

   const handlePressLike = (id,statut)=>{
    console.log(id,statut)
     addItemFavoris(id,statut)
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
      
              <TouchableOpacity style={Indexstyles.iconlike} onPress={()=>handlePressLike(item.id,true)}>
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
