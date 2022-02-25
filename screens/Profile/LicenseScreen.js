import { map } from 'lodash'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, ScrollView, Share, Linking } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function ProfileOptions({ user, toastRef, setReloadUser, }) {
    
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)

    const navigation = useNavigation()

    const generateOptions = () => {
        return[

            {
                title: "@react-native-community/checkbox",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("checkbox")
            },

            {
                title: "@react-native-masked-view/masked-view",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("maskedview")
            },

            {
                title: "@react-navigation/bottom-tabs",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("bottom-tabs")
            },

            {
                title: "@react-navigation/drawer",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("drawer")
            },

            {
                title: "@react-navigation/material-bottom-tabs",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("material-bottom-tabs")
            },

            {
                title: "@react-navigation/native",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("native")
            },

            {
                title: "@react-navigation/stack",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("stack")
            },

            {
                title: "expo",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo")
            },

            {
                title: "expo-checkbox",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("checkbox")
            },

            {
                title: "expo-google-sign-in",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("google-sign-in")
            },

            {
                title: "expo-image-picker",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-image-picker")
            },

            {
                title: "expo-linking",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-linking")
            },

            {
                title: "expo-location",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-location")
            },

            {
                title: "expo-notifications",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-notifications")
            },

            {
                title: "expo-permissions",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-permissions")
            },

            {
                title: "expo-status-bar",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("expo-status-bar")
            },

            {
                title: "firebase",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("firebase")
            },
            
            {
                title: "firesql",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("firesql")
            },

            {
                title: "random-uuid-v4",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("randomuuidv4")
            },

            {
                title: "react",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react")
            },

            {
                title: "react-dom",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-dom")
            },

            {
                title: "react-native",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native")
            },

            {
                title: "react-native-country-picker-modal",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-country-picker-modal")
            },

            {
                title: "react-native-easy-toast",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-easy-toast")
            },

            {
                title: "react-native-elements",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-elements")
            },

            {
                title: "react-native-gesture-handler",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-gesture-handler")
            },

            {
                title: "react-native-keyboard-aware-scroll-view",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-keyboard-aware-scroll-view")
            },

            {
                title: "react-native-maps",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-maps")
            },

            {
                title: "react-native-open-maps",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-open-maps")
            },

            {
                title: "react-native-paper",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-paper")
            },

            {
                title: "react-native-reanimated",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-reanimated")
            },

            {
                title: "react-native-safe-area-context",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-safe-area-context")
            },

            {
                title: "react-native-screens",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-screens")
            },

            {
                title: "react-native-snap-carousel",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-snap-carousel")
            },
            {
                title: "react-native-swiper",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-swiper")
            },

            {
                title: "react-native-vector-icons",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-vector-icons")
            },

            {
                title: "react-native-web",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("react-native-web")
            },

            {
                title: "redux",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("redux")
            },

            {
                title: "redux-saga",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("redux-saga")
            },

            {
                title: "node.js",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("nodejs")
            },

           
        ]
    }

    const menuOptions = generateOptions()

    return (
        <ScrollView>

        <Text style={styles.title}>Licencias</Text>

        <Text style={styles.text}>Para la realización de este proyecto hicimos uso de diferentes librerías de desarrollo de código abierto.{'\n'} {'\n'}Agradecemos a todos los desarrolladores que publicaron estas librerías para uso público y privado.{'\n'}{'\n'}En esta pantalla se exponen las diferentes librerías que utilizamos y sus respectivas licencias.</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            {
                map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type="material-community"
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type="material-community"
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />

                    </ListItem>
                ))
            }

            <FlatList>
                
            </FlatList>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#c1c1c1c1"
    },

    title: {
        color: "#F41635",
        fontSize: 40, 
        fontWeight: "bold",
        marginLeft: 76,
        marginTop: 40,
        marginBottom: -95,
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 110,
        fontSize: 15,
        marginBottom: -45,
    },

    icon: {
        bottom: 210,
        right: -3,
    },


})
