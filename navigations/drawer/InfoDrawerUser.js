import React, { useState } from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import { updateProfile, uploadImage } from '../../utils/Actions'
import { loadImageFromGallery } from '../../utils/Helpers'

import * as firebase from 'firebase'
import 'firebase/firestore'

export default function InfoDrawerUser({ user, setLoading, setLoadingText}) {
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)
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
        <DrawerContentScrollView style={{ paddingVertical: 30 }}>
            <View style={{ marginLeft: 20, marginVertical: 40 }}>
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                source={
                    photoUrl
                        ? { uri: photoUrl}
                        : require("../../assets/avatar-default.jpg")
                }
            />
            <View style={{ marginLeft: 20, marginVertical: 40 }}>
                <Text style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 13,
                        marginTop: 10,
                    }}>
                    {
                        user.displayName 
                    }
                </Text>
                <Text style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 13,
                        marginTop: 10,
                    }} >{user.email}</Text>
            </View>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        )   
    }

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30,
    },

    infoUser: {
        marginLeft: 20,
    },

    displayName: {
        fontWeight: "bold",
        paddingBottom: 5,
    }
})

