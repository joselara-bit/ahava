import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation }from '@react-navigation/native'

import PKUFoundationScreen from '../../screens/Foundation/PKUFoundationScreen'
import DoctorScreen from '../../screens/Home/DoctorScreen'
import HospitalScreen from '../../screens/Home/HospitalScreen'
import AddReviewDoctor from '../../screens/Home/AddReviewDoctor'
import HospitalsScreen from '../../screens/Home/HospitalsScreen'
import UrgentScreen from '../../screens/Home/UrgentScreen'
import MoreScreens from '../../screens/Home/MoreScreens'
import UrgentMoneyScreen from '../../screens/Home/UrgentMoneyScreen'
import MoreMoneyScreen from '../../screens/Home/MoreMoneyScreen'
import RequirementsScreen from '../../screens/Home/RequirementsScreen'
import PostHospital from '../../screens/Profile/PostHospital'
import MoreInformation from '../../screens/Home/MoreInformation'

const Stack = createStackNavigator()

export default function PKUFoundationStackScreen({ route }) {
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PKUFoundation"
                component={PKUFoundationScreen}
                options={{ headerTintColor:"#F41635", headerShown: false}}
            />

            <Stack.Screen
                name="doctor"
                component={DoctorScreen}
                options={{ headerTintColor:"#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="addreview"
                component={AddReviewDoctor}
                options={{ title: "Añadir comentario"}}
            />

            <Stack.Screen
                name="Hospitals"
                component={HospitalsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="hospital"
                component={HospitalScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Urgent"
                component={UrgentScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UrgentMoney"
                component={UrgentMoneyScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MoreMoney"
                component={UrgentMoneyScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="More"
                component={MoreScreens}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Requirements"
                component={RequirementsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Hospital"
                component={PostHospital}
            />

            <Stack.Screen
                name="MoreInformation"
                component={MoreInformation}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
