import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Alert, Dimensions, StyleSheet, Text, View, ScrollView, Share } from 'react-native'
import CarouselImages from '../../components/CarouselImages';
import Loading from '../../components/Loading';
import { 
    getDocumentById, 
} from '../../utils/Actions';

import { Icon, ListItem, Rating, Input, Button } from 'react-native-elements'
import { formatPhone, callNumber, sendEmail, sendWhatsapp } from '../../utils/Helpers';
import { map } from 'lodash';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firebase from 'firebase/app'
import Toast from 'react-native-easy-toast'
import * as Linking from 'expo-linking';


const widthScreen = Dimensions.get("window").width

export default function UserScreen({ route }) {
    const { id, name } = route.params
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const [user, setUser] = useState(null)
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
                const response = await getDocumentById("money", id)
                if (response.statusResponse) {
                    setUser(response.document)
                } else {
                    setUser({})
                    Alert.alert("Ocurrió un problema cargando el perfil del solicitante. Intente más tarde.")
                }
            })()
        }, [])
    )
    if (!user) {
        return <Loading isVisible={true} text="Cargando" />
    }

    return (
        <ScrollView style={styles.viewBody}>
            <UserName
                name={user.name}
            />
            <CarouselImages
                images={user.images}
                height={250}
                width={widthScreen}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
            />
            <InfoUser
                biography={user.biography}
                age={user.age}
                comment={user.comment}
            />
            <UserInfo
                name={user.name}
                address={user.address}
                email={user.email}
                city={user.city}
                age={user.age}
                addphone={user.addphone}
                links={user.links}
                link2={user.link2}
                link3={user.link3}
                money={user.money}
                facebook={user.facebook}
                twitter={user.twitter}
                instagram={user.instagram}
                tiktok={user.tiktok}
                linkedin={user.linkedin}
                youtube={user.youtube}
                comment={user.comment}
                whatsapp={formatPhone(user.callingCode, user.phone)}
                phone={formatPhone(user.callingCode, user.phone)}
                currentUser={currentUser}
                callingCode={user.callingCode}
                phoneNoFormat={user.phone}
                setLoading={setLoading}
                setModalNotification={setModalNotification}
            />

            <UserLinks
                name={user.name}
                links={user.links}
                link2={user.link2}
                link3={user.link3}
                facebooklink={user.facebooklink}
                twitterlink={user.twitterlink}
                instagramlink={user.instagramlink}
                tiktoklink={user.tiktoklink}
                linkedinlink={user.linkedinlink}
                youtubelink={user.youtubelink}
            />

            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text="Espere, porfavor"/>
        </ScrollView>
    )
}

