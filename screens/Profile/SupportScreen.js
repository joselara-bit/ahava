import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import navigation from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function SupportScreen({ navigation }) {
    
    const handleEmailPress = async () => {
        await Linking.openURL("mailto:soporte@ahava.one?subject=Comunicarme con Soporte&body=Describe aquí tu problema o duda.")
    };

    const handleWhatsappPress = async() => {
        await Linking.openURL("https://wa.me/+525525564336/?text=Hola, qué tal !! Quiero comunicarme con un miembro de Soporte. Escribe aquí tu duda o problema...")
    };
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Soporte</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. Vemos que tienes problemas o dudas con Ahavá.{'\n'} {'\n'}Decide la forma en la que te quieres comunicar con nosotros:{'\n'} {'\n'}- Correo electrónico (tiempo de espera aproximado: 12 horas).{'\n'} {'\n'}- WhatsApp (tiempo de espera aproximado: 30 minutos).{'\n'} {'\n'}Posteriormente uno de nuestros colaboradores del área de Soporte te atenderá.{'\n'} {'\n'}Nos vemos !!! No olvides ayudar a los demás ;)</Text>

            <Text style={styles.supportEmail}>Contactar al soporte por Correo Electrónico</Text>

            <Icon
                    type="ionicon"
                    name="mail-outline"
                    color="#f84437"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleEmailPress}
                />

            <Text style={styles.support}>Contactar al soporte por Whatsapp</Text>

            <Icon
                    type="ionicon"
                    name="logo-whatsapp"
                    color="#1bd741"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleWhatsappPress}
                />

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
        marginLeft: 76,
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

    button: {
        backgroundColor: "#F41635",
        borderRadius: 40,
        alignSelf: "center",
        paddingVertical: 10,
        marginTop: -40,
    },

    icon: {
        bottom: -35,
        right: -3,
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },

    support: {
        marginLeft: 130,
        marginTop: 20,
        color: "grey",
    },

    supportEmail: {
        marginLeft: 84,
        marginTop: 20,
        color: "grey",
    },
})
