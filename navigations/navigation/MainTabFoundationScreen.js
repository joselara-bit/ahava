import React from 'react'
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import BloodFoundationStackScreen from './BloodFoundationStackScreen'
import MoneyFoundationStackScreen from './MoneyFoundationStackScreen'
import PKUFoundationStackScreen from './PKUFoundationStackScreen'

const Tab = createBottomTabNavigator();

export default function NavigationFound() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "BloodFoundation":
                iconName = "blood-bag"
                break;
            case "MoneyFoundation":
                iconName = "cash-multiple"
                break;
            case "PKUFoundation":
                iconName = "hand-heart"
                break;
        }

        return (
            <Icon
                type="material-community"
                name={iconName}
                size={27}
                color={color}
            />
        )
    }

    return (
            <Tab.Navigator
                initialRouteName="BloodFoundation"
                screenOptions={({ route }) => ({
                    tabBarInactiveTintColor: "#808080",
                    tabBarActiveTintColor: "#F41635",
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarStyle: {
                        backgroundColor: "white",
                        position: "absolute",
                        bottom: 30,
                        marginHorizontal: 20,
                        height: 55,
                        borderRadius: 13,
                        shadowColor: "#000",
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 5,
                        } 
                    }
                })}>

                <Tab.Screen
                    name="BloodFoundation"
                    component={BloodFoundationStackScreen}
                    options={{headerShown: false, title: 'Donar Sangre'}}
                    />      
                
                <Tab.Screen
                    name="MoneyFoundation"
                    component={MoneyFoundationStackScreen} 
                    options={{ title: 'Donar Dinero', headerShown: false}}
                            
                />

                <Tab.Screen
                    name="PKUFoundation"
                    component={PKUFoundationStackScreen} 
                    options={{ title: 'PKU y otras Enfermedades', headerShown: false}}
                            
                />
                
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
