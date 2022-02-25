import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import { updateProfile, uploadImage } from '../../utils/Actions'
import { loadImageFromGallery } from '../../utils/Helpers'

import * as firebase from 'firebase'
import 'firebase/firestore'

import COLORS from '../../assets/colors/Colors';

export function DrawerContent(props) {

    return(
        <DrawerContentScrollView style={{ paddingVertical: 30 }}>
            <View style={{ marginLeft: 20, marginVertical: 40 }}>
                <Image
                    style={{ height: 70, width: 70, borderRadius: 20 }}
                    source={
                       require("../../assets/ahava(1).png")
                    }
                    
                />
                <Text
                    style={{
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginTop: 30,
                        marginBottom: -20,
                    }}
                >Te damos la Bienvenida a Ahavá !!!</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}