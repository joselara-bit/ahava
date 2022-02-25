import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView, Linking } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/ahava(1).png")}
                resizeMode="contain"
                style={styles.image}
            />

            <Text style={styles.title}>¡Regístrate en Ahavá!</Text>
            <Text style={styles.description}>Encuentra en Ahavá la manera de ayudar a los demás, ya sea donando sangre o donando recursos económicos a personas que lo necesiten.</Text>
            <Text style={styles.description}>Si necesitas ayuda, sólo regístrate y sube tu campaña a nuestra plataforma, nosotros nos encargaremos de ayudarte a salvar tu vida. Ánimo !!!</Text>
            <Text style={styles.description}>Nota: Sólo registra tu usuario si quieres publicar una campaña. Si sólo deseas buscar gente para donar sangre o dinero, no te registres. Muchas gracias por tu comprensión.</Text>
            
            <Privacy/>
            <Terms/>

            <Button
                buttonStyle={styles.button}
                title="Iniciar Sesión"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                buttonStyle={styles.buttonRegister}
                title="Regístrate"
                onPress={() => navigation.navigate("Registro")}
            />

        
        <Divider style={styles.divider}/>

        </ScrollView>
    )
}

function Privacy(props) {

    const terms = async() => {
        await Linking.openURL("https://ahavaone.web.app/terms")
    };
    return(
        <Text 
            style={styles.register}
            onPress={terms}
        >
            Da click aquí para leer el{" "}
            <Text style={styles.btnRegister}>
                Aviso de Privacidad
            </Text>
        </Text>
    )
}

function Terms(props) {
    const privacy = async () => {
        await Linking.openURL("https://ahavaone.web.app/privacy")
    };
    return(
        <Text 
            style={styles.terms}
            onPress={privacy}
        >
            Da click aquí para leer los {" "}
            <Text style={styles.btnTerms}>
                Términos y Condiciones
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        backgroundColor: "#fff",
        marginHorizontal: 0,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 20,
        marginVertical: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: -70,
        marginBottom: 80,
        textAlign: "center",
        color: "#F41635",

    },
    description: {
        textAlign: "justify",
        marginVertical: -50,
        marginBottom: 70,
        color: "#F41635",
        left: 10,
        marginRight: 20,
    },
    button: {
        backgroundColor: "#F41635",
        marginHorizontal: 30,
        borderRadius: 10,
    },

    buttonRegister: {
        backgroundColor: "#F41635",
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },

    register: {
        marginTop: -40,
        marginBottom: 50,
        marginHorizontal: 10,
        alignSelf: "center",
        color: "#F41635",
        fontSize: 15,
    },

    btnRegister: {
        color: "#F41635",
        fontWeight: "bold"
    },

    terms: {
        marginTop: -40,
        marginBottom: 30,
        marginHorizontal: 10,
        alignSelf: "center",
        color: "#F41635",
        fontSize: 15,
    },

    btnTerms: {
        color: "#F41635",
        fontWeight: "bold"
    },

    divider: {
        backgroundColor: "#F41635",
        margin: 40,
    },

})
