import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Ahava({ navigation }) {
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.name}>Acerca de Ahavá</Text>

            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />
            
            <Text style={styles.title}>¿Qué es Ahavá?</Text>
            
            <Text style={styles.text}>Ahavá nace por la necesidad de adquirir donantes de sangre, y apoyo económico para pagar costosos procesos quirúrgicos, y poder salvar la vida de la persona.{'\n'} {'\n'}Ahavá nace por la preocupación de salvar vidas, mediante el altruismo y apoyo de la sociedad mexicana. De igual forma, Ahavá es sin fines de lucro.</Text>
    
            <Text style={styles.title}>¿Qué significa Ahavá?</Text>

            <Text style={styles.text}>Ahavá proviene del hebreo, y significa: amor, amistad y dar.{'\n'} {'\n'}El hebreo es el actual idioma de la ciudad de Jerusalén, aquella tierra en donde el Hijo de Dios, Jesús, obró milagros y sanó enfermos; asimismo, de salvarnos a todos nosotros en la cruz.{'\n'} {'\n'}Ahavá nace con el ejemplo y enseñanzas que vino a darnos y recordarnos el Maestro, que es el amar al prójimo. Amar significa dar, es por eso que Ahavá da vida a todo aquél que lo nececiste. Ahavá da amor y esperanzas a todo aquél que lo necesite. Ahavá da amor a todos.</Text>
       
            <Text style={styles.title}>Ahavá está dedicado a...</Text>
            
            <Text style={styles.text}>Ahavá está dedicado a todos aquellos niños, jóvenes y adultos que han fallecido a causa del cáncer, y falta de medicinas.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que están buscando un trasplante de pulmón.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que están en busca de donantes de sangre.{'\n'} {'\n'}Ahavá está dedicado a los Campeones, los que quieren vivir y triunfar.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que luchan por su vida, y por la vida de los demás.{'\n'} {'\n'}Ahavá está dedicado a niños y personas con autismo, síndrome de down, PKU, etc.{'\n'} {'\n'}Ahavá está dedicado a los soñadores.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que quieren una mejor sociedad.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que quieren un mejor país.{'\n'} {'\n'}Ahavá está dedicado a todos aquellos que quieren cambiar el mundo.{'\n'} {'\n'}Ahavá está dedicado a los que quieren vivir.</Text>
            
            <Text style={styles.title}>Compromiso</Text>

            <Text style={styles.text}>Estamos completamente comprometidos en ayudar a las personas que publiquen campañas, ya sea pidiendo donantes de sangre o apoyo económico. Esto lo lograremos a partir del altruismo y apoyo de la comunidad de Ahavá.</Text>

            <Text style={styles.title}>Misión</Text>

            <Text style={styles.text}>Nuestra misión es ayudar a cuantas personas nos sea posible.</Text>

            <Text style={styles.title}>Visión</Text>

            <Text style={styles.text}>Tener la comunidad altruista más grande del mundo, dentro de 10 años.</Text>

            <Text style={styles.title}>Valores</Text>

            <Text style={styles.text}>Amor, altruismo, solidaridad, amistad, dar, dignidad, empatía, familia, ayudar.</Text>
            
            <Text style={styles.ahava}>Ahavá solo es un camino para salvar tu vida, pero quien está obrando y glorificando tu vida es Dios.</Text>
       
            <Text style={styles.author}>El creador de Ahavá es anónimo...</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF"
    },

    name: {
        color: "#F41635",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 80,
        marginTop: 30,
        marginBottom: 60,
    },  

    title: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#F41635",
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
    },

    text: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 14,
        marginBottom: -5,
        color: "grey",
    },

    ahava: {
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10,
        color: "#F41635",
        marginBottom: 10,
        fontSize: 19,
        marginTop: 20,
    },

    author: {
        fontSize: 12,
        color: "black",
        marginLeft: 10,
        marginBottom: 11,
    },

    icon: {
        marginBottom: 5,
        marginTop: -135,
        right: -3,
    },
})
