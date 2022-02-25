import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from '../../screens/SearchScreen'
import SearchCampain from '../../screens/SearchCampain'
import SearchPKUCampain from '../../screens/SearchPKUCampain.js'


const Stack = createStackNavigator()

export default function SearchStackScreen({ navigation, route }) {
    if ( route.state && route.state.index > 0 ) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Buscar personas"
                component={SearchScreen}
                options={{ headerTintColor: "#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="Buscar Campaña"
                component={SearchCampain}
                options={{ headerTintColor: "#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="Buscar PKU"
                component={SearchPKUCampain}
                options={{ headerTintColor: "#F41635", headerShown: false }}
            />
        </Stack.Navigator>
    )
}
