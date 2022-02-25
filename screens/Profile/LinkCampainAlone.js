import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Icon } from 'react-native-elements'

export default function LinkCampain({navigation}) {
    return (
        <ScrollView style={styles.view}>
            <Text style={styles.title}>Obtener link de una página web</Text>
            
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
            
            <Text style={styles.subtitle}>Vamos a Google Chrome (O el buscador de tu preferencia)</Text>

                <Image 
                    source={require("../../assets/google.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>2º Paso </Text>
            
            <Text style={styles.subtitle}>Digita el nombre de la página en la que se encuentra tu campaña.</Text>
                
                <Image 
                    source={require("../../assets/search.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>3º Paso </Text>
            
            <Text style={styles.subtitle}>Ya dentro de la página de tu campaña (la que se muestra en la imagen es sólo un ejemplo) dejamos presionado el link que aparece en la parte superior de la pantalla, el cual es el de tu campaña. O también puede aparecerte un botón de "Compartir", como en la imagen. Depende del dispositivo que estés ocupando.</Text>
                
                <Image 
                    source={require("../../assets/page.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>4º Paso </Text>
            
            <Text style={styles.subtitle}>Toca el botón "Copiar al portapapeles".</Text>
               
               <Image 
                    source={require("../../assets/paste.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>5º Paso</Text>
            
            <Text style={styles.subtitle}>Vamos a Ahavá y copiamos el enlace en la casilla "Pon aquí el link de tu campaña para donarte dinero (opcional): ".</Text>
               
                <Image 
                    source={require("../../assets/copy.jpeg")}  
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
})
