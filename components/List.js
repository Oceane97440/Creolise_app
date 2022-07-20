import React,{useState} from 'react';
import {Text, View ,Image,TouchableOpacity,ImageBackground,TextInput,ScrollView,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Indexstyles } from '../styles/IndexStyles';

const List =({item})=> {


   
   
        return(

            
            <View>
              
              <TouchableOpacity 
              onPress={() => {
              navigation.navigate('Detaile',{item})
        
               }}>
              <Image source={{uri: item.photos}}
              style={Indexstyles.img} />
              </TouchableOpacity>
        
      
      
              <View style={Indexstyles.divCard}>
      
              <Text style={Indexstyles.textCardTop}> {item.ville}</Text>
      
              <TouchableOpacity>
              <Icon name="heart" size={30} color="#d43d35" style={Indexstyles.iconlike} />
              </TouchableOpacity>
      
            
              <View style={Indexstyles.textContaireBotton}>
              <Text style={Indexstyles.textCardBottom}>{item.name}</Text>
              <Text style={Indexstyles.prix}>{item.price}€/nuit</Text>
              </View>
      
      
      
      
              </View>
      
            
            </View>
        )
    
      


    
      
    


    
  
}

export default List;