function UserInfo({ 
    currentUser, 
    email, 
    addphone,
    city,
    links,
    link2,
    link3,
    money,
    facebook,
    twitter,
    instagram,
    tiktok,
    linkedin,
    youtube,
    phone, 
    whatsapp,  
    callingCode, 
    phoneNoFormat,
}) {

    const listInfo = [
        { type: "city", text: city, iconLeft: "business", subtitle: 'Ciudad:'},
        { type: "money", text: money, iconLeft: "cash", subtitle: 'Dinero requerido:'},
        { type: "links", text: links, iconLeft: "link", subtitle: 'Campaña activa para donar dinero:'},
        { type: "link2", text: link2, iconLeft: "link", subtitle: 'Campaña adicional activa para donar dinero:'},
        { type: "link3", text: link3, iconLeft: "link", subtitle: 'Campañas adicional activa para donar dinero:'},
        { type: "facebook", text: facebook, iconLeft: "logo-facebook", subtitle: 'Nombre del perfil de Facebook:'},
        { type: "instagram", text: instagram, iconLeft: "logo-instagram", subtitle: 'Perfil de Instagram'},
        { type: "tiktok", text: tiktok, iconLeft: "logo-tumblr", subtitle: 'Nombre del perfil de Tiktok:'},
        { type: "youtube", text: youtube, iconLeft: "logo-youtube", subtitle: 'Nombre del canal de YouTube:'},
        { type: "twitter", text: twitter, iconLeft: "logo-twitter", subtitle: 'Nombre del perfil de Twitter:'},
        { type: "linkedin", text: linkedin, iconLeft: "logo-linkedin", subtitle: 'Nombre del perfil de Linkedin:'},
        { type: "phone", text: phone, iconLeft: "call", subtitle: 'Número de contacto principal:', actionRight: "callPhone", iconRight: "volume-high"},
        { type: "addphone", text: addphone, iconLeft: "call", subtitle: 'Número de contacto secundario:', actionRight: "callPhone", iconRight: "volume-high"},
        { type: "whatsapp", text: whatsapp, iconLeft: "logo-whatsapp", subtitle: 'Número de Whatsapp del solicitante:', iconRight2: "logo-whatsapp", actionRight2: "sendWhatsapp"}, 
        { type: "email", text: email, iconLeft: "at", subtitle: 'Correo electrónico de contacto:', actionRight: "sendEmail", iconRight: "send"},
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
                Información sobre el usuario
            </Text>

            {
                map(listInfo, (item, index) => (
                    <ListItem
                        key={index}
                        style={styles.containerListItem}
                    >
                        <Icon
                            type="ionicon"
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
                                    type="ionicon"
                                    name={item.iconRight}
                                    color="#F41635"
                                    onPress={() => actionRight(item.type)}
                                />
                            )
                        }

                        {
                            item.iconRight2 && (
                                <Icon
                                    type="ionicon"
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

function UserName({ 
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


function UserLinks({
    facebooklink,
    instagramlink,
    tiktoklink,
    youtubelink,
    twitterlink,
    linkedinlink,
    links,
    link2,
    link3,
    name,
}) {
    return (
        <View>
            <Text style={styles.social}>Ayudar</Text>

            <Text style={styles.text}>Nos emociona muchísimo saber que deseés ayudar a los demás.{'\n'}{'\n'}Para poder donar dinero a {name}, contáctate directamente con {name} en el apartado superior.</Text>

            <Text style={styles.socialMedia}>Redes Sociales</Text>

            <Text style={styles.socialText}>De igual forma, te invitamos a que conozcas sus Redes Sociales y puedas establecer un contacto con {name}.{'\n'}</Text>
                <Icon
                    type="material-community"
                    name="link-variant"
                    color="grey"
                    reverse
                    containerStyle={styles.btnLinks}
                    onPress={() => Linking.openURL(links)}
                />    

                <Icon
                    type="material-community"
                    name="link-variant-plus"
                    color="grey"
                    reverse
                    containerStyle={styles.btnLink2}
                    onPress={() => Linking.openURL(link2)}
                />

                <Icon
                    type="material-community"
                    name="link-variant-plus"
                    color="grey"
                    reverse
                    containerStyle={styles.btnLink3}
                    onPress={() => Linking.openURL(link3)}
                />

                <Icon
                    type="material-community"
                    name="facebook"
                    color="#1b77f2"
                    reverse
                    containerStyle={styles.btnFacebookLink}
                    onPress={() => Linking.openURL(facebooklink)}
                />

                <Icon
                    type="ionicon"
                    name="logo-instagram"
                    color="#ea3c61"
                    reverse
                    containerStyle={styles.btnInstagramLink}
                    onPress={() => Linking.openURL(instagramlink)}
                />

                <Icon
                    type="ionicon"
                    name="logo-tumblr"
                    color="black"
                    reverse
                    containerStyle={styles.btnTiktokLink}
                    onPress={() => Linking.openURL(tiktoklink)}
                />

                <Icon
                    type="ionicon"
                    name="logo-youtube"
                    color="#fe0002"
                    reverse
                    containerStyle={styles.btnYoutubeLink}
                    onPress={() => Linking.openURL(youtubelink)}
                />

                <Icon
                    type="ionicon"
                    name="logo-twitter"
                    color="#08bdff"
                    reverse
                    containerStyle={styles.btnTwitterLink}
                    onPress={() => Linking.openURL(twitterlink)}
                />

                <Icon
                    type="ionicon"
                    name="logo-linkedin"
                    color="#007bb6"
                    reverse
                    containerStyle={styles.btnLinkedinLink}
                    onPress={() => Linking.openURL(linkedinlink)}
                />

            </View>
    )
}

function InfoUser({  
    comment,
    biography, 
    age
}) {
    return (
        <View style={styles.viewDoctorName}>
            <View style={styles.viewDoctorAge} >
                <Text style={styles.ageDoctor}>Edad: {age}</Text>
            </View>
            <Text style={styles.biographyUser}>{biography}</Text>
            <Text style={styles.commentUser}>{comment}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#fff",
        // marginBottom: 80,
    },

    viewDoctorName: {
        padding: 15,
    },

    viewDoctorAge: {
        padding: 5,
        marginLeft: -5,
    },


    viewDoctorContainer: {
        flexDirection: "row",
    },

    nameDoctor: {
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: -78,
    },

    ageDoctor: {
        fontWeight: "bold",
        fontSize: 20,
    },

    rating: {
        position: "absolute",
        right: 0,
        marginTop: 8,
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

    biographyUser: {
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
        marginBottom: 0,
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

    commentUser: {
        marginTop: 15,
        color: "black",
        textAlign: "justify",
        fontWeight: "bold",
        marginLeft: 1,
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
        left: 213,
        top: -195
    },

    btnInstagramLink: {
        left: 280,
        top: -260
    },

    btnTiktokLink: {
        left: 10,
        top: -265,
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

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
 
        fontSize: 15,
        bottom: -5,
    },

    socialText: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        bottom: -15,
    },

    social: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        top: -4,
        left: 15, 
    },

    socialMedia: {
        fontWeight: "bold",
        color: "#F41635",
        fontSize: 35,
        marginRight: 75,
        top: 10,
        left: 15, 
    },

})
