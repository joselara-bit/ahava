import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from '../../screens/Home/UserScreen'
import MoneyScreen from '../../screens/MoneyScreen'
import SearchCampain from '../../screens/SearchCampain'
import UrgentMoneyScreen from '../../screens/Home/UrgentMoneyScreen'
import MoreMoneyRequest from '../../screens/MoreMoneyRequest'

const Stack = createStackNavigator()

export default function NotificationsStackScreen({ navigation, route }) {
    if ( route.state && route.state.index > 0 ) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Apoyo económico"
                component={MoneyScreen}
                options={{headerTintColor:"#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="Buscar Campaña"
                component={SearchCampain}
                options={{headerTintColor:"#F41635", headerShown: false }}
            />

        <Stack.Screen
                name="user"
                component={UserScreen}
                options={{ headerTintColor:"#F41635", headerShown: false }}
            />
        
        <Stack.Screen
                name="UrgentMoney"
                component={UrgentMoneyScreen}
                options={{ headerShown: false }}
            />

        <Stack.Screen
            name="MoreMoneyRequest"
            component={MoreMoneyRequest}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    )
}
