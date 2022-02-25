import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Icon, Button} from 'react-native-elements'

export default function DataProtection({ navigation }) {
    return (
        <ScrollView style={styles.view}>

            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.title}>¿Cómo protegemos tus datos?</Text>
            
            <Text style={styles.subtitle}>Nosotros nos tomamos muy en serio la privacidad de usted, y la protección de sus datos.{'\n'} {'\n'}Aquí un claro ejemplo:</Text>
            
            <Text style={styles.example}>Utilizamos la base de datos que utiliza Google</Text>
            
            <Text style={styles.text}>La base de datos que utilizamos se llama Firestore Database, y es conocida mundialmente por su alta seguridad y eficacia en la protección de los datos de los usuarios. Está desarrollada y administrada por la empresa Google, y la utiliza en sus servicios como: Youtube, Google Drive, Google Maps, entre otros, los cuales avalan su eficacia.</Text>
            
            <Text style={styles.example}>Estamos comprometidos</Text>
            
            <Text style={styles.text}>Estamos comprometidos en la protección de tus datos, es por eso que nadie puede acceder a la base de datos sin el permiso de alguien del equipo administrativo de Ahavá. Asimismo, la base de datos está protegida ante ataques fraudulentos y hackeos.</Text>

            <Text style={styles.example}>Utilizamos el servidor de Google</Text>
            
            <Text style={styles.text}>Usamos el servidor Firebase, para el alojamiento de la base de datos y de la aplicación. Lo que convierte a la plataforma Ahavá en una aplicación muy segura y confiable para la protección de los datos de sus usuarios.</Text>

            <Text style={styles.example}>Usted es el único dueño de sus datos</Text>

            <Text style={styles.text}>Usted es el único dueño de sus datos, es por eso que usted puede eliminar,editar y revocar sus datos de la plataforma para que nosotros ya no hagamos un tratamiento de los mismos. Nosotros inmediatamente dejaremos de poseer sus datos en el momento que usted lo indique. Favor de leer el Aviso de Privacidad, para profundizar más en los derechos ARCO de sus datos personales.</Text>  
            
            <Text style={styles.example}>No compartimos, ni vendemos sus datos a nadie</Text>

            <Text style={styles.text}>De ninguna manera vendemos, ni compartimos sus datos personales a nadie. Únicamente compartimos sus datos personales con las personales que quieran ver su perfil con el único fin de ayudarle en su campaña (de sangre, o apoyo económico), lo cual, usted lo acepta al momento de leer y aceptar el  
            
            <Text 
                style={styles.btnRecover}
                onPress={() => navigation.navigate("Privacy")}
        >
                {" "}Aviso de Privacidad
            </Text> y 
            
            <Text 
                style={styles.btnRecover}
                onPress={() => navigation.navigate("Terms")}
        >
                {" "}Términos y Condiciones
            </Text> de la plataforma. Usted lee y acepta los dichos documentos al momento de registrar su usuario, y de publicar su campaña de sangre, o apoyo económico.
            
            </Text>    

            <Text style={styles.notes}>Para leer los dichos documentos, solo pique al nombre del documento pintado de rojo, y lo dirigirá a la pantalla correspondiente.</Text>
            
            <Text style={styles.ahava}>Y recuerda. Ahavá nació por ti, y para ti. Con el único fin de ayudarte a cumplir tus sueños, y salvar tu vida.</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF",
    },
    
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#F41635",
        marginBottom: 15,
        marginLeft: 80,
        marginRight: 10,
        marginTop: -30,
    },

    subtitle: {
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    },

    example: {
        fontSize: 19,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        color: "#F41635"
    },

    text: {
        color: "grey",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    },

    ahava: {
        marginLeft: 10,
        marginRight: 10,
        color: "#F41635",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
    },

    icon: {
        bottom: -35,
        right: -3,
    },
    
    btnRecover: {
        color: "#F41635",
        fontWeight: "bold",
        fontSize: 15
    },

    notes: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
    },

})