import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Alert, 
    Dimensions, 
    TouchableOpacity,
    SafeAreaView ,
    Linking
} from 'react-native'

import { Input, Button, Icon, Avatar, Image, CheckBox } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { map, size, filter, isEmpty } from 'lodash'
import { getCurrentLocation, loadImageFromGallery, validateEmail } from '../../utils/Helpers'
import Modal from '../Modal'
import MapView from 'react-native-maps'
import {getCurrentUser, uploadImage, addDocumentWithoutId} from '../../utils/Actions'
import uuid from 'random-uuid-v4'

import {useNavigation} from '@react-navigation/native'

const widthScreen = Dimensions.get("window").width

export default function PostHospitalForm({ toastRef, setLoading, email }) {
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorName, setErrorName] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorAddress, setErrorAddress] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [errorAddphone, setErrorAddphone] = useState(null)
    const [errorComment, setErrorComment] = useState(null)
    const [errorCity, setErrorCity] = useState(null)
    const [isVisibleMap, setIsVisibleMap] = useState(false)
    const [errorMunicipality, setErrorMunicipality] = useState(null)
    const [errorHospital, setErrorHospital] = useState(null)
    const [errorSuburb, setErrorSuburb] = useState(null)
    const [postEmail, setPostEmail] = useState(email)
    const [locationDoctor, setLocationDoctor] = useState(null)  

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const privacy = async () => {
        await Linking.openURL("https://ahavaone.web.app/privacy")
    };

    const terms = async() => {
        await Linking.openURL("https://ahavaone.web.app/terms")
    };

    const [toogleCheckBox, setToogleCheckBox] = useState(false);
    const [termsToogleCheckBox, setTermsToogleCheckBox] = useState(false);
    const [complianceModal, setComplianceModal] = useState(true);
    const [termsComplianceModal, setTermsComplianceModal] = useState(true);

    const [imagesSelected, setImagesSelected] = useState([])

    const addHospital = async() => {
        if (!validForm()) {
            return
        }

        setLoading(true)
        const responseUploadImages = await uploadImages()
        const hospital = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            phone: formData.phone,
            addphone: formData.addphone,
            comment: formData.comment,
            city: formData.city,
            municipality: formData.municipality,
            hospital: formData.hospital,
            callingCode: formData.callingCode,
            location: locationDoctor,
            suburb: formData.suburb,
            images: responseUploadImages,
            facebook: formData.facebook,
            facebooklink: formData.facebooklink,
            instagram: formData.instagram,
            instagramlink: formData.instagramlink,
            tiktok: formData.tiktok,
            tiktoklink: formData.tiktoklink,
            youtube: formData.youtube,
            youtubelink: formData.youtubelink,
            createAt: new Date(),
            createBy: getCurrentUser().uid
        }
        const responseAddDocument = await addDocumentWithoutId("hospital", hospital)
        setLoading(false)

        if (!responseAddDocument.statusResponse) {
            toastRef.current.show("Hubo un error al guardar tu publicación. Inténtalo más tarde, porfavor.", 3000)
            return
        }

        navigation.navigate("HomeScreen")
    }

    const uploadImages = async() => {
        const imagesUrl = []
        await Promise.all(
            map(imagesSelected, async(image) => {
                const response = await uploadImage(image, "hospital", uuid())
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
            setErrorName("Ingresa el nombre(s) del Hospital/Clínica.")
            isValid = false
        }

        if(size(formData.name) < 15) {
            setErrorName("Ingresa el nombre completo del Hospital/Clínica.")
            isValid = false
        }

        if (!validateEmail(formData.email)) {
            setErrorEmail("Ingresa un correo electrónico válido.")
            isValid = false
        }

        if (isEmpty(formData.address)) {
            setErrorAddress("Ingresa la ubicación en la que se encuentra el Hospital/Clínica.")
            isValid = false
        }

        if(size(formData.phone) < 10) {
            setErrorPhone("Ingresa un número teléfonico válido.")
            isValid = false
        }

        if(size(formData.addphone) < 10) {
            setErrorAddphone("Ingresa un número teléfonico válido.")
            isValid = false
        }

        if (isEmpty(formData.phone)) {
            setErrorPhone("Ingresa el número telefónico de contacto.")
            isValid = false
        }

        if(isEmpty(formData.municipality)) {
            setErrorMunicipality("Ingresa el municipio/delegación/alcadía en el que se encuentra el Hospital/Clínica.")
            isValid = false
        }

        if(isEmpty(formData.hospital)) {
            setErrorHospital("Ingresa el hospital en el que se encuentra el Hospital/Clínica.")
            isValid = false
        }

        if(size(formData.municipality) < 3) {
            setErrorMunicipality("Ingresa el municipio/delegación/alcadía en el que se encuentra el Hospital/Clínica correctamente.")
            isValid = false
        }

        if(size(formData.hospital) < 8) {
            setErrorHospital("Ingresa el hospital en el que se encuentra el Hospital/Clínica correctamente.")
            isValid = false
        }

        if(size(formData.city) < 5) {
            setErrorCity("Ingresa el nombre de la ciudad en la que se encuentra el Hospital/Clínica correctamente.")
            isValid = false
        }

        if (isEmpty(formData.city)) {
            setErrorCity("Ingresa el nombre de la ciudad en la que se encuentra el Hospital/Clínica.")
            isValid = false
        }

        if(size(formData.suburb) < 5) {
            setErrorSuburb("Ingresa la colonia en la que se encuentra el Hospital/Clínica correctamente.")
            isValid = false
        }

        if (isEmpty(formData.suburb)) {
            setErrorSuburb("Ingresa el nombre de la colonia en la que se encuentra el Hospital/Clínica.")
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

        if (!locationDoctor) {
            toastRef.current.show("Localiza la ubicación del Hospital/Clínica en el mapa. Presionando al ícono de ubicación con color gris en el apartado de Dirección del restaurante.", 5000)
            isValid = false
        } else if(size(imagesSelected) === 0) {
            toastRef.current.show("Ingresa al menos una imagen a tu publicación. Presionando al icóno inferior de la cámara dentro del recuadro rojo.", 5000)
            isValid = false
        }

        return isValid
    }

    const clearErrors = () => {
        setErrorName(null)
        setErrorEmail(null)
        setErrorAddress(null)
        setErrorPhone(null)
        setErrorAddphone(null)
        setErrorCity(null)
        setErrorComment(null)
        setErrorSuburb(null)
        setErrorMunicipality(null)
        setErrorHospital(null)
    }

    return (
        <ScrollView style={styles.viewContainer}>
            <ImageDoctor
                imageDoctor={imagesSelected[0]}
            />
            <FormAdd
                formData={formData}
                setFormData={setFormData}
                errorName={errorName}
                errorEmail={errorEmail}
                errorAddress={errorAddress}
                errorPhone={errorPhone}
                errorAddphone={errorAddphone}
                errorCity={errorCity}
                errorComment={errorComment}
                errorSuburb={errorSuburb}
                errorMunicipality={errorMunicipality}
                errorHospital={errorHospital}
                setIsVisibleMap={setIsVisibleMap}
                locationDoctor={locationDoctor}
            />
            <UploadImage
                toastRef={toastRef}
                imagesSelected={imagesSelected}
                setImagesSelected={setImagesSelected}
            />

            <Text style={styles.subtext}>IMPORTANTE. En la primera foto tiene que estar una imagen del Hospital/Clínica. Si usted desea, puede agregar más fotos con temas variados y de su preferencia. {'\n'}{'\n'}Esto con el fin de que el donador sepa a quién le va a donar sangre. </Text>
            
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

                      <View style={styles.checkBoxContainer}>
                                    <CheckBox
                                        center
                                        color= "#F41635"
                                        checked={check3}
                                        onPress={() => setCheck3(!check3)}
                                        iconStyle={{ margTop: -100 }}
                                    />
                                    
                                    <Text style={{marginRight: 60,}}>Acepto ser el dueño o empleado del Hospital o Clínica con autoridad de un directivo del Hospital o Clínica para publicar estos datos del Hospital o Clínica</Text>
                                </View>

                      <TouchableOpacity
                          style={[styles.continueBotton, 
                          {backgroundColor: check3
                          ? '#F41635' : 'grey' }
                          ]}
                          disabled={!check3}
                          onPress={() => addHospital(false)}>
                              <Text style={{color: "#fff"}}>Crear Publicación</Text>
                          </TouchableOpacity>

                      
                  
              </ScrollView>
              </SafeAreaView>
     
  </View>
            <MapDoctor
                isVisibleMap={isVisibleMap}
                setIsVisibleMap={setIsVisibleMap}
                setLocationDoctor={setLocationDoctor}
                toastRef={toastRef}
            />
        </ScrollView>
    )
}

function MapDoctor({ 
    isVisibleMap, 
    setIsVisibleMap, 
    setLocationDoctor, 
    toastRef, 
}) {
    const [newRegion, setNewRegion] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await getCurrentLocation()
            if (response.status) {
                setNewRegion(response.location)
            }
        })()
    }, [])
    
    const confirmLocation = () => {
        setLocationDoctor(newRegion)
        toastRef.current.show("Localización guardada exitosamente.", 10000)
        setIsVisibleMap(false)
    }

    return (
        <Modal isVisible={isVisibleMap} setVisible={setIsVisibleMap}>
            <View>
                {
                    newRegion && (
                        <MapView
                            style={styles.mapStyle} 
                            initialRegion={newRegion}
                            showsUserLocation={true}
                            onRegionChange={(region) => setNewRegion(region)}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: newRegion.latitude,
                                    longitude: newRegion.longitude
                                }}
                                draggable
                            />

                        </MapView>
                    )
                }
                <View style={styles.viewMapBtn}>
                    <Button
                        title="Guardar Ubicación"
                        containerStyle={styles.viewMapBtnContainerSave}
                        buttonStyle={styles.viewMapBtnSave}
                        onPress={confirmLocation}
                    />

                    <Button
                        title="Cancelar Ubicación"
                        containerStyle={styles.viewMapBtnContainerCancel}
                        buttonStyle={styles.viewMapBtnCancel}
                        onPress={() => setIsVisibleMap(false)}
                    />  
                </View>

            </View>
        </Modal>
    )
}

