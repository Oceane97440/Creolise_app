import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "../screens/home/Index";
import Detaile from "../screens/home/Detail";

const Stack = createStackNavigator();

export default function HomeStackNav() {



  return (

    <NavigationContainer style={styles.container}>
       <Stack.Navigator screenOptions={{header:()=>null}}>
       <Stack.Screen name="Home" component={Index} />
       <Stack.Screen name="Detaile" component={Detaile} />


       </Stack.Navigator>

    </NavigationContainer>

   
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'left',
    // justifyContent: '',
  }

});
