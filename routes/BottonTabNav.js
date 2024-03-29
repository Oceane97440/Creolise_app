import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favoris from '../screens/users/Favoris';
import Geolocalisation from '../screens/users/Location';
import Index from '../screens/home/Index';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();


function MyTabs({dataApi,dataBdd,navigation}) {

    
 
    return (
       

        <Tab.Navigator screenOptions={{header:()=>null}}>
        <Tab.Screen name="Accueil"  children={() =><Index   data={dataApi} navigation={navigation} />} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={size} />)
                }}/>
        <Tab.Screen name="Adresse" children={() =><Geolocalisation   data={dataApi} navigation={navigation} />} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"location-arrow"} color={color} size={size} />)
                }}/>
        <Tab.Screen name="Favoris" children={() =><Favoris favoris={dataBdd} navigation={navigation} />}  options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"heart"} color={color} size={size} />)
                }}/>

        </Tab.Navigator>

       

    );
  }




  export default MyTabs

