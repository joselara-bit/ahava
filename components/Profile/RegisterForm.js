import React, {useState, useRef} from 'react'
import { isEmpty, size } from 'lodash'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { Input, Icon, Button, CheckBox } from 'react-native-elements'
import { validateEmail } from '../../utils/Helpers'
import { useNavigation } from '@react-navigation/native'
import { registerUser, getToken, addDocumentWithId, getCurrentUser } from '../../utils/Actions'
import Loading from '../Loading'

export default function RegisterForm({ email, toastRef }) {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const [toogleCheckBox, setToogleCheckBox] = useState(false);
    const [termsToogleCheckBox, setTermsToogleCheckBox] = useState(false);
    const [complianceModal, setComplianceModal] = useState(true);
    const [termsComplianceModal, setTermsComplianceModal] = useState(true);

    const navigation = useNavigation()

    const onChange = ( e, type ) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    const doRegisterUser = async() => {
        if (!validateData()) {
            return;
        }

        setLoading(true)
        const result = await registerUser(formData.email, formData.password)
        if (!result.statusResponse) {
            setLoading(false)
            setErrorEmail(result.error)
            return
        }     

        setLoading(false)
        navigation.navigate("Profile")
    }

    const privacy = async () => {
        await Linking.openURL("https://ahavaone.web.app/privacy")
    };

    const terms = async() => {
        await Linking.openURL("https://ahavaone.web.app/terms")
    };

    const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true
        
        if(!validateEmail(formData.email)) {
            setErrorEmail("Ingresa un correo electrónico válido.")
            isValid = false
        }

        if(isEmpty(formData.password)) {
            setErrorPassword("Ingresa una contraseña.")
            isValid = false
        }

        if(size(formData.password) < 6) {
            setErrorPassword("Ingresa una contraseña de al menos 6 carácteres.")
            isValid = false
        }

        if(size(formData.confirm) < 6) {
            setErrorConfirm("Ingresa una contraseña de al menos 6 carácteres.")
            isValid = false
        }

        if(formData.password !== formData.confirm) {
            setErrorPassword("La confirmación no coincide con la contraseña.")
            setErrorConfirm("La confirmación no coincide con la contraseña.")
            isValid = false
        }

        return isValid
    }

    return (
        <View style={styles.form}>

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

            <Text style={styles.text}>Confirmar contraseña</Text>  

            <Input
                placeholder="Confirma tu contraseña"
                placeholderTextColor="#F41635"
                onChange={(e) => onChange(e, "confirm")}
                password={true}
                secureTextEntry={!showPassword}
                containerStyle={styles.input}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                style={styles.textInput}
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
                        name="lock-closed"
                        size={28}
                        iconStyle={styles.iconLeft}
                    />
            }
            />

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
                          onPress={() => doRegisterUser(false)}>
                              <Text style={{color: "#fff"}}>Registrar Usuario</Text>
                          </TouchableOpacity>

                      
                  
              </ScrollView>
              </SafeAreaView>
     
  </View>

           

            <Loading
                isVisible={loading} text="Creando usuario..."
            />
        </View>
    )
}

const defaultFormValues = () => {
    return { email: "", password: "", confirm: ""}
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200,
        paddingHorizontal: 10,
    },

    textInput: {
        color: '#F41635',
        fontSize: 17,
    },

    input: {
        width: "92%",
        color: "#F41635"
    },

    btnContainer: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
    },

    btn: {
        backgroundColor: "#F41635",
        marginHorizontal: 30,
        marginBottom: 40,
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
        
    }
})
