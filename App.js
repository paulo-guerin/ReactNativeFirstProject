import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage/Homepage';
import AddDetails from './components/AddDetails/AddDetails';
import UserSpace from './components/UserSpace/UserSpace';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Sandbox from './components/Sandbox/Sandbox';

const Stack = createStackNavigator();
const initialStateAdds = {
    addList: [
        {id: 1, title: 'Dvds Rick and Morty', category:'multimédia', description: 'Lorem Ipsum', image: 'https://images-na.ssl-images-amazon.com/images/I/61XyRAQ3KmL._AC_.jpg'},
        {id: 2, title: 'Dvds Bojack Horseman', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 3, title: 'Dvds Steven Universe', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 4, title: 'Dvds Gravity Falls', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 5, title: 'Dvds Avatar the last air bender', category:'multimédia', description: 'Lorem Ipsum'},
        {id: 6, title: 'MBK Rocket', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 7, title: 'Suzuki Marauder 125cc', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 8, title: 'Fiat Panda', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 9, title: 'K2000', category:'véhicules', description: 'Lorem Ipsum'},
        {id: 10, title: 'Supercopter', category:'véhicules', description: 'Lorem Ipsum'},
    ],
    newAdd: {
        title: '',
        description: '',
        category: '',
    },
    newAddClear: {
        title: '',
        description: '',
        category: '',
    }
}

export default function App() {

    function addReducer(state = { initialStateAdds: initialStateAdds }, action) {
        switch (action.type) {
          case 'ADD_ITEM':
            return {

           }
          case 'DELETE_ITEM':
            return {

            }
          case 'EDIT_ITEM':
            return {

            }
          default:
            return state.addList
        }
    }

    let store = createStore(addReducer);

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
                    name="Sandbox"
                    component={Sandbox}
                    options={{ title: 'Sandbox' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
