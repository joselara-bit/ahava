import React, { useState } from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar,Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'
import { updateProfile, uploadImage } from '../../utils/Actions'
import { loadImageFromGallery } from '../../utils/Helpers'

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import * as firebase from 'firebase'
import 'firebase/firestore'

export default function InfoUser({ user, setLoading, setLoadingText }) {
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)
    const navigation = useNavigation()
    const changePhoto = async() => {
        const result = await loadImageFromGallery([1, 1])
        if(!result.status) {
            return
        }
        setLoadingText("Cambiando foto de perfil...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image, "avatars", user.uid)
        if (!resultUploadImage.statusResponse) {
            setLoading(false)
            Alert.alert("Ha ocurrido un error al almacenar tu foto de perfil")
        }
        const resultUpdateProfile = await updateProfile({ photoURL: resultUploadImage.url })
        setLoading(false)
        if (resultUpdateProfile.statusResponse) {
            setPhotoUrl(resultUploadImage.url)
        } else {
            Alert.alert("No se pudo subir tu foto de perfil")
        }
    }
    
    return (
        <View style={styles.container}>
            <Icon
                  type="entypo"
                  name="menu"
                  color="#F41635"
                  size={25}
                  containerStyle={styles.drawerIcon}
                  onPress= {() => navigation.openDrawer()}
              />
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                containerStyle={{ left: 20 }}
                source={
                    photoUrl
                        ? { uri: photoUrl}
                        : require("../../assets/avatar-default.jpg")
                }
            />
            <View style={styles.infoUser}>
                <Text style={styles.displayName}>
                    {
                        user.displayName 
                    }
                </Text>
                <Text>{user.email}</Text>
            </View>
        </View>
        )   
    }

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30,
        left: -30,
    },

    infoUser: {
        marginLeft: 30,
    },

    displayName: {
        fontWeight: "bold",
        paddingBottom: 5,
        fontSize: 15,
    },

    drawerIcon: {
        left: 10,
        top: -35,
      
    },
})

