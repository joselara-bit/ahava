import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default function ComplaintsScreen({ navigation }) {
    
    const handleEmailPress = async () => {
        await Linking.openURL("mailto:quejas@ahava.one?subject=Tengo una queja con Ahavá&body=Redacta aquí tu queja con Ahavá...")
    };
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Quejas</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. Vemos que tienes quejas con Ahavá.{'\n'} {'\n'}Decide la forma en la que quieres exponer tu queja ante nosotros:{'\n'} {'\n'}- Correo electrónico (tiempo de espera aproximado: 12 horas).{'\n'} {'\n'}Nos vemos !!! No olvides ayudar a los demás ;)</Text>

            <Text style={styles.supportEmail}>Emitir mi queja por Correo Electrónico</Text>

            <Icon
                    type="ionicon"
                    name="mail-outline"
                    color="#f84437"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleEmailPress}
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
        marginTop: 35,
    },

    icon: {
        bottom: -35,
        right: -3,
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },

    supportEmail: {
        marginLeft: 114,
        marginTop: 20,
        color: "grey",
    },
})
