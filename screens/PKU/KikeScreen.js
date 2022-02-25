import React, { useState, useRef, Image } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import Loading from '../../components/Loading';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast';
import KikeSlide from './KikeSlide'
import KikeProfile from './KikeProfile'

const widthScreen = Dimensions.get("window").width

export default function KikeScreen() {
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <ScrollView style={styles.viewBody}>
           
           <NameDoctor/>

           <KikeProfile/>

           <InfoDoctor/>
            
           <UserLinks/>

           <KikeAgreed/>

           <KikeSlide/>

           <KikeMedia/>

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
                <Text style={styles.nameUser}>Kîkë Pierre</Text>
            </View>
        
        </View>
    )
}

function InfoDoctor({ 
 
}) {
    return (
        <View style={styles.viewDoctorName}>
            <View style={styles.viewUserAge}>
                <Text style={styles.ageUser}>Mi nombre es Enrique. Tengo 24 años, y soy de México. Nací el 8 de diciembre de 1996 en Mazatlán, Sinaloa.{'\n'} {'\n'}Al nacer me veía normal físicamente, no me hicieron el tamiz neonatal ampliado al nacer porque en los 90´s no hacían eso en México. Cuando cumplí 2 años empezó el verdadero problema, los doctores y mi familia notaban que nada estaba bien en mí y tenían que hacer algo rápido, pues no hablaba y me costaba caminar. Por años fui muy inquieto, estuve sufriendo ya que nadie sabía lo que tenía.{'\n'} {'\n'}Con el paso de los años se notaba más el problema. A los 4 años me fui a USA y estuve enfermo de la panza, enseguida me llevaron al hospital en Maryland y mis padres firmaron un papel que podían tomarme fotos y ponerme en revistas ya que en esos tiempos en Estados Unidos estaba en investigación la PKU, ya había empezado el nuevo milenio cuando eso empezó. Me llevaron al Walter Reed en Washington DC la capital Americana, en esos tiempos aún ni hablaba entonces prácticamente me esperaba.{'\n'} {'\n'}El ejército de Estados Unidos 🇺🇸  me llevó rápido al laboratorio donde me internaron por un año y me hicieron varios estudios, hasta me metieron a un cuarto de rayos ultravioleta dónde al final cuando cumplí 5 años mis padres supieron que tenía PKU. Al enterarse se pusieron mal y les dijeron que tenía que tener una dieta muy baja en proteínas ya que no tenía la enzima que procesa proteínas que es parte de la hidroxilasa ya que la phe se había acomulado causando serios daños muy serios y horribles, pero actuaron mejor en USA que cuando estuve en México.{'\n'} {'\n'}Al regresar sufrí mucho de buylling por mi forma de comer y por ser diferente pero nada me detuvo, seguí mi idioma materno que es el inglés, después aprendí el español, costó trabajo aprender el español, también me expulsaron de las escuelas por no hablar español, pues solo hablaba inglés; entonces, di mi mayor esfuerzo, seguí con terapias, con el tratamiento médico y con la dieta.{'\n'} {'\n'}Actualmente doy pláticas sobre PKU y recientemente estuve en el congreso interamericano de pediatría dónde hasta hablé en francés.{'\n'} {'\n'}Juego futbol, canto, corro, hago ejercicio y hasta entreno Karate.{'\n'} {'\n'}Actualmente no me puedo quejar tanto, aunque en México no haya la mejor atención médica por falta de información y comida aproteica pero con la ayuda de mis padres y el INP (Instituto Nacional de Pediatría), he salido adelante. Ahora trabajo para ayudar a los demás y hasta trabajo para un grupo de WhatsApp de enfermedades raras en la cual represento a la comunidad PKU, dando a conocer la PKU. Próximamente haré un cuento basado de PKU para niños. No hay imposibles, si sufrí, pero al final he ganado.</Text>
            </View>
  
        </View>
    )
}


