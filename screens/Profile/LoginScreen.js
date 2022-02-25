import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Image } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginForm from '../../components/Profile/LoginForm'

export default function LoginScreen() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.view}>

            <Image
                source={require("../../assets/ahava(1).png")}  
                resizeMode="contain"   
                style={styles.image}       
            />

            <Text style={styles.title}>Iniciar Sesión</Text>

            <Icon 
                    type="ionicon"
                    name="chevron-back"
                    color="#F41635"
                    size={25}
                    raised
                    containerStyle={styles.icon}
                    onPress={() => navigation.goBack()}
                />
        
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount/>
                <RecoverPassword/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function RecoverPassword() {
    const navigation = useNavigation()

    return (
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("Recuperar Contraseña")}
        >
            ¿Olvidaste tu contraseña?{" "}
            <Text 
                style={styles.btnRecover}
                onPress={() => navigation.navigate("Recuperar Contraseña")}
        >
                Recupérala{" "} 
            </Text>
        </Text>
    )
}

function CreateAccount(props) {
    const navigation = useNavigation()
    return(
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("Registro")}
        >
            ¿No tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF"
    },

    image: {
        height: 300,
        width: "101%",
        marginBottom: -95,
        marginVertical: -50,
        marginTop: 10,
        marginLeft: -3,
        top: 25,
    },

    container: {
        marginHorizontal: 40,
        marginTop: 35,
        bottom: -5,
    },

    divider: {
        backgroundColor: "#F41635",
        margin: 40,
    },

    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center",
        color: "#F41635",
    },

    btnRegister: {
        color: "#F41635",
        fontWeight: "bold"
    },

    btnRecover: {
        color: "#F41635",
        fontWeight: "bold",
        marginTop: -50,
    },

    text: {
        color: "#F41635",
        fontWeight: "bold",
        marginTop: 12
    },

    icon: {
        marginTop: -60,
        bottom: 105,
        marginLeft: 20,
    },

    title: {
            fontSize: 30,
            fontWeight: "bold",
            color: "#F41635",
            bottom: 120,
            marginLeft: 80,
            marginRight: 10,
            marginTop: -45,
            left: 10,
        },

})