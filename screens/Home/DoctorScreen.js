//ESTA ES LA PANTALLA DE BLOOD

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Alert, Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
import CarouselImages from '../../components/CarouselImages';
import Loading from '../../components/Loading';
import { 
    getDocumentById, 
} from '../../utils/Actions';

import { Icon, ListItem, Rating, Input, Button } from 'react-native-elements'
import { formatPhone, callNumber, sendEmail, sendWhatsapp } from '../../utils/Helpers';
import MapDoctor from '../../components/Doctors/MapDoctor';
import { map } from 'lodash';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firebase from 'firebase/app'
import Toast from 'react-native-easy-toast'
import Modal from '../../components/Modal';

const widthScreen = Dimensions.get("window").width

export default function DoctorScreen({ navigation, route }) {
    const { id, name } = route.params
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    const [doctor, setDoctor] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [userLogged, setUserLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [modalNotification, setModalNotification] = useState(false)

    /* firebase.auth().onAuthStateChanged(user => {
        user ? setUserLogged(true) : setUserLogged(false)
        setCurrentUser(user)
    }) VALIDAR QUE EL USUARIO ESTÉ LOGUEADO*/ 

    React.useLayoutEffect(() => {
        navigation.setOptions( { title: name } );
    }, []);

    useFocusEffect(
        useCallback(() => {
            (async() => {
                const response = await getDocumentById("doctors", id)
                if (response.statusResponse) {
                    setDoctor(response.document)
                } else {
                    setDoctor({})
                    Alert.alert("Ocurrió un problema cargando el perfil del solicitante. Intente más tarde.")
                }
            })()
        }, [])
    )

    if (!doctor) {
        return <Loading isVisible={true} text="Cargando" />
    }

    return (
        <ScrollView style={styles.viewBody}>
            <NameDoctor
                name={doctor.name}

            />
            <CarouselImages
                images={doctor.images}
                height={250}
                width={widthScreen}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
            />
            <InfoDoctor
                biography={doctor.biography}
                age={doctor.age}
                comment={doctor.comment}
            />
            <DoctorInfo
                name={doctor.name}
                location={doctor.location}
                address={doctor.address}
                email={doctor.email}
                city={doctor.city}
                bloodrequired={doctor.bloodrequired}
                addphone={formatPhone(doctor.callingCode, doctor.addphone)}
                blood={doctor.blood}
                donors={doctor.donors}
                age={doctor.age}
                comment={doctor.comment}
                municipality={doctor.municipality}
                hospital={doctor.hospital}
                suburb={doctor.suburb}
                additional={doctor.additional}
                whatsapp={formatPhone(doctor.callingCode, doctor.phone)}
                phone={formatPhone(doctor.callingCode, doctor.phone)}
                currentUser={currentUser}
                callingCode={doctor.callingCode}
                phoneNoFormat={doctor.phone}
                setLoading={setLoading}
                setModalNotification={setModalNotification}
            />

<Text style={styles.phoneText}>Al comunicarte con {name} aceptas el Aviso de Privacidad, y los, Términos y Condiciones. Al igual de aceptar no obtener un lucro por la donación de sangre. De igual forma, de no dañar la salud de {name}, ni violentar física, verbal, ni psicológicamente a {name}, familiares y/o conocidos. Ahavá no se hace responsable, ni invita a la venta de sangre, ni de ninguna falta moral y legal de la donación de sangre 100% altruista.</Text>

            <UserLinks
                name={doctor.name}
                phone={doctor.phone}
                callingCode={doctor.callingCode}
            />
            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text="Espere, porfavor"/>
        </ScrollView>
    )
}

function DoctorInfo({ 
    name, 
    currentUser, 
    location, 
    address, 
    email, 
    bloodrequired,
    addphone,
    blood,
    donors,
    city,
    municipality,
    hospital,
    suburb,
    phone, 
    whatsapp,  
    callingCode, 
    phoneNoFormat,
    setModalNotification,
}) {

    const listInfo = [
        { type: "hospital", text: hospital, iconLeft: "hospital", subtitle: 'Hospital:'},
        { type: "address", text: address, iconLeft: "map-marker-radius", subtitle: 'Dirección del solicitante:'},
        { type: "city", text: city, iconLeft: "city", subtitle: 'Ciudad:'},
        { type: "municipality", text: municipality, iconLeft: "google-maps", subtitle: 'Muncipio/Alcadía:'},
        { type: "suburb", text: suburb, iconLeft: "map-marker-radius", subtitle: 'Colonia:'},
        { type: "blood", text: blood, iconLeft: "blood-bag", subtitle: 'Tipo de sangre del paciente:'},
        { type: "bloodrequired", text: bloodrequired, iconLeft: "blood-bag", subtitle: 'Tipo de sangre requerida:'},
        { type: "donors", text: donors, iconLeft: "account-group", subtitle: 'Cantidad de donantes requeridos:'},
        { type: "phone", text: phone, iconLeft: "phone", subtitle: 'Número telefónico principal:', iconRight: "phone-in-talk", actionRight: "phone" },
        { type: "addphone", text: addphone, iconLeft: "phone-plus", subtitle: 'Número telefónico secundario:', actionRight: "addphone", iconRight: "phone-in-talk"},
        { type: "whatsapp", text: whatsapp, iconLeft: "whatsapp", subtitle: 'Número de Whatsapp:', actionRight2: "whatsapp", iconRight2: "whatsapp"},
    ]

    const actionRight = (type) => {
        if (type == "phone") {
            callNumber(phone)
        } else if (type == "email") {
            if (currentUser) {
                sendEmail(email, "Interesada/o", `Tengo su contacto mediante la app de Ahavá. Y estoy interesada/o en donarle sangre.`)
            } else {
                sendEmail(email, "Interesada/o", `Tengo su contacto mediante la app de Ahavá. Y estoy interesada/o en donarle sangre.`)
            }
        } else if (type == "addphone") {
            callNumber(phone)
        }
    }

    const actionRight2 = (type) => {
        if (type == "whatsapp") {
            if (currentUser) {
                sendWhatsapp(`${callingCode} ${phoneNoFormat}`, `Hola ! Muy buena tarde. Tengo su contacto mediante la app de Ahavá. Y estoy interesada/o en donarle sangre.`)
            } else {
                sendWhatsapp(`${callingCode} ${phoneNoFormat}`, `Estoy interesada/o en tener una consulta con usted.`)
            }
        }
    }

    return (
        <View style={styles.viewDoctorInfo}>
            <Text style={styles.doctorInfoTitle}>
                Información sobre el paciente
            </Text>

            <Text style={styles.doctorInfoSubtitle}>
                Ubicación del paciente:
            </Text>
            
            <MapDoctor
                location={location}
                name={name}
                height={230}
            />

            {
                map(listInfo, (item, index) => (
                    <ListItem
                        key={index}
                        style={styles.containerListItem}
                    >
                        <Icon
                            type="material-community"
                            name={item.iconLeft}
                            color="#F41635"
                        />
                        <ListItem.Content>
                        <ListItem.Subtitle>{item.subtitle} {item.subtext}</ListItem.Subtitle>
                            <ListItem.Title>{item.text}</ListItem.Title>
                        </ListItem.Content>
                        {
                            item.iconRight && (
                                <Icon
                                    type="material-community"
                                    name={item.iconRight}
                                    color="#F41635"
                                    onPress={() => actionRight(item.type)}
                                />
                            )
                        }

                        {
                            item.iconRight2 && (
                                <Icon
                                    type="material-community"
                                    name={item.iconRight2}
                                    color="#F41635"
                                    onPress={() => actionRight2(item.type)}
                                />
                            )
                        }
                    </ListItem>
                ))
            }
        </View>
    )
}

function NameDoctor({ 
    name, 
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
                <Text style={styles.nameUser}>{name}</Text>
            </View>
        
        </View>
    )
}

function InfoDoctor({ 
    
    comment,
    biography, 
    age
}) {
    return (
        <View style={styles.viewDoctorName}>
            <View style={styles.viewUserAge} >
                <Text style={styles.ageUser}>Edad: {age}</Text>
            </View>
            <Text style={styles.biographyDoctor}>{biography}</Text>
            <Text style={styles.biographyDoctor}>{comment}</Text>
        </View>
    )
}

function UserLinks({
    name,
    phone,
    callingCode
}) {
    return (
        <View>

            <Text style={styles.social}>Ayudar</Text>

            <Text style={styles.text}>Nos emociona muchísimo saber que deseés ayudar a los demás.{'\n'}{'\n'}Contáctate con {name} dando click al número de teléfono o whatsapp de contacto. Comúnicale que vienes de parte de Ahavá, y deseas donar sangre. ¡Muchísimas gracias!</Text>

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
    },

    ageUser: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: 5
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
        marginRight: 75,
        top: 15,
    },

    icon: {
        bottom: -23,
        right: 5,
    },

    social: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        top: -5,
        left: 15, 
    },

    socialMedia: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        top: 35,
        left: 15, 
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        marginBottom: 50
    },

    socialText: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        bottom: -45,
    },

    phoneText: {
        color: "#F41635",
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    }
})

