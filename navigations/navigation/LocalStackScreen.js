import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LocalScreen from '../../screens/LocalScreen'
import SearchMunicipalityScreen from '../../screens/SearchMunicipalityScreen'
import SearchSuburbScreen from '../../screens/SearchSuburbScreen'

const Stack = createStackNavigator()

export default function LocalStackScreen({ navigation, route }) {
    if ( route.state && route.state.index > 0 ) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Local"
                component={LocalScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                    name="Buscar por municipio/alcaldía"
                    component={SearchMunicipalityScreen}
                    options={{headerShown: false }}
                />

            <Stack.Screen
                    name="Buscar por colonia"
                    component={SearchSuburbScreen}
                    options={{headerShown: false }}
                />
        </Stack.Navigator>
    )
}
