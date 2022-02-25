import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Icon } from 'react-native-elements'

export default function LinkCampainLinkedin({navigation}) {
    return (
        <ScrollView style={styles.view}>
            <Text style={styles.title}>Obtener link de tu perfil de Linkedin</Text>
            
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
            
            <Text style={styles.subtitle}>Entra a la aplicación preinstalada de Linkedin</Text>
                <Image 
                    source={require("../../assets/L1.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>2º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al ícono superior izquierdo, el cual contiene la foto de tu perfil.</Text>
                <Image 
                    source={require("../../assets/L2.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>3º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al botón con el título "Ver Perfil", el cual está a un lado de tu nombre de perfil.</Text>
                <Image 
                    source={require("../../assets/L3.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>4º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al botón con 3 puntos en vertical.</Text>
                <Image 
                    source={require("../../assets/L4.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>5º Paso</Text>
            
            <Text style={styles.subtitle}>Da click al segundo botón, con el título "Compartir perfil por...".</Text>
                <Image 
                    source={require("../../assets/L5.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>6º Paso </Text>
            
            <Text style={styles.subtitle}>Da click al botón con el título "Copiar al portapapeles". El enlace se copiará automáticamente en tu portapapeles.</Text>
                <Image 
                    source={require("../../assets/L6.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>7º Paso </Text>
            
            <Text style={styles.subtitle}>Ve a Ahavá y copia el enlace en la casilla "Pon aquí el link de tu perfil de Linkedin (opcional): "{`\n`}{`\n`}Sólo deja presionado en la entrada de texto, y te aparecerá la opción "Pegar", le picas a dicho botón, y el enlace de tu perfil de Linkedin se copiará exitósamente.</Text>
                <Image 
                    source={require("../../assets/L7.jpeg")}  
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
        top: -28,
    },
})
