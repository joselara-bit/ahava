import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LocalHospitalScreen from '../../screens/LocalHospitalScreen'
import SearchHospitalMunicipalityScreen from '../../screens/SearchHospitalMunicipalityScreen'
import SearchHospitalSuburbScreen from '../../screens/SearchHospitalSuburbScreen'
import SearchHospitalCityScreen from '../../screens/SearchHospitalCityScreen'
import SearchHospitalPKU from '../../screens/SearchHospitalPKU'
import CityPKU from '../../screens/CityPKU'
import SuburbPKU from '../../screens/SuburbPKU'
import MunicipalityPKU from '../../screens/MunicipalityPKU'

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
                name="Buscar Banco de Sangre"
                component={LocalHospitalScreen}
                options={{headerTintColor:"#F41635", headerShown: false }}
            />
            <Stack.Screen
                    name="Buscar por Municipio/Alcaldía"
                    component={SearchHospitalMunicipalityScreen}
                    options={{headerShown: false, headerTintColor: "#F41635"}}
                />

            <Stack.Screen
                    name="Buscar por Colonia"
                    component={SearchHospitalSuburbScreen}
                    options={{headerShown: false, headerTintColor: "#F41635"}}
                />
            <Stack.Screen
                name="Buscar por Ciudad"
                component={SearchHospitalCityScreen}
                options={{ headerShown: false, headerTintColor: "#F41635"}}
            />

            <Stack.Screen
                name="Buscar Hospital PKU"
                component={SearchHospitalPKU}
                options={{ headerShown: false, headerTintColor: "#F41635"}}
            />

            <Stack.Screen
                name="CityPKU"
                component={CityPKU}
                options={{ headerShown: false, headerTintColor: "#F41635"}}
            />

            <Stack.Screen
                name="SuburbPKU"
                component={SuburbPKU}
                options={{ headerShown: false, headerTintColor: "#F41635"}}
            />

            <Stack.Screen
                name="MunicipalityPKU"
                component={MunicipalityPKU}
                options={{ headerShown: false, headerTintColor: "#F41635"}}
            />

        </Stack.Navigator>
    )
}
