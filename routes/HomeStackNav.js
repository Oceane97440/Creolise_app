import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detaile from "../screens/home/Detail";
import MyTabs from "./BottonTabNav";

const Stack = createStackNavigator();

export default function HomeStackNav() {



  return (

   
       <Stack.Navigator screenOptions={{header:()=>null}}>
       <Stack.Screen name="Home" component={MyTabs} />
       <Stack.Screen name="Detaile" component={Detaile}/>


       </Stack.Navigator>


   
  );



}

