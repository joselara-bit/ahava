import React, { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    Modal,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import RegisterForm from '../../components/Profile/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements'

import CheckBox from '@react-native-community/checkbox'

import text from './text'
import termstext from './termstext'

export default function RegisterScreen({ navigation }) {

    return (
        <KeyboardAwareScrollView style={styles.view}>
            <Image
                source={require("../../assets/ahava(1).png")}  
                resizeMode="contain"   
                style={styles.image}       
            />

            <Text style={styles.title}>Regístrate</Text>

            <Icon 
                    type="ionicon"
                    name="chevron-back"
                    color="#F41635"
                    size={25}
                    raised
                    containerStyle={styles.icon}
                    onPress={() => navigation.goBack()}
                />

            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
        flex: 1,
        
    },

    image: {
        height: 300,
        width: "102%",
        marginBottom: -50,
        marginVertical: -60,
        marginTop: 20,
        left: -3,
        top: 3,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#F41635",
        bottom: 120,
        marginLeft: 80,
        marginRight: 10,
        marginTop: -65,
        left: 10,
        top: -160,
    },

    icon: {
        marginTop: -60,
        bottom: 106,
        marginLeft: 20,
        top: -145
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, 0.6)'
    },

    modalView: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        margin: 20,
        padding: 12,
        alignItems: "center",
    },

    modalComplianceTitle: {
        marginBottom: 10,
        color: '#F41635',
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
    },

    checkBoxContainer: {
        flexDirection: "row",
        marginVertical: 30,
        alignItems: 'center',
    },

    checkBox: {
        width: 30,
        height: 30,
        marginRight: 20,
        color: "#F41635"
    },

    checkAgeBox: {
        width: 30,
        marginTop: -60,
        height: 30,
        marginRight: 20,
        color: "#F41635"
    },

    continueBotton: {
        marginTop: -5,
        padding: 20,
        borderRadius: 18,
    }
})
