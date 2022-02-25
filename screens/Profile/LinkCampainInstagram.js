import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Icon } from 'react-native-elements'

export default function LinkCampainInstagram({navigation}) {
    return (
        <ScrollView style={styles.view}>
            <Text style={styles.title}>Obtener link de tu cuenta de Instagram</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />
            <Text style={styles.step}>1º Paso </Text>
            
            <Text style={styles.subtitle}>Entra a la aplicación preinstalada de Instagram</Text>
                <Image 
                    source={require("../../assets/I1.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>2º Paso </Text>
            
            <Text style={styles.subtitle}>Dale click al 5to ícono inferior (ícono con la foto de tu perfil).</Text>
                <Image 
                    source={require("../../assets/I2.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>3º Paso</Text> 
            
            <Text style={styles.subtitle}>Da click al ícono superior derecho de la líneas horizontales.</Text>
                <Image 
                    source={require("../../assets/I3.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>4º Paso</Text>
            
            <Text style={styles.subtitle}>Da click al botón de la tuerca, con el nombre "Configuración".</Text>
                <Image 
                    source={require("../../assets/I4.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>5º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al primer ícono de la persona y un signo de suma, con el nombre "Seguir e invitar a amigos".</Text>
                <Image 
                    source={require("../../assets/I5.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>6º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al último, con el nombre "Invitar amigos por...".</Text>
                <Image 
                    source={require("../../assets/I6.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>7º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al ícono titulado "Copiar al portapapeles".</Text>
                <Image 
                    source={require("../../assets/I7.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>8º Paso</Text>
            
            <Text style={styles.subtitle}>Ve a Ahavá y copia el enlace en la casilla "Pon aquí el link de tu cuenta de Instagram (opcional): "{`\n`}{`\n`}Sólo deja presionado en la entrada de texto, y te aparecerá la opción "Pegar", le picas a dicho botón, y el enlace de tu cuenta de Instagram se copiará exitósamente.</Text>
                <Image 
                    source={require("../../assets/I8.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>9º Paso</Text>
            
            <Text style={styles.subtitle}>Solamente borra las palabras que no formas parte del enlace. Tu enlace debe de empezar con https://</Text>
                <Image 
                    source={require("../../assets/I9.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 15,
        color: "black",
        marginTop: 10,
    },

    subtitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        marginLeft: 15,
        marginTop: 15,
    },

    image: {
        height: 400,
        width: "60%",
        marginLeft: 15,
        marginTop: 15,
    },

    view: {
        backgroundColor: "#FFF"
    },

    title: {
        color: "#F41635",
        fontSize: 40, 
        fontWeight: "bold",
        marginLeft: 76,
        marginTop: 40,
        marginBottom: -80,
    },

    step: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#F41635",
        marginLeft: 15,
        marginTop: 15,
    },

    subtitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "grey",
        marginLeft: 15,
        marginTop: 15,
    },

    icon: {
        top: -25,
    },
})
