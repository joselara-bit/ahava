import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Platform, Alert} from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Loading from '../Loading'
import { validateEmail } from '../../utils/Helpers'
import { loginWithEmailAndPassword } from '../../utils/Actions'
import { isEmpty } from 'lodash'

import * as GoogleSignIn from 'expo-google-sign-in'
import * as firebase from 'firebase'

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange = ( e, type ) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    async function googleSignInAsync() {
        try {
            await GoogleSignIn.initAsync()
            if (Platform.OS === "android") {
                await GoogleSignIn.askForPlayServicesAsync()
            }
            const { type, user } = await GoogleSignIn.signInAsync()
            if (type === "success") {
                onSignIn(user)
                setLoading(false)
                return true
            } else {
                setLoading(false)
                Alert.alert(JSON.stringify(result))
                return { cancelled: true }
            }
        } catch (error) {
            setLoading(false)
            Alert.alert(error.message)
            return { error: true }
        }
    }
      
    function onSignIn(googleUser) {
        const unsubscribe = firebase
            .auth()
            .onAuthStateChanged(function (firebaseUser) {
                unsubscribe()
                if (!isUserEqual(googleUser, firebaseUser)) {
                    const credential = firebase.auth.GoogleAuthProvider.credential(
                        googleUser.auth.idToken,
                        googleUser.auth.accessToken
                    )
                    setLoading(true);
                    firebase
                        .auth()
                        .signInWithCredential(credential)
                        .then(() => {
                            setLoading(false)
                        })
                        .catch(function (error) {
                            setLoading(false)
                            Alert.alert(error.message)
                        })
                } else {
                    Alert.alert("Usuario ya está logueado")
                }

                navigation.navigate("Profile")
            });

            navigation.navigate("Profile")
    }
      
    function isUserEqual(googleUser, firebaseUser) {
        if (firebaseUser) {
            let providerData = firebaseUser.providerData
            for (let i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    return true
                }
            }
        }
        return false
    }

    const doLogin = async() => {
            if (!validateData()) {
                return;
            }

            setLoading(true)
            const result = await loginWithEmailAndPassword(formData.email, formData.password)
            setLoading(false)
                
                if (!result.statusReponse) {
                    setErrorEmail(result.error)
                    setErrorPassword(result.error)
                    return
                }
    
                navigation.navigate("Profile")
    }

    const validateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true
        
        if(!validateEmail(formData.email)) {
            setErrorEmail("Ingresa un correo electrónico válido.")
            isValid = false
        }

        if(isEmpty(formData.password)) {
            setErrorPassword("Ingresa tu contraseña.")
            isValid = false
        }

        return isValid
    }


    return (
        <View style={styles.container}>

    <Text style={styles.text}>Correo electrónico</Text>

    <Input
        placeholder="Correo electrónico"
        placeholderTextColor="#F41635"
        keyboardType="email-address"
        onChange={(e) => onChange(e, "email")}
        containerStyle={styles.input}
        style={styles.textInput}
        errorMessage={errorEmail}
        defaultValue={formData.email}
        inputContainerStyle={{ borderColor: "#F41635" }}
        leftIcon={
            <Icon
                type="material-community"
                name="email"
                size={28}
                iconStyle={styles.iconLeft}
            />
    }
    />

    <Text style={styles.text}>Contraseña</Text>

    <Input
        placeholder="Contraseña"
        placeholderTextColor="#F41635"
        onChange={(e) => onChange(e, "password")}
        password={true}
        secureTextEntry={!showPassword}
        containerStyle={styles.input}
        style={styles.textInput}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        inputContainerStyle={{ borderColor: "#F41635" }}
        rightIcon={
            <Icon
                type="ionicon"
                name={ showPassword ? "eye-off-outline" : "eye-outline"}
                size={27}
                iconStyle={styles.icon}
                onPress={() => setShowPassword(!showPassword)}
            />
    }
        leftIcon={
            <Icon
                type="ionicon"
                name="ios-lock-closed"
                size={28}
                iconStyle={styles.iconLeft}
            />
    }
    />

    <Button
        title="Iniciar Sesión" 
        placeholderTextColor="#fff"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        inputContainerStyle={{ borderColor: "#fff" }}
        onPress={() => doLogin()}
    />

  {/*   <Button
        title="Iniciar Sesión con Google" 
        placeholderTextColor="#fff"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnGoogle}
        inputContainerStyle={{ borderColor: "#fff" }}
        onPress={googleSignInAsync}
        icon={
            <Icon
                name="google"
                type="material-community"
                marginRight={10}
                size={20}
                color="#fff"
            />
        }
    /> */}

    <Loading
        isVisible={loading} text="Iniciando sesión..."
    />
            </View>
        )
    }

    const defaultFormValues = () => {
        return { name: "", password: "" }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    textInput: {
        color: '#F41635',
        fontSize: 17,
    },

    input: {
        width: "100%",
        color: "#F41635"
    },

    btnContainer: {
        marginTop: 10,
        width: "90%",
        alignSelf: "center",
    },

    btn: {
        backgroundColor: "#F41635",
        marginHorizontal: 30,
        marginBottom: 15,
        borderRadius: 10,
    },

    text: {
        color: "#F41635",
        fontWeight: "bold",
        fontSize: 22,
        marginLeft: 8,
    },

    icon: {
        color: "#F41635",
    },

    iconLeft: {
        color: "#F41635",
        marginRight: 1,
    },

    btnGoogle: {
        backgroundColor: "#F41635", 
        borderRadius: 10,
    },
})
