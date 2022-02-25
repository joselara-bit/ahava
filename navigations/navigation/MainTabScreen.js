import React from 'react'
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import HomeStackScreen from './HomeStackScreen'
import MoneyStackScreen from './MoneyStackScreen'
import PKUStackScreen from './PKUStackScreen'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "HomeScreen":
                iconName = "blood-bag"
                break;
            case "MoneyScreen":
                iconName = "cash-multiple"
                break;
            case "PKU":
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
                initialRouteName="HomeScreen"
                screenOptions={({ route }) => ({
                    tabBarInactiveTintColor: "#808080",
                    tabBarActiveTintColor: "#F41635",
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    
                })}>

                <Tab.Screen
                    name="HomeScreen"
                    component={HomeStackScreen}
                    options={{headerShown: false, title: 'Donar Sangre'}}
                    />      
                
                {/* <Tab.Screen
                    name="MoneyScreen"
                    component={MoneyStackScreen} 
                    options={{ title: 'Donar Dinero', headerShown: false}}
                            
                /> */}

                <Tab.Screen
                    name="PKU"
                    component={PKUStackScreen} 
                    options={{ title: 'PKU y otras Enfermedades', headerShown: false}}
                            
                />
                
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
