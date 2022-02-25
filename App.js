import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { startNotifications } from './utils/Actions';

import MainTabScreen from './navigations/navigation/MainTabScreen'
import MainTabFoundationScreen from './navigations/navigation/MainTabFoundationScreen'
import { DrawerContent } from './navigations/drawer/DrawerContent'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons'

import LocalStackScreen from './navigations/navigation/LocalStackScreen'
import SearchStackScreen from './navigations/navigation/SearchStackScreen'
import ProfileStackScreen from './navigations/navigation/ProfileStackScreen'
import SearchHospitalStackScreen from './navigations/navigation/SearchHospitalStackScreen'

import COLORS from './assets/colors/Colors'

LogBox.ignoreAllLogs()

const Drawer = createDrawerNavigator();

const App = () => {
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    startNotifications(notificationListener, responseListener)
  }, [])

  return (
    <NavigationContainer>
      <Drawer.Navigator 
          screenOptions={{
            headerShown: false,
            drawerType: 'back',
            drawerStyle: {
              width: 200,
              backgroundColor: COLORS.primary
            },
            overlayColor: null,
            drawerActiveTintColor: COLORS.white,
            drawerInactiveTintColor: COLORS.secondary,
            drawerItemStyle: { backgroundColor: null },
            drawerLabelStyle: {
              fontWeight: 'bold',
            }
          }}

          drawerContent={props => <DrawerContent  {...props} />} initialRouteName="Inicio">
        
        <Drawer.Screen 
          name="Inicio" 
          component={MainTabScreen}
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icon name="home" size={25} color={color} />,
        }}>
        
        </Drawer.Screen>

        {/* <Drawer.Screen 
          name="Fundaciones" 
          component={MainTabFoundationScreen}
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icon name="map-marker-radius" size={25} color={color} />,
        }}>
        </Drawer.Screen> */}
        
        <Drawer.Screen 
          name="Búsqueda cercana" 
          component={LocalStackScreen}
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icon name="map-marker-radius" size={25} color={color} />,
        }}>
        </Drawer.Screen>

        <Drawer.Screen 
          name="Buscar Bancos de Sangre" 
          component={SearchHospitalStackScreen}
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icon name="hospital-building" size={25} color={color} />,
        }}>
        </Drawer.Screen>
        
        <Drawer.Screen 
          name="Buscar"
          component={SearchStackScreen} 
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icons name="search-outline" size={25} color={color} />,
        }}>
        </Drawer.Screen>
        
        <Drawer.Screen 
          name="Perfil" 
          component={ProfileStackScreen}
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <Icons name="person-circle-outline" size={25} color={color} />,
          }}>
        </Drawer.Screen>
     
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;