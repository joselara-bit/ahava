import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Icon } from 'react-native-elements'

export default function LinkCampainFacebook({navigation}) {
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Obtener link de tu página de Facebook</Text>
            
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
            
            <Text style={styles.subtitle}>Entra a la aplicación preinstalada de Facebook</Text>
                <Image 
                    source={require("../../assets/F1.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>2º Paso</Text>
            
            <Text style={styles.subtitle}>Dale click al 4to ícono de la pantalla inicial (Ícono de una bandera).</Text>
                
                <Image 
                    source={require("../../assets/F2.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>3º Paso </Text>
            
            <Text style={styles.subtitle}>Desliza horizontalmente en el menú que está abajo del nombre de tu página.</Text>
               
                <Image 
                    source={require("../../assets/F3.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />

            <Text style={styles.step}>4º Paso</Text>
            
            <Text style={styles.subtitle}>Sigue deslizando horizontalmente, y toca el último botón, con el título "Más".</Text>
                <Image 
                    source={require("../../assets/F4.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>5º Paso</Text>
            
            <Text style={styles.subtitle}>Desliza hacia abajo hasta llegar hasta llegar a la sección con el título "Amplía tu público".</Text>
                <Image 
                    source={require("../../assets/F5.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>6º Paso </Text>
            
            <Text style={styles.subtitle}>Dale click al botón con el título "Copiar enlace de la página".</Text>
                <Image 
                    source={require("../../assets/F6.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>7º Paso </Text>
            
            <Text style={styles.subtitle}>El enlace se te copiará automáticamente en el portapapeles.</Text>
                <Image 
                    source={require("../../assets/F7.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
            <Text style={styles.step}>8º Paso</Text>
            
            <Text style={styles.subtitle}>Ve a Ahavá y copia el enlace en la casilla "Pon aquí el link de tu página de Facebook (opcional): "{`\n`}{`\n`}Sólo deja presionado en la entrada de texto, y te aparecerá la opción "Pegar", le picas a dicho botón, y el enlace de tu página de Facebook se copiará exitósamente.</Text>
                <Image 
                    source={require("../../assets/F8.jpeg")}  
                    resizeMode="contain"   
                    style={styles.image}  
                />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   

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

    view: {
        backgroundColor: "#FFF"
    },

    icon: {
        top: -25,
    },
})