function ImageDoctor({ imageDoctor }) {
    return (
        <View style={styles.viewPhoto}>
            <Image
            style={{ width: widthScreen, height: 200 }}
                source={
                    imageDoctor
                        ? { uri: imageDoctor }
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
                map(imagesSelected, (imageDoctor, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{ uri: imageDoctor}}
                        onPress={() => removeImage(imageDoctor)}
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
    errorEmail, 
    errorAddress, 
    errorPhone, 
    errorAddphone,
    errorMunicipality,
    errorHospital,
    errorCity, 
    errorSuburb,
    setIsVisibleMap,
    locationDoctor
}) {
    const [country, setCountry] = useState("MX")
    const [callingCode, setCallingCode] = useState("52")
    const [phone, setPhone] = useState("")

    const onChange = (e, type) => {
        setFormData({ ...formData, [type] : e.nativeEvent.text })
    }

    const navigation = useNavigation()

    return (
        <View style={styles.viewForm}>
            <Input
                placeholder="Nombre del Hospital/Clínica"
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
                errorMessage={errorAddphone}
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
                placeholder="Descripción del Hospital/Clínica"
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
                placeholder="¿En qué área del Hospital/Clínica se encuentra el banco de sangre?"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.hospital}
                onChange={(e) => onChange(e, "hospital")}
                errorMessage={errorHospital}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="hospital-building"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            /> 

            <Input
                placeholder="¿En qué ciudad se encuentra el Hospital/Clínica?"
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
                placeholder="¿En qué Municipio/Delegación/Alcaldía se encuentra el Hospital/Clínica?"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.municipality}
                onChange={(e) => onChange(e, "municipality")}
                errorMessage={errorMunicipality}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="map-marker-radius"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />   
            
            <Input
                placeholder="¿En qué colonia se encuentra el Hospital/Clínica?"
                multiline
                containerStyle={styles.textArea}
                defaultValue={formData.suburb}
                onChange={(e) => onChange(e, "suburb")}
                errorMessage={errorSuburb}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="map-marker-radius"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />  

            <Input
                placeholder="Ubicación del Hospital/Clínica"
                containerStyle={styles.textArea}
                defaultValue={formData.address}
                onChange={(e) => onChange(e, "address")}
                multiline
                errorMessage={errorAddress}
                rightIcon={{
                    type: "material-community",
                    name: "google-maps",
                    color: locationDoctor ? "#F41635" : "#c2c2c2",
                    onPress: () => setIsVisibleMap(true)
                }}

                leftIcon={
                    <Icon
                        type="material-community"
                        name="map-marker-radius"
                        size={27}
                        iconStyle={styles.iconLeft}
                    />
            }
            />    

<Text style={styles.social}>Redes Sociales</Text>
            
            <Input
                placeholder="Pon el nombre de la página o cuenta de Facebook del Hospital o Clínica (opcional)"
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
                placeholder="Pon el link de la página o cuenta de Facebook del Hospital o Clínica (opcional)"
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
                placeholder="Pon el nombre de la cuenta de Instagram del Hospital o Clínica (opcional)"
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
                placeholder="Pon el link de la cuenta de Instagram del Hospital o Clínica (opcional)"
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
                placeholder="Pon el nombre de la cuenta de TikTok del Hospital o Clínica (opcional)"
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
                placeholder="Pon el link de la cuenta de TikTok del Hospital o Clínica (opcional)"
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
                placeholder="Pon el nombre del canal de YouTube del Hospital o Clínica (opcional)"
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
                placeholder="Pon el link del canal de YouTube del Hospital o Clínica (opcional)"
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


            <Text style={styles.text}>IMPORTANTE. Presione el ícono derecho en color gris, para mostrar la ubicación con Google Maps. {'\n'} {'\n'}Esto se hace con el fin de que el donante sepa a dónde acudir para donar sangre, y salvar la vida de los pacientes.</Text>

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
        comment: "",
        city: "",
        municipality: "",
        hospital: "",
        suburb: "",
        facebook: "",
        facebooklink: "",
        instagram: "",
        instagramlink: "",
        tiktok: "",
        tiktoklink: "",
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

    social: {
        color: "#F41635",
        fontSize: 20,
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
        marginTop: -10,
        padding: 20,
        marginBottom: 20,
        borderRadius: 18,
    },

    checkHospitalBox: {
        width: 30,
        marginTop: -70,
        height: 30,
        marginRight: 20,
        color: "#F41635"
    },
})