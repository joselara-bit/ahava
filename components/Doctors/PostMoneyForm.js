import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Alert, 
    Dimensions, 
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Linking
} from 'react-native'

import { Input, Button, Icon, Avatar, Image, CheckBox } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { map, size, filter, isEmpty } from 'lodash'
import { loadImageFromGallery, validateEmail } from '../../utils/Helpers'
import {getCurrentUser, uploadImage, addDocumentWithoutId} from '../../utils/Actions'
import uuid from 'random-uuid-v4'
import { useNavigation } from '@react-navigation/native';


const widthScreen = Dimensions.get("window").width

export default function PostMoneyForm({ toastRef, setLoading, navigation, email }) {
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorName, setErrorName] = useState(null)
    const [errorBiography, setErrorBiography] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorAddress, setErrorAddress] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [errorAge, setErrorAge] = useState(null)
    const [errorComment, setErrorComment] = useState(null)
    const [errorCity, setErrorCity] = useState(null)
    const [errorLinks, setErrorLinks] = useState(null)
    const [errorMoney, setErrorMoney] = useState(null)
    const [postEmail, setPostEmail] = useState(email)

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const privacy = async () => {
        await Linking.openURL("https://ahavaone.web.app/privacy")
    };

    const terms = async() => {
        await Linking.openURL("https://ahavaone.web.app/terms")
    };

    const [imagesSelected, setImagesSelected] = useState([])

    const addUser = async() => {
        if (!validForm()) {
            return
        }

        setLoading(true)
        const responseUploadImages = await uploadImages()
        const user = {
            name: formData.name,
            biography: formData.biography,
            email: formData.email,
            phone: formData.phone,
            addphone: formData.addphone,
            comment: formData.comment,
            age: formData.age,
            city: formData.city,
            links: formData.links,
            link2: formData.link2,
            link3: formData.link3,
            money: formData.money,
            callingCode: formData.callingCode,
            facebook: formData.facebook,
            facebooklink: formData.facebooklink,
            twitter: formData.twitter,
            twitterlink: formData.twitterlink,
            instagram: formData.instagram,
            instagramlink: formData.instagramlink,
            tiktok: formData.tiktok,
            tiktoklink: formData.tiktoklink,
            linkedin: formData.linkedin,
            linkedinlink: formData.linkedinlink,
            youtube: formData.youtube,
            youtubelink: formData.youtubelink,
            images: responseUploadImages,
            createAt: new Date(),
            idUser: getCurrentUser().uid
        }
        const responseAddDocument = await addDocumentWithoutId("money", user)
        setLoading(false)

        if (!responseAddDocument.statusResponse) {
            toastRef.current.show("Hubo un error al guardar tu publicación. Inténtalo más tarde, porfavor.", 3000)
            return
        }

        navigation.navigate("Apoyo económico")
    }

    const uploadImages = async() => {
        const imagesUrl = []
        await Promise.all(
            map(imagesSelected, async(image) => {
                const response = await uploadImage(image, "user", uuid())
                if (response.statusResponse) {
                   imagesUrl.push(response.url)
                }
            })
        )
        return imagesUrl
    }

    const validForm = () => {
        clearErrors()
        let isValid = true

        if (isEmpty(formData.name)) {
            setErrorName("Ingresa el nombre(s) del paciente.")
            isValid = false
        }

        if(size(formData.name) < 15) {
            setErrorName("Ingresa el nombre completo del paciente.")
            isValid = false
        }

        if (!validateEmail(formData.email)) {
            setErrorEmail("Ingresa un correo electrónico válido.")
            isValid = false
        }

        if (isEmpty(formData.biography)) {
            setErrorBiography("Ingresa uan descripción del paciente.")
            isValid = false
        }

        if(size(formData.biography) < 30) {
            setErrorBiography("Ingresa al menos 30 carácteres a la descripción del paciente")
            isValid = false
        }

        if(size(formData.phone) < 10) {
            setErrorPhone("Ingresa un número teléfonico válido.")
            isValid = false
        }

        if (isEmpty(formData.phone)) {
            setErrorPhone("Ingresa el número telefónico de contacto.")
            isValid = false
        }

        if(size(formData.age) < 2) {
            setErrorAge("Ingresa al menos 2 carácteres.")
            isValid = false
        }

        if (isEmpty(formData.age)) {
            setErrorAge("Ingresa la edad del paciente.")
            isValid = false
        }

        if(size(formData.age) < 1) {
            setErrorAge("Ingresa la edad del paciente completa")
            isValid = false
        }

        if(isEmpty(formData.money)) {
            setErrorMoney("Ingresa el monto económico que desea recabar.")
            isValid = false
        }

        if(size(formData.money) < 2) {
            setErrorMoney("Ingresa el monto que desea recabar correctamente.")
            isValid = false
        }

        if(size(formData.city) < 5) {
            setErrorCity("Ingresa el nombre de la ciudad en la que se encuentra el paciente correctamente.")
            isValid = false
        }

        if (isEmpty(formData.city)) {
            setErrorCity("Ingresa el nombre de la ciudad en la que se encuentra el paciente.")
            isValid = false
        }

        if (size(formData.comment) < 30) {
            setErrorComment("Ingresa al menos 30 carácteres en donde le dices lo al donador, porque debe donar su sangre.")
            isValid = false
        }

        if (isEmpty(formData.comment)) {
            setErrorComment("Ingresa lo que le quieres decir al donador, para que done sangre.")
            isValid = false
        }

        if (size(imagesSelected) === 0) {
            toastRef.current.show("Ingresa al menos una imagen a tu publicación. Presionando al icóno inferior de la cámara dentro del recuadro rojo.", 5000)
            isValid = false
        }

        return isValid
    }

    const clearErrors = () => {
        setErrorName(null)
        setErrorBiography(null)
        setErrorEmail(null)
        setErrorAddress(null)
        setErrorPhone(null)
        setErrorAge(null)
        setErrorCity(null)
        setErrorComment(null)
        setErrorLinks(null)
        setErrorMoney(null)
    }

    return (
        <ScrollView style={styles.viewContainer}>
            <ImageUser
                imageUser={imagesSelected[0]}
            />
            <FormAdd
                formData={formData}
                setFormData={setFormData}
                errorName={errorName}
                errorBiography={errorBiography}
                errorEmail={errorEmail}
                errorAddress={errorAddress}
                errorPhone={errorPhone}
                errorAge={errorAge}
                errorCity={errorCity}
                errorComment={errorComment}
                errorLinks={errorLinks}
                errorMoney={errorMoney}
            />
            <UploadImage
                toastRef={toastRef}
                imagesSelected={imagesSelected}
                setImagesSelected={setImagesSelected}
            />

            <Text style={styles.subtext}>IMPORTANTE. En la primera foto tiene que estar una imagen de la persona que necesita el apoyo económico. Si usted desea, puede agregar más fotos con temas variados y de su preferencia. {'\n'}{'\n'}Esto con el fin de que el donador sepa a quién le va a apoyar económicamente. </Text>
            
            <View>
              
              <SafeAreaView>
              <ScrollView>
                          
                          <View style={styles.checkBoxContainer}>
                          <CheckBox
                              center
                              checked={check2}
                              onPress={() => setCheck2(!check2)}
                          />
                          
                          <Text 
                            style={{marginRight: 30}}
                            onPress={privacy}
                        >
                            Estoy de acuerdo con el {" "}
                            <Text style={styles.btnRegister}>
                                Aviso de Privacidad
                            </Text>
                        </Text>
                          </View>

                      <View style={styles.checkBoxContainer}>
                          <CheckBox
                              center
                              checked={check1}
                              onPress={() => setCheck1(!check1)}
                              iconStyle={{ margTop: -100 }}
                          />
                          
                          <Text 
                            style={{ marginRight: 50,}}
                            onPress={terms}
                        >
                            Estoy de acuerdo con los{" "}
                            <Text style={styles.btnRegister}>
                                Términos y Condiciones
                            </Text>
                        </Text>
                      </View>

                      <TouchableOpacity
                          style={[styles.continueBotton, 
                          {backgroundColor: check1
                          ? '#F41635' : 'grey' }
                          ]}
                          disabled={!check1}
                          onPress={() => addUser(false)}>
                              <Text style={{color: "#fff"}}>Crear Publicación</Text>
                          </TouchableOpacity>

                      
                  
              </ScrollView>
              </SafeAreaView>
     
  </View>

        </ScrollView>
    )
}

