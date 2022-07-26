import React,{useEffect,useState} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Detaile from "../screens/home/Detail";
import MyTabs from "./BottonTabNav";
import HomePage from "../screens/hp/HomePage"
import Etape1 from "../screens/hp/Etape1"
import Etape2 from "../screens/hp/Etape2"
import Login from "../screens/login/Login"
import Signup from "../screens/login/Signup"

const Stack = createStackNavigator();

export default function HomeStackNav({data}) {
  const [dataItems, setDataItems] = useState(null);

  useEffect(() => {
    if (dataItems===null) {
      setDataItems(data)

    }
  }, [dataItems]);
  return (

   
       <Stack.Navigator screenOptions={{header:()=>null}}>
       {/**
        <Stack.Screen name="HomePage" component={HomePage}/>
       <Stack.Screen name="Etape1" component={Etape1}/>
       <Stack.Screen name="Etape2" component={Etape2}/>
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Signup" component={Signup}/>
        */}

       <Stack.Screen name="Home" component={MyTabs} />
       <Stack.Screen name="Detaile" component={Detaile}/>


       </Stack.Navigator>


   
  );



}

