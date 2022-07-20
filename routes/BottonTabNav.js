import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favoris from '../screens/users/Favoris';
import Location from '../screens/users/Location';
import Index from '../screens/home/Index';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
       

        <Tab.Navigator screenOptions={{header:()=>null}}>
        <Tab.Screen name="Accueil" component={Index} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="Favoris" component={Favoris} />

        </Tab.Navigator>

       

    );
  }




  export default MyTabs

