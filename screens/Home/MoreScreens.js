import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import navigation from '@react-navigation/native'
import { Icon } from 'react-native-elements'

export default function MoreScreens({ navigation }) {
    
    const handleEmailPress = async () => {
        await Linking.openURL("mailto:campañaespecial@ahava.one?subject=Emitir Solicitud para tener Campaña Urgente de Apoyo Económico&body=Hola, qué tal !! Quiero emitir mi solicitud para que mi Campaña sea Urgente.\n\nEscribe aquí tu nombre completo...\n\nUna descripción de tu persona para que te ayuden...\n\nLa ciudad y municipio en el que radicas...\n\nEl hospital en dónde te encuentras para que vayan a donarte sangre...\n\nEscribe aquí tu número telefónico...\n\nPara ti, querido solicitante: No te preocupes. Tus problemas serán solventados y resueltos por la Gloria de Dios. ")
    };

    const handleWhatsappPress = async() => {
        await Linking.openURL("https://wa.me/+525525564336/?text=Hola, qué tal !! Quiero emitir mi solicitud para que mi Campaña sea Urgente en el área de Apoyo Económico.\n\nPara ti, querido solicitante: Dios protege de ti, de tu salud y de tu vida. Ánimo !!! Bendiciones !!!")
    };
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Emitir Solicitud</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. En esta pantalla podrás emitir una solicitud para estar en las Campañas Urgentes que hay en Ahavá, las cuales necesitan atención especial y personalizada.{'\n'} {'\n'}</Text>

            <Text style={styles.subtext}>Si quieres que tu campaña sea Urgente, mándanos mensaje por la vía de tu preferencia:</Text>

            <Text style={styles.supportEmail}>Emitir solicitud por Correo Electrónico</Text>

            <Icon
                    type="ionicon"
                    name="mail-outline"
                    color="#f84437"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleEmailPress}
                />

            <Text style={styles.support}>Emitir solicitud por Whatsapp</Text>

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
        backgroundColor: "#FFFF"
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

    subtext: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: -20,
        fontSize: 15,
    },

    button: {
        backgroundColor: "#F41635",
        borderRadius: 40,
        alignSelf: "center",
        paddingVertical: 10,
        marginTop: -60,
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

    btnCloseSession: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: -8,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 12,
        marginTop: -12,
        marginVertical: 45,

    },
})
