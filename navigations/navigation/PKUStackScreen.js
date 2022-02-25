import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation }from '@react-navigation/native'

import PKUScreen from '../../screens/PKU/PKUScreen'
import UserPKU from '../../screens/PKU/UserPKU'
import PKUHistories from '../../screens/PKU/PKUHistories'
import AddReviewDoctor from '../../screens/Home/AddReviewDoctor'
import HospitalPKUScreen from '../../screens/PKU/HospitalPKUScreen'
import UrgentPKU from '../../screens/PKU/UrgentPKU'
import MoreScreens from '../../screens/Home/MoreScreens'
import UrgentMoneyScreen from '../../screens/Home/UrgentMoneyScreen'
import InfoScreen from '../../screens/PKU/InfoScreen'
import MoreInformation from '../../screens/Home/MoreInformation'
import MorePKUScreen from '../../screens/PKU/MorePKUScreen'
import KikeScreen from '../../screens/PKU/KikeScreen'
import PostStory from '../../screens/PKU/PostStory'
import PKUHospitals from '../../screens/PKU/PKUHospitals'

const Stack = createStackNavigator()

export default function PKUStackScreen({ route }) {
    

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PKUScreen"
                component={PKUScreen}
                options={{ headerTintColor:"#F41635", headerShown: false}}
            />

            <Stack.Screen
                name="userPKU"
                component={UserPKU}
                options={{ headerTintColor:"#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="addreview"
                component={AddReviewDoctor}
                options={{ title: "Añadir comentario"}}
            />

            <Stack.Screen
                name="PKUHistories"
                component={PKUHistories}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="hospitalPKU"
                component={HospitalPKUScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="PKUHospitals"
                component={PKUHospitals}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UrgentPKU"
                component={UrgentPKU}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UrgentMoney"
                component={UrgentMoneyScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="More"
                component={MoreScreens}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Information"
                component={InfoScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MoreInformation"
                component={MoreInformation}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MorePKUScreen"
                component={MorePKUScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="KikeScreen"
                component={KikeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PostStory"
                component={PostStory}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