function UserLinks({
 
}) {
    return (
        <View style={styles.viewSocial}>

            <Text style={styles.social}>Frases Motivacionales</Text>

            <Text style={styles.text}>- Todos unidos contra la adversidad.{'\n'} {'\n'}


- Tú eres tu propio enemigo.{'\n'} {'\n'}


- Si crees en ti lo puedes lograr que nadie ni nada te detenga. {'\n'} {'\n'}


- Muchos te cuestionarán, otros te odiarán sin razón , otros se burlarán de ti por tener PKU, pero puedes callar bocas, un PKU es capaz de todo.{'\n'} {'\n'} 

- Si no sufres no mereces ganar, sufrir es ganar, no hay dolor , y sÍ sufriendo se gana y si no es así no es lo que es.{'\n'} {'\n'}

¡Muchas gracias por su atención!🥰
</Text>

            </View>
    )
}

function KikeAgreed({
 
}) {
    return (
        <View style={styles.viewSocial}>

            <Text style={styles.social}>Agradecimientos</Text>

            <Text style={styles.text}>Agradezco a todos quellos que han creído en mí desde el inicio, desde que era niño hasta la actualidad. Me dirijo a esas personas porque a pesar que a veces se enojan conmigo han estado para mí y no se van de mi vida, los que se fueron ya no importan porque yo vivo para mí y los que no se van estoy eternamente agradecido sobre todos con Estados Unidos quienes gracias a ellos la vida me dió otra oportunidad para vivir ya que México no tenía buena atención médica y sigue así. Cuando me despierto digo gracias América del Norte por tanto, gracias a ellos también hablé desde señas hasta mi primer idioma materno que es el inglés. {'\n'} {'\n'}La vida es difícil y lo es aún, pero no me quejo, sigo luchando por toda mi comunidad PKU y sobre todo a los profesores que me enseñaron francés. Desde los 5 años hasta mis 24 años que tengo actualmente de alguna manera soy feliz, hará llorar este dato de mi y a los PKU, pero motivará a los demás y más a los niños niñas y bebés que son próximas generaciones de la comunidad genética que los ayudaré a que salgan adelante con motivación.
</Text>

            </View>
    )
}

function KikeMedia({

}) {

    const handleWhatsappPress = async() => {
        await Linking.openURL("https://wa.me/+522295064484/?text=Hola, qué tal !! Vengo de Ahavá, ví tu historia y me gustó mucho. Quiero conocer más de ti, Kîkë Pierre...")
    };

    const handleFacebookPress = async() => {
        await Linking.openURL("https://www.facebook.com/kikepierre.pierre")
    };

    const handleInstagramPress = async() => {
        await Linking.openURL("https://instagram.com/pierrekike?utm_medium=copy_link")
    };

    return (
        <View>

            <Text style={styles.socialMedia}>Redes Sociales de Kîkë Pierre</Text>

            <Text style={styles.socialText}>Te invitamos a que conozcas sus Redes Sociales, y puedas establecer un contacto con Kîkë Pierre.{'\n'}</Text> 

                <Icon
                    type="material-community"
                    name="facebook"
                    color="#1b77f2"
                    reverse
                    containerStyle={styles.btnFacebookLink}
                    onPress={handleFacebookPress}
                />

                <Icon
                    type="ionicon"
                    name="logo-instagram"
                    color="#ea3c61"
                    reverse
                    containerStyle={styles.btnInstagramLink}
                    onPress={handleInstagramPress}
                />

                <Icon
                    type="ionicon"
                    name="logo-whatsapp"
                    color="#1bd741"
                    reverse
                    containerStyle={styles.btnTiktokLink}
                    onPress={handleWhatsappPress}
                />

            </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
        /* marginBottom: 50 */
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
        fontSize: 25,
        marginRight: 85,
        marginTop: 15,
    },

    ageUser: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: -75
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
        bottom: 70,
        right: 5,
    },

    social: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        top: -5,
        left: 15, 
        marginBottom: 8,
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
        marginBottom: -55
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

