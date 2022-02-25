import React, { useState, useRef, Image } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Loading from '../../components/Loading';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast';
import PKUSlide from './PKUSlide'

const widthScreen = Dimensions.get("window").width

export default function MorePKUScreen() {
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <ScrollView style={styles.viewBody}>
           
           <NameDoctor/>

           <InfoDoctor/>
            
           <UserLinks/>

           <KikeAgreed/>

           <PKUSlide/>

            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text="Espere, porfavor"/>
        </ScrollView>
    )
}


function NameDoctor({ 

}) {
    const navigation = useNavigation()
    return (
        <View style={styles.viewDoctorName}>
            <View style={styles.viewDoctorContainer}>
            <Icon 
                  type="ionicon"
                  name="chevron-back"
                  color="#F41635"
                  size={25}
                  raised
                  containerStyle={styles.icon}
                  onPress= {() => navigation.goBack()}
              />
                <Text style={{fontWeight: "bold", fontSize: 35, color: "#F41635", marginTop: -60, marginRight: 50, marginBottom: 30,}}>PKU o Fenilcetonuria</Text>
            </View>
        
        </View>
    )
}

function InfoDoctor({ 
 
}) {
    return (
        <View style={styles.viewDoctorName}>
            <View style={styles.viewUserAge}>
                <Text style={styles.ageUser}>INTRUDUCCION{'\n'}{'\n'}</Text>


                <Text style={styles.text}>Desde hace años han existido diversas enfermedades durante la historia del ser humano, desde su aparición en el planeta tierra. Unas enfermedades son conocidas y otras no, lo cual hemos visto que aún nos falta mucho camino por recorrer y mucho que aprender. Cada cosa que se descubre en lo genético nos sorprende cada día, por lo cual nos hemos dado cuenta que aún en países como en México no han avanzado mucho como lo ha hecho Europa, por ejemplo, España.{'\n'}{'\n'}</Text>


<Text style={styles.ageUser}>¿Qué es la PKU?{'\n'}{'\n'}</Text>
<Text style={styles.text}>La PKU por sus siglas en inglés, significa phenilketonuria y traducción al español sería fenilcetonuria. Es un transtorno genético que afecta mucho la alimentación y el desarrollo de quién la padece.{'\n'}{'\n'}</Text>


<Text style={styles.ageUser}>¿Como saber y tratar la PKU?{'\n'}{'\n'}</Text>
<Text style={styles.text}>La Fenilcetonuria (PKU) no se puede mitigar ni prevenir, ya que eso depende de la genética de cada persona, pero si se puede saber si el bebé nace con PKU o está sano a través del tamiz neonatal ampliada que consiste en tomar sangre del talón del pie del bebé, posteriormente se ponen las gotas de sangre en el papel filtro gathiere que deberá rellenar los círculos hasta dejarlos totalmente llenos, finalmente son mandadas al laboratorio para analizarlas y días después dar los resultados. Este procedimiento se debe hacer al nacer, ya que el no hacerlo puede causar horribles daños y complicaciones muy serias y afectar el desarrollo del recién nacido.{'\n'}{'\n'} </Text>

<Text style={styles.ageUser}>Síntomas{'\n'}{'\n'}</Text>

<Text style={styles.text}>- Retraso mental.{'\n'}{'\n'}
- Problemas de aprendizaje.{'\n'}{'\n'}
- Signos de autismo.{'\n'}{'\n'}
- Piel clara. {'\n'}{'\n'}
- Cabello güero. {'\n'}{'\n'}
- Ojos claros. {'\n'}{'\n'}
- Olor a ratón mojado. {'\n'}{'\n'}
- Problemas motrices. {'\n'}{'\n'}
- Ataques de convulsión.{'\n'}{'\n'}
- Movimientos involuntarios.{'\n'}{'\n'}
- Los que la padecen suelen atacarse a sí mismos.{'\n'}{'\n'}
- Daño cerebral.{'\n'}{'\n'}
- Problemas intelectuales. {'\n'}{'\n'}
- Depresión (en algunos casos).{'\n'}{'\n'}
- Etcétera.{'\n'}{'\n'}</Text>

<Text style={styles.ageUser}>Historia {'\n'}{'\n'}</Text>
<Text style={styles.text}>En el año de 1944 el noruego famoso científico Asbørn Fölling descubrió la PKU por medio de dos niños que tenían un comportamiento peculear lo cual llamo la atención del científico. Empezó haciendo ciertos experimentos y pruebas a ambos niños y así dando a conocer por primera vez la fenilcetonuria (PKU). De igual forma, dió al mismo tiempo la dieta estricta con muy baja proteína y balanceada.{'\n'}{'\n'}Con el paso de los años fue que crecieron los casos en el mundo sobre todo en Europa principalmente en Turquía dónde cuenta con mayores casos de PKU.{'\n'}{'\n'}


Años después el científico gathiere contribuyo con el caso aportando el papel filtro para muestras de sangre tanto para prueba de phe y tirosina (tyr) la cual ayudaría a futuras generaciones a controlar los niveles de la fenilalanina como de la tirosina. Así mismo controlando la dieta e investigar si ajustar la dieta en caso que salgan mal en las pruebas.{'\n'}{'\n'}</Text>

<Text style={styles.ageUser}>Momentos duros{'\n'}{'\n'}</Text>
<Text style={styles.text}>1- Cómo decirle a los padres del bebé que su hijo tiene una enfermedad incurable y como debe enfrentar la situación.{'\n'}{'\n'}
2- Cuando el niño es diagnóstico tardío, lo cual lo clasificaría como PKU clásico.{'\n'}{'\n'}
3- Cómo decirle a los familiares del paciente, que este murió por falta de medicinas y poco control de la dieta.{'\n'}{'\n'}</Text>

<Text style={styles.ageUser}>Milagros {'\n'}{'\n'}</Text>
<Text style={styles.text}>Personas que  contra todo pronóstico y a pesar de la adversidad lo han logrado todo y que no son menos que los demás, pues valen lo mismo, al igual de ganarse el respeto de la sociedad.{'\n'}{'\n'}</Text>

            </View>
  
        </View>
    )
}


