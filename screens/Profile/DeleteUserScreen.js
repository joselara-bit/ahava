import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default function DeleteUserScreen({ navigation }) {
    
    const handleEmailPress = async () => {
        await Linking.openURL("mailto:eliminarusuario@ahava.one?subject=Eliminar Usuario&body=Escribe aquí el nombre de tu usuario:\n\nEscribe aquí la razón por la que quieres eliminar tu usuario:")
    };
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Eliminar Usuario</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. Vemos que quieres eliminar tu usuario.{'\n'} {'\n'}Por favor, mándanos un correo electrónico, explicándonos la razón por la que quieres eliminar tu usuario. {'\n'} {'\n'}¿Por qué hacemos esto?{'\n'} {'\n'}Para asegurarnos de que cumplimos nuestro propósito de ayudarte, y si no fue así; para poder hacer los cambios pertinentes en la plataforma, y lograr que todas las personas registradas en Ahavá estén contentas utilizando la aplicación.{'\n'} {'\n'}Disculpa las molestias que pueda ocasionar esta acción, seguimos trabajando por tu bienestar.{'\n'} {'\n'}Nos vemos !!! No olvides ayudar a los demás ;)</Text>

            <Text style={styles.supportEmail}>Enviar Correo Electrónico</Text>

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
        bottom: -12,
        right: -3,
    },

    supportEmail: {
        marginLeft: 194,
        marginTop: 20,
        color: "grey",
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },
})
