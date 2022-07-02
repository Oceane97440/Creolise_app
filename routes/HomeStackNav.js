import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomePage from '../screens/hp/HomePage';
import Etape1 from '../screens/hp/Etape1';
import Etape2 from '../screens/hp/Etape2';
import Signup from '../screens/login/Signup';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage,
    },
    Etape1: {
        screen: Etape1,
    },
    Etape2: {
        screen: Etape2,
    },
    Signup: {
        screen: Signup,
    },
    Login:{
        screen:Login
    },
    Index:{
        screen:Index
    }
});


export default createAppContainer(AppNavigator);
