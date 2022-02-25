import React, { useRef, useState } from 'react'
import { StyleSheet, 
    Text, 
    View, 
    Image, 
    Linking, 
    SafeAreaView, 
    Button, 
    Modal,
    TouchableOpacity,
    ScrollView } from 'react-native'
import PostPKUForm from '../../components/Doctors/PostPKUForm'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import CheckBox from '@react-native-community/checkbox'

import text from './text'
import termstext from './termstext'

export default function PostPKUCampain({ navigation }) {
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    const [toogleCheckBox, setToogleCheckBox] = useState(false);
    const [termsToogleCheckBox, setTermsToogleCheckBox] = useState(false);
    const [complianceModal, setComplianceModal] = useState(true);
    const [termsComplianceModal, setTermsComplianceModal] = useState(true);

    return (
        <KeyboardAwareScrollView>
            <Text style={{ color: "#F41635", fontSize: 32, fontWeight: "bold", marginLeft: 80, marginTop: 35, marginBottom: -45, }}>Publicar Campaña de PKU o Enfermedades poco conocidas</Text>
        <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />
            <PostPKUForm 
                toastRef={toastRef} 
                setLoading={setLoading}
                navigation={navigation}
            />

            <Loading isVisible={loading} text="Publicando Campaña..."/>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
        top: -60,
        right: -3,
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
        margin: 30,
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

    checkHospitalBox: {
        width: 30,
        marginTop: -100,
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