import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage/Homepage';
import AddDetails from './components/AddDetails/AddDetails';
import UserSpace from './components/UserSpace/UserSpace';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Sandbox from './components/Sandbox/Sandbox';
import LogIn from './components/LogIn/LogIn';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Homepage'>
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
                    <Stack.Screen
                    name="LogIn"
                    component={LogIn}
                    options={{ title: 'Connexion' }}
                    />
                    <Stack.Screen
                    name="Sandbox"
                    component={Sandbox}
                    options={{ title: 'Sandbox' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
