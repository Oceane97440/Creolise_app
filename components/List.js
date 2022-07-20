import React,{useState} from 'react';
import {Text, View ,Image,TouchableOpacity,Pressable,TextInput,ScrollView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../styles/IndexStyles';

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
      
              <Icon name="heart" size={30} color='#d43d35' style={Indexstyles.iconlike} />
      
            
              <Text style={Indexstyles.textCardBottom}>{item.name}</Text>
              <Text style={Indexstyles.prix}>{item.price}{string}</Text>
      
      
      
              </View>
      
            
            </View>
        )
    }
        
    
      


    
      
    


    
  
}

export default List;
