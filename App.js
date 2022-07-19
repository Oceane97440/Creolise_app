import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackNav from './routes/HomeStackNav';

const Stack = createStackNavigator();

export default function App() {



  return (

   <HomeStackNav/>

   
  );



}