function ImageUser({ imageUser }) {
    return (
        <View style={styles.viewPhoto}>
            <Image
            style={{ width: widthScreen, height: 200 }}
                source={
                    imageUser
                        ? { uri: imageUser }
                        : require("../../assets/no-image.png")
                }        
            />
        </View>
    )
}

function UploadImage({ toastRef, imagesSelected, setImagesSelected }) {
    const imageSelect = async() => {
        const response = await loadImageFromGallery([4, 3])
        if (!response.status) {
            toastRef.current.show("No has seleccionado ninguna imagen", 3000)
            return
        }
        setImagesSelected([...imagesSelected, response.image])
    }

    const removeImage = (image) => {
        Alert.alert (
            "Eliminar Imagen",
            "¿Estás segura/o de que quieres eliminar la imagen seleccionada?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                
                {
                    text: "Sí",
                    onPress: () => {
                        setImagesSelected(
                            filter(imagesSelected, (imageUrl) => imageUrl !== image)
                        )
                    }
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <ScrollView
            horizontal
            style={styles.viewImages}
        >
            {
                size(imagesSelected) < 10 && (
                    <Icon
                        type="ionicon"
                        name="camera"
                        color="#fff"
                        containerStyle={styles.containerIcon}
                        onPress={imageSelect}
                    />
                )
            }
            {
                map(imagesSelected, (imageUser, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{ uri: imageUser}}
                        onPress={() => removeImage(imageUser)}
                    />
                ))
            }

        </ScrollView>
    )
}

function FormAdd({ 
    formData, 
    setFormData, 
    errorName, 
    errorComment,
    errorBiography, 
    errorEmail, 
    errorPhone, 
    errorAge, 
    errorLinks,
    errorMoney,
    errorCity, 
}) {

    const [country, setCountry] = useState("MX")
    const [callingCode, setCallingCode] = useState("52")
    const [phone, setPhone] = useState("")
    
    const navigation = useNavigation(); 
    
    const onChange = (e, type) => {
        setFormData({ ...formData, [type] : e.nativeEvent.text })
    }

    return (
        
        <View style={styles.viewForm}>
            <Input
                placeholder="Nombre Completo"
                containerStyle={styles.textArea}
                containerStyle={styles.name}
                defaultValue={formData.name}
                onChange={(e) => onChange(e, "name")}
                errorMessage={errorName}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="ios-person-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />

            <Input
                keyboardType="email-address"
                placeholder="Correo electrónico"
                containerStyle={styles.textArea}
                defaultValue={formData.email}
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="mail"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <View style={styles.phoneView}>
                <CountryPicker
                    withFlag
                    withCallingCode
                    withFilter
                    withCallingCodeButton
                    withEmoji
                    withAlphaFilter
                    withCloseButton
                    containerStyle={styles.countryPicker}
                    countryCode={country}
                    onSelect={(country) => {
                        setFormData({ 
                            ...formData, 
                            "country": country.cca2, 
                            "callingCode": country.callingCode[0]
                        })
                    }}
                />

            <Input
                keyboardType="phone-pad"
                placeholder="Número teléfonico de contacto"
                containerStyle={styles.inputPhone}
                defaultValue={formData.phone}
                onChange={(e) => onChange(e, "phone")}
                errorMessage={errorPhone}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="call"
                        size={26}
                        iconStyle={styles.iconLeft}
                    />
            }
            />    

            </View>

            <View style={styles.phoneView}>
                <CountryPicker
                    withFlag
                    withCallingCode
                    withFilter
                    withCallingCodeButton
                    withEmoji
                    withAlphaFilter
                    withCloseButton
                    containerStyle={styles.countryPicker}
                    countryCode={country}
                    onSelect={(country) => {
                        setFormData({ 
                            ...formData, 
                            "country": country.cca2, 
                            "callingCode": country.callingCode[0]
                        })
                    }}
                />

            <Input
                keyboardType="phone-pad"
                placeholder="Número adicional (opcional)"
                containerStyle={styles.inputPhone}
                defaultValue={formData.addphone}
                onChange={(e) => onChange(e, "addphone")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="call"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            </View>

            <Input
                keyboardType="number-pad"
                placeholder="Edad"
                containerStyle={styles.textArea}
                defaultValue={formData.age}
                onChange={(e) => onChange(e, "age")}
                errorMessage={errorAge}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="person-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />     

            <Input
                placeholder="Biografía del paciente (Gustos, pasiones, sueños, etc)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.biography}
                onChange={(e) => onChange(e, "biography")}
                errorMessage={errorBiography}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="document-text"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="¿Qué le dirías a una persona para que te ayude a llegar a tu meta?"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.comment}
                onChange={(e) => onChange(e, "comment")}
                errorMessage={errorComment}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="account-voice"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />                 

            <Input
                placeholder="¿Cuál es el monto económico que necesitas?"
                multiline
                keyboardType="number-pad"
                containerStyle={styles.textArea}
                defaultValue={formData.money}
                onChange={(e) => onChange(e, "money")}
                errorMessage={errorMoney}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="cash"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            /> 

            <Input
                placeholder="¿En qué ciudad se encuentra el paciente?"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.city}
                onChange={(e) => onChange(e, "city")}
                errorMessage={errorCity}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="city"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />   

            <Input
                placeholder="Pon aquí el link de tu campaña para donarte dinero: "
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.links}
                onChange={(e) => onChange(e, "links")}
                errorMessage={errorLinks}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
                }

                rightIcon={
                    <Icon
                        type="ionicon"
                        name="information-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                        onPress={() => navigation.navigate("LinkCampain")}
                    />
                }
            />   

            <Input
                placeholder="Pon aquí otro link de tu campaña para donarte dinero (opcional): "
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.link2}
                onChange={(e) => onChange(e, "link2")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
                }

                rightIcon={
                    <Icon
                        type="ionicon"
                        name="information-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                        onPress= {() => navigation.navigate("LinkCampainAdd")}
                    />
                }
            />  

            <Input
                placeholder="Pon aquí otro link de tu campaña para donarte dinero (opcional): "
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.link3}
                onChange={(e) => onChange(e, "link3")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
                }

                rightIcon={
                    <Icon
                        type="ionicon"
                        name="information-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                        onPress={() => navigation.navigate("LinkCampainAlone")}
                    />
                }
            />   

            <Text style={styles.subtitle}>Redes Sociales</Text>
            
            <Input
                placeholder="Pon el nombre de tu página o cuenta de Facebook (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.facebook}
                onChange={(e) => onChange(e, "facebook")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="logo-facebook"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
                }
            />  

            <Input
                placeholder="Pon el link de tu página o cuenta de Facebook (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.facebooklink}
                onChange={(e) => onChange(e, "facebooklink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
                rightIcon={
                    <Icon
                        type="ionicon"
                        name="information-circle"
                        size={27}
                        iconStyle={styles.iconLeft}
                        onPress={() => navigation.navigate("LinkCampainFacebook")}
                    />
                }
            />  

            <Input
                placeholder="Pon el nombre de tu cuenta de Instagram (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.instagram}
                onChange={(e) => onChange(e, "instagram")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="logo-instagram"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Pon el link de tu cuenta de Instagram (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.instagramlink}
                onChange={(e) => onChange(e, "instagramlink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            rightIcon={
                <Icon
                    type="ionicon"
                    name="information-circle"
                    size={27}
                    iconStyle={styles.iconLeft}
                    onPress={() => navigation.navigate("LinkCampainInstagram")}
                />
            }
            />  

            <Input
                placeholder="Pon el nombre de tu cuenta de TikTok (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.tiktok}
                onChange={(e) => onChange(e, "tiktok")}
                leftIcon={
                    <Icon
                        type="fontisto"
                        name="tumblr"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Pon el link de tu cuenta de TikTok (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.tiktoklink}
                onChange={(e) => onChange(e, "tiktoklink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            rightIcon={
                <Icon
                    type="ionicon"
                    name="information-circle"
                    size={27}
                    iconStyle={styles.iconLeft}
                    onPress={() => navigation.navigate("LinkCampainTiktok")}
                />
            }
            />  

            <Input
                placeholder="Pon el nombre de tu canal de YouTube (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.youtube}
                onChange={(e) => onChange(e, "youtube")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="logo-youtube"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Pon el link de tu canal de YouTube (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.youtubelink}
                onChange={(e) => onChange(e, "youtubelink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            rightIcon={
                <Icon
                    type="ionicon"
                    name="information-circle"
                    size={27}
                    iconStyle={styles.iconLeft}
                    onPress={() => navigation.navigate("LinkCampainYoutube")}
                />
            }
            />  

            <Input
                placeholder="Pon el nombre de tu cuenta de Twitter (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.twitter}
                onChange={(e) => onChange(e, "twitter")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="logo-twitter"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Pon el link de tu cuenta de Twitter (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.twitterlink}
                onChange={(e) => onChange(e, "twitterlink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            rightIcon={
                <Icon
                    type="ionicon"
                    name="information-circle"
                    size={27}
                    iconStyle={styles.iconLeft}
                    onPress={() => navigation.navigate("LinkCampainTwitter")}
                />
            }
            />  
            
            <Input
                placeholder="Pon el nombre de tu cuenta de Linkedin (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.linkedin}
                onChange={(e) => onChange(e, "linkedin")}
                leftIcon={
                    <Icon
                        type="ionicon"
                        name="logo-linkedin"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Pon el link de tu cuenta de Linkedin (opcional)"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.linkedinlink}
                onChange={(e) => onChange(e, "linkedinlink")}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="link-variant"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            rightIcon={
                <Icon
                    type="ionicon"
                    name="information-circle"
                    size={27}
                    iconStyle={styles.iconLeft}
                    onPress={() => navigation.navigate("LinkCampainLinkedin")}
                />
            }
            />  

            </View>
    )
}

const defaultFormValues = () => {
    return { 
        name: "",
        email: "",
        phone: "",
        addphone: "",
        country: "MX",
        callingCode: "52",
        biography: "",
        comment: "",
        age: "",
        links: "",
        link2: "",
        link3: "",
        city: "",
        facebook: "",
        facebooklink: "",
        twitter: "",
        twitterlink: "",
        instagram: "",
        instagramlink: "",
        tiktok: "",
        tiktoklink: "",
        linkedin: "",
        linkedinlink: "",
        youtube: "",
        youtubelink: "",
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        height: "100%",
    },

    viewForm: {
        marginHorizontal: 10,
    },

    textArea: {
        height: 75,
        width: "100%",
    },

    phoneView: {
        width: "100%",
        flexDirection: "row"
    },

    inputPhone: {
        width: "100%",
        marginTop: -10,
    },

    btnAddDoctor: {
        margin: 20,
        backgroundColor: "#F41635"
    },

    name: {
        marginTop: 20,
    },

    viewImages: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
    },

    containerIcon: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        height: 70,
        width: 79,
        backgroundColor: "#F41635"
    },

    miniatureStyle: {
        width: 70,
        height: 70,
        marginRight: 10,
    },

    viewPhoto: {
        alignItems: "center",
        height: 200,
        marginBottom: 20,
    },

    mapStyle: {
        width: "100%",
        height: 550,
    },

    viewMapBtn: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },

    viewMapBtnContainerCancel: {
        paddingLeft: 5,
    },

    viewMapBtnContainerSave: {
        paddingRight: 5,
    },

    viewMapBtnCancel: {
        backgroundColor: "red"
    },

    viewMapBtnContainerSave: {
        backgroundColor: "#F41635"
    },

    iconLeft: {
        color: "#F41635",
        marginRight: 1,
    },

    text: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
    },

    subtext: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 30,
    },

    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        marginTop: -15,
        marginBottom: 5,
        marginLeft: -9,
    },

    touchableOpacity: {
        backgroundColor: "transparent",
        alignSelf: "stretch",
        paddingHorizontal: 20,
    },

    textChoose: {
        marginVertical: 10,
        fontSize: 18,
        color: "#F41635",
        marginRight: 10,
    },

    subtitle: {
        color:"#F41635",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },

    containerModal: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: -15,
    },

    touchableOpacity: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },

    checkBoxContainer: {
        flexDirection: "row",
        marginVertical: 30,
        alignItems: 'center',
    },

    btnRegister: {
        color: "#F41635",
        fontWeight: "bold"
    },

    checkBox: {
        width: 30,
        height: 30,
        marginRight: 20,
        color: "#F41635"
    },

    checkAgeBox: {
        width: 30,
        marginTop: -60,
        height: 30,
        marginRight: 20,
        color: "#F41635"
    },

    continueBotton: {
        marginTop: -5,
        padding: 20,
        borderRadius: 18,
        marginBottom: 20,
    }
})