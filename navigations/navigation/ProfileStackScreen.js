import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from '../../screens/Profile/ProfileScreen'
import LoginScreen from '../../screens/Profile/LoginScreen'
import RegisterScreen from '../../screens/Profile/RegisterScreen'
import FavoriteScreen from '../../screens/Profile/FavoriteScreen'
import RecoverPassword from '../../screens/Profile/RecoverPassword'
import TopDoctorsScreen from '../../screens/Profile/TopDoctorsScreen'
import PrivacyScreen from '../../screens/Profile/PrivacyScreen'
import TermsScreen from '../../screens/Profile/TermsScreen'
import PostBloodCampain from '../../screens/Profile/PostBloodCampain'
import PostPKUCampain from '../../screens/Profile/PostPKUCampain'
import PostHospitalPKU from '../../screens/Profile/PostHospitalPKU'
import PostMoneyCampain from '../../screens/Profile/PostMoneyCampain'
import PostHospital from '../../screens/Profile/PostHospital'
import MoneyCampain from '../../screens/Profile/MoneyCampain'
import BloodCampain from '../../screens/Profile/BloodCampain'
import LinkCampain from '../../screens/Profile/LinkCampain'
import LinkCampainAdd from '../../screens/Profile/LinkCampainAdd'
import LinkCampainAlone from '../../screens/Profile/LinkCampainAlone'
import LinkCampainFacebook from '../../screens/Profile/LinkCampainFacebook'
import LinkCampainInstagram from '../../screens/Profile/LinkCampainInstagram'
import LinkCampainTiktok from '../../screens/Profile/LinkCampainTiktok'
import LinkCampainYoutube from '../../screens/Profile/LinkCampainYoutube'
import LinkCampainTwitter from '../../screens/Profile/LinkCampainTwitter'
import LinkCampainLinkedin from '../../screens/Profile/LinkCampainLinkedin'
import DataProtection from '../../screens/Profile/DataProtection'
import Ahava from '../../screens/Profile/Ahava'
import SupportScreen from '../../screens/Profile/SupportScreen'
import DonationScreen from '../../screens/Profile/DonationScreen'
import ComplaintsScreen from '../../screens/Profile/ComplaintsScreen'
import CommentsScreen from '../../screens/Profile/CommentsScreen'
import DeletePostScreen from '../../screens/Profile/DeletePostScreen'
import DeleteUserScreen from '../../screens/Profile/DeleteUserScreen'
import PKUScreen from '../../screens/PKU/PKUScreen'
import BankScreen from '../../screens/Profile/BankScreen'
import LicenseScreen from '../../screens/Profile/LicenseScreen'
import bottomtabs from '../../screens/Profile/License/bottom-tabs'
import nodejs from '../../screens/Profile/License/nodejs'
import checkbox from '../../screens/Profile/License/check-box'
import maskedview from '../../screens/Profile/License/community-masked-view'
import drawer from '../../screens/Profile/License/drawer'
import materialbottomtabs from '../../screens/Profile/License/material-bottom-tabs'
import native from '../../screens/Profile/License/native'
import stack from '../../screens/Profile/License/stack'
import expo from '../../screens/Profile/License/expo'
import expogooglesignin from '../../screens/Profile/License/expo-google-sign-in'
import expoimagepicker from '../../screens/Profile/License/expo-image-picker'
import expolinking from '../../screens/Profile/License/expo-linking'
import expolocation from '../../screens/Profile/License/expo-location'
import exponotifications from '../../screens/Profile/License/expo-notifications'
import expopermissions from '../../screens/Profile/License/expo-permissions'
import expostatusbar from '../../screens/Profile/License/expo-status-bar'
import firebase from '../../screens/Profile/License/firebase'
import firesql from '../../screens/Profile/License/firesql'
import randomuuidv4 from '../../screens/Profile/License/random-uuid-v4'
import react from '../../screens/Profile/License/react'
import reactdom from '../../screens/Profile/License/react-dom'
import reactnative from '../../screens/Profile/License/react-native'
import reactnativecountrypickermodal from '../../screens/Profile/License/react-native-country-picker-modal'
import reactnativeeasytoast from '../../screens/Profile/License/react-native-easy-toast'
import reactnativeelements from '../../screens/Profile/License/react-native-elements'
import reactnativegesturehandler from '../../screens/Profile/License/react-native-gesture-handler'
import reactnativekeyboardawarescrollview from '../../screens/Profile/License/react-native-keyboard-aware-scroll-view'
import reactnativemaps from '../../screens/Profile/License/react-native-maps'
import reactnativeopenmaps from '../../screens/Profile/License/react-native-open-maps'
import reactnativereanimated from '../../screens/Profile/License/react-native-reanimated'
import reactnativesafeareacontext from '../../screens/Profile/License/react-native-safe-area-context'
import reactnativescreens from '../../screens/Profile/License/react-native-screens'
import reactnativesnapcarousel from '../../screens/Profile/License/react-native-snap-carousel'
import reactnativeswiper from '../../screens/Profile/License/react-native-swiper'
import reactnativevectoricons from '../../screens/Profile/License/react-native-vector-icons'
import reactnativeweb from '../../screens/Profile/License/react-native-web'
import redux from '../../screens/Profile/License/redux'
import reduxsaga from '../../screens/Profile/License/redux-saga'
import reactnativepaper from '../../screens/Profile/License/react-native-paper'

const Stack = createStackNavigator()

export default function ProfileStackScreen() {
   
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTintColor:"#F41635", 
                    title: "Iniciar Sesión",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#FFF',
                      }, }}
            />
            <Stack.Screen
                name="Registro"
                component={RegisterScreen}
                options={{
                    headerTintColor:"#F41635", 
                    title: "Regístrate",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#FFF',
                      }, }}
            />

            <Stack.Screen
                name="Recuperar Contraseña"
                component={RecoverPassword}
                options={{
                    headerShown: false,
                    headerTintColor:"#F41635", 
                    title: "Recuperar Contraseña",
                }}
            />

            <Stack.Screen
                name="FavoriteDoctors"
                component={FavoriteScreen}
                options={{ headerTintColor:"#F41635", title: "Tus Doctores Favoritos" }}
            />

            <Stack.Screen
                name="TopDoctors"
                component={TopDoctorsScreen}
                options={{ headerTintColor:"#F41635", title: "Top Mejores Doctores" }}
            />

            <Stack.Screen
                name="Privacy"
                component={PrivacyScreen}
                options={{ headerTintColor:"#F41635", title: "Aviso de Privacidad", headerShown: false }}
            />

            <Stack.Screen
                name="Terms"
                component={TermsScreen}
                options={{ headerTintColor:"#F41635", title: "Términos y Condiciones", headerShown: false }}
            />

            <Stack.Screen
                name="BloodCampain"
                component={BloodCampain}
                options={{ headerTintColor:"#F41635", title: "Campaña Solicitando Sangre" }}
            />

            <Stack.Screen
                name="MoneyCampain"
                component={MoneyCampain}
                options={{ headerTintColor:"#F41635", title: "Campaña Solicitando Apoyo Económico" }}
            />

            <Stack.Screen
                name="Blood"
                component={PostBloodCampain}
                options={{ headerTintColor:"#F41635", title: "Solicitar Sangre", headerShown: false }}
            />

            <Stack.Screen
                name="PKU"
                component={PostPKUCampain}
                options={{ headerTintColor:"#F41635", title: "Publicar Campaña de PKU o Enfermedades poco conocidas", headerShown: false }}
            />

            <Stack.Screen
                name="PostHospitalPKU"
                component={PostHospitalPKU}
                options={{ headerTintColor:"#F41635", title: "Publicar Campaña de PKU o Enfermedades poco conocidas", headerShown: false }}
            />

            <Stack.Screen
                name="PKUScreen"
                component={PKUScreen}
                options={{ headerTintColor:"#F41635", headerShown: false }}
            />

            <Stack.Screen
                name="Money"
                component={PostMoneyCampain}
                options={{ headerTintColor:"#F41635", title: "Solicitar Apoyo Económico", headerShown: false }}
            />

            <Stack.Screen
                name="Hospital"
                component={PostHospital}
                options={{ headerTintColor:"#F41635", title: "Publicar Hospital/Clínica", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampain"
                component={LinkCampain}
                options={{ headerTintColor:"#F41635", title: "Sacar link de una página web", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainAdd"
                component={LinkCampainAdd}
                options={{ headerTintColor:"#F41635", title: "Sacar link de una página web", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainAlone"
                component={LinkCampainAlone}
                options={{ headerTintColor:"#F41635", title: "Sacar link de una página web", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainFacebook"
                component={LinkCampainFacebook}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu página de Facebook", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainInstagram"
                component={LinkCampainInstagram}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu cuenta de Instagram", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainTiktok"
                component={LinkCampainTiktok}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu cuenta de TikTok", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainYoutube"
                component={LinkCampainYoutube}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu cuenta de YouTube", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainTwitter"
                component={LinkCampainTwitter}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu cuenta de Twitter", headerShown: false }}
            />

            <Stack.Screen
                name="LinkCampainLinkedin"
                component={LinkCampainLinkedin}
                options={{ headerTintColor:"#F41635", title: "Sacar link de tu cuenta de Linkedin", headerShown: false }}
            />

            <Stack.Screen
                name="DataProtection"
                component={DataProtection}
                options={{ headerTintColor:"#F41635", title: "¿Cómo protegemos tus datos?", headerShown: false }}
            />

            <Stack.Screen
                name="Ahava"
                component={Ahava}
                options={{ headerTintColor:"#F41635", title: "Acerca de Ahavá", headerShown: false}}
            />

            <Stack.Screen
                name="Support"
                component={SupportScreen}
                options={{ headerTintColor:"#F41635", title: "Soporte", headerShown: false, tabBarVisible: false}}
            />

            <Stack.Screen
                name="Donation"
                component={DonationScreen}
                options={{ headerTintColor:"#F41635", headerShown: false, tabBarVisible: false}}
            />

            <Stack.Screen
                name="Complaints"
                component={ComplaintsScreen}
                options={{ headerTintColor:"#F41635", title: "Quejas", headerShown: false}}
            />

            <Stack.Screen
                name="Comments"
                component={CommentsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Bank"
                component={BankScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DeletePost"
                component={DeletePostScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DeleteUser"
                component={DeleteUserScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="License"
                component={LicenseScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="bottom-tabs"
                component={bottomtabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="nodejs"
                component={nodejs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="checkbox"
                component={checkbox}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="maskedview"
                component={maskedview}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="drawer"
                component={drawer}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="material-bottom-tabs"
                component={materialbottomtabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="native"
                component={native}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="stack"
                component={stack}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo"
                component={expo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="google-sign-in"
                component={expogooglesignin}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-image-picker"
                component={expoimagepicker}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-linking"
                component={expolinking}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-location"
                component={expolocation}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-notifications"
                component={exponotifications}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-permissions"
                component={expopermissions}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="expo-status-bar"
                component={expostatusbar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="firebase"
                component={firebase}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="firesql"
                component={firesql}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="randomuuidv4"
                component={randomuuidv4}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react"
                component={react}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-dom"
                component={reactdom}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native"
                component={reactnative}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-country-picker-modal"
                component={reactnativecountrypickermodal}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-easy-toast"
                component={reactnativeeasytoast}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-elements"
                component={reactnativeelements}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-gesture-handler"
                component={reactnativegesturehandler}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-keyboard-aware-scroll-view"
                component={reactnativekeyboardawarescrollview}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-maps"
                component={reactnativemaps}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-open-maps"
                component={reactnativeopenmaps}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-paper"
                component={reactnativepaper}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-reanimated"
                component={reactnativereanimated}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-safe-area-context"
                component={reactnativesafeareacontext}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-screens"
                component={reactnativescreens}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-snap-carousel"
                component={reactnativesnapcarousel}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-swiper"
                component={reactnativeswiper}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-vector-icons"
                component={reactnativevectoricons}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="react-native-web"
                component={reactnativeweb}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="redux"
                component={redux}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="redux-saga"
                component={reduxsaga}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}