import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import navigation from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function BankScren({ navigation }) {

    const handlePaypalPress = async() => {
        await Linking.openURL("https://www.paypal.com/paypalme/donacionesahava")
    };
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Transferencia Bancaria</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. Nos da muchísimo gsto que nos quieras apoyar económicamente. Te informamos que tus donaciones se usarán en los siguientes aspectos:{'\n'}{'\n'}- Fortalecer y renovar sistemas informáticos, como el Software.{'\n'} {'\n'}- Mejorar la seguridad de tus datos personales.{'\n'} {'\n'}- Mantener la plataforma estable.{'\n'} {'\n'}- Mejorar la seguridad de tus Datos Perosnales.{'\n'} {'\n'}- Mantener los servidores de la plataforma.{'\n'} {'\n'}</Text>

            <Text style={styles.bankText}>Banco BBVA Bancomer{'\n'}{'\n'}Nombre: José Lara Casillas{'\n'}{'\n'}No. de Tarjeta: 4152 3138 2495 8826{'\n'}{'\n'}No. de Cuenta: 156 659 9653{'\n'}{'\n'}CLABE INTERBANCARIA: 012180015665996533{'\n'}{'\n'} </Text>

            <Text style={styles.text}>Nos vemos !!! No olvides ayudar a los demás ;)</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
    },

    title: {
        color: "#F41635",
        fontSize: 40, 
        fontWeight: "bold",
        marginLeft: 84,
        marginTop: 40,
        marginBottom: -95,
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45,
        fontSize: 15,
    },

    bankText: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -40,
        fontSize: 15,
        fontWeight: "bold",
    },

    button: {
        backgroundColor: "#F41635",
        borderRadius: 40,
        alignSelf: "center",
        paddingVertical: 10,
        marginTop: -40,
    },

    icon: {
        bottom: -15,
        right: -3,
    
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },

    support: {
        marginLeft: 190,
        marginTop: 20,
        color: "grey",
    },

    supportEmail: {
        marginLeft: 180,
        marginTop: 20,
        color: "grey",
    },
})
