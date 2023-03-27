import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Registrer from '../pages/Registrer';
import Home from '../pages/Home';
import Help from '../pages/Help';
import Add from '../pages/Add';
import Remove from '../pages/Remove';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name='Registrer'
                component={Registrer}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name='Help'
                component={Help}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name='Add'
                component={Add}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name='Remove'
                component={Remove}
                options={{headerShown: false}}
            />
            
            
        </Stack.Navigator>
    )
}