function UserLinks({
 
}) {
    return (
        <View style={styles.viewSocial}>

            <Text style={styles.social}>Frases Motivacionales</Text>

            <Text style={styles.phrasesText}>- Todos unidos contra la adversidad.{'\n'} {'\n'}


- Tú eres tu propio enemigo.{'\n'} {'\n'}


- Si crees en ti lo puedes lograr que nadie, ni nada te detenga. {'\n'} {'\n'}


- Muchos te cuestionarán, otros te odiarán sin razón, otros se burlarán de ti por tener PKU, pero puedes callar bocas. Un PKU es capaz de todo.{'\n'} {'\n'} 

- Si no sufres, no mereces ganar. Sufrir es ganar, no hay dolor, con se gana y si no es así, no es lo que es.{'\n'} {'\n'}
</Text>

            </View>
    )
}

function KikeAgreed({
 
}) {
    return (
        <View style={styles.viewSocial}>

            <Text style={styles.socialGraphics}>Recursos Gráficos</Text>

            </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
       /*  marginBottom: 50 */
    },

    viewDoctorName: {
        padding: 15,
        top: 80,
    },

    viewUserAge: {
        padding: 5,
        marginLeft: -5,
    },

    viewDoctorContainer: {
        flexDirection: "row",
    },

    nameUser: {
        fontWeight: "bold",
        fontSize: 35,
        marginRight: 90,
        top: -25,
    },

    ageUser: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: -30
    },

    rating: {
        position: "absolute",
        right: 0,
        marginTop: 8,
    },

    biographyDoctor: {
        marginTop: 9,
        color: "black",
        textAlign: "justify",
        fontWeight: "bold",
        marginLeft: 1,
    },

    viewDoctorInfo: {
        margin: 15,
        marginTop: 25,
    },

    doctorInfoTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#F41635",
        marginTop: -25
    },

    containerListItem: {
        borderBottomColor: "#F41635",
        borderBottomWidth: 1,
    },

     llicenseDoctor: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 8,
    },

    viewFavorite: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 100,
        padding: 10,
        paddingLeft: 15,
    },

    textArea: {
        height: 50,
        paddingHorizontal: 10, 
    },

    btnSend: {
        backgroundColor: "#F41635"
    },

    btnSendContainer: {
        width: "95%"
    },

    btnSendContainer: {
        width: "95%"
    },

    textModal: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },

    modalContainer: {
        justifyContent: "center",
        alignItems: "center"
    },

    doctorInfoSubtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#F41635",
        fontSize: 15,
    },

    nameUser: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 55,
        marginLeft: 45,
        bottom: -18,
    },

    icon: {
        bottom: 50,
        right: 5,
    },

    social: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        marginTop: -30,
        left: 15, 
        marginBottom: 8,
    },

    socialGraphics: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        marginTop: -100,
        left: 15, 
        bottom: -80,
    },

    socialMedia: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        marginTop: -85,
        left: 15, 
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        marginTop: -25
    },

    phrasesText: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        marginBottom: -70,
    },

    socialText: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        bottom: -45,
        marginTop: -30,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        top: 10,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 80,
    },

    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 80,
    },

    viewSocial: {
        marginTop: 80,
    },

    btnLinks: {
        left: 10,
    },

    btnLink2: {
        left: 77,
        top: -65
    },

    btnLink3: {
        left: 145,
        top: -130
    },

    btnFacebookLink: {
        left: 150,
        top: 48
    },

    btnInstagramLink: {
        left: 250,
        top: -16,
    },

    btnTiktokLink: {
        left: 40,
        top: -85,
    },

    btnYoutubeLink: {
        left: 77,
        top: -330
    },

    btnTwitterLink: {
        left: 145,
        top: -395
    },

    btnLinkedinLink: {
        left: 213,
        top: -460,
        marginBottom: -430,
    },

})

