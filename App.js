import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage/Homepage';
import AddDetails from './components/AddDetails/AddDetails';
import UserSpace from './components/UserSpace/UserSpace'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={{ title: 'Accueil' }}
                />
                <Stack.Screen
                name="AddDetails"
                component={AddDetails}
                options={{ title: 'Détails de l\'annonce' }}
                />
                <Stack.Screen
                name="UserSpace"
                component={UserSpace}
                options={{ title: 'Espace Utilisateur' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
