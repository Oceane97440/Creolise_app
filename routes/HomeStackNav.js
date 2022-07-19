import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomePage from '../screens/hp/HomePage';
import Etape1 from '../screens/hp/Etape1';
import Etape2 from '../screens/hp/Etape2';
import Signup from '../screens/login/Signup';
import Login from '../screens/login/Login';
import Index from '../screens/home/Index';
import Detaile from '../screens/home/Detail';



const AppNavigator = createStackNavigator({
    /*Home: {
        screen: HomePage,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    },
    Etape1: {
        screen: Etape1,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    },
    Etape2: {
        screen: Etape2,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    },
    Login:{
        screen:Login,
       navigationOptions: {
            title: '',
            headerShown: false,
        }
    },*/
    Index:{
        screen:Index,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    },
    Detaile:{
        screen:Detaile,
        navigationOptions: {
            title: '',
            headerShown: false,
        }
    }
});



export default createAppContainer(AppNavigator);
