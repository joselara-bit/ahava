import React, { useState, useRef, useEffect, useFocusEffect, useCallback } from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, ScrollView, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { closeSession, getCurrentUser, deleteUser } from '../../utils/Actions'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import InfoUser from '../../components/Profile/InfoUser'
import ProfileOptions from '../../components/Profile/ProfileOptions'

export default function UserLogged({ route }) {
    const toastRef = useRef()
    const navigation = useNavigation()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)
    const [reloadUser, setReloadUser] = useState(false)

    const closeUser = () => {
        Alert.alert (
            "Cerrar Sesión",
            "¿Estás segura/o de que quieres cerrar sesión?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                
                {
                    text: "Sí",
                    onPress: () => {
                        closeSession(navigation.navigate("Login")) 
                    }
                }
            ],
            {
                cancelable: true
            }
        )
    }

    const deletePost = () => {
        Alert.alert (
            "Eliminar Campaña",
            "¿Estás segura/o de que quieres eliminar tu campaña?\n\nSe te redirigirá a otra pestaña, para eliminar tu campaña.",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                
                {
                    text: "Sí",
                    onPress: () => {
                        navigation.navigate("DeletePost")
                    }
                }
            ],
            {
                cancelable: true
            }
        )
    }

    const deleteUser = () => {
        Alert.alert (
            "Eliminar Usuario",
            "¿Estás segura/o de que quieres eliminar tu usuario?\n\nSe te redirigirá a otra pestaña, para eliminar tu usuario.",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                
                {
                    text: "Sí",
                    onPress: () => {
                        navigation.navigate("DeleteUser")
                    }
                }
            ],
            {
                cancelable: true
            }
        )
    }

    useEffect(() => {
        setUser(getCurrentUser())
        setReloadUser(false)
    }, [reloadUser])

        return (
        <ScrollView style={styles.container}>
        {
            user && (
                <View>
                    <InfoUser 
                        user={user} 
                        users={users}
                        setLoading={setLoading} 
                        setLoadingText={setLoadingText}
                    />
                    <ProfileOptions
                        user={user}
                        /* displayName={displayName} */
                        toastRef={toastRef}
                        setReloadUser={setReloadUser}
                    />
                </View>
            )
        }
            <Button
                title="Cerrar Sesión"
                buttonStyle={styles.btnDeleteUser}
                titleStyle={styles.btnDeleteUserTitle}
                onPress={() => {
                    closeUser()
                }}
            />

            <Button
                title="Eliminar Campaña"
                buttonStyle={styles.btnDeletePost}
                titleStyle={styles.btnDeleteUserTitle}
                onPress={() => {
                    deletePost() //AGREGAR BOTON DE ACEPTACIÓN ADVIRTIENDO LAS CONSECUENCIAS DE ELIMINAR EL USUARIO Y CERRAR SESION
                }}
            />

            <Button
                title="Eliminar Usuario"
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionTitle}
                onPress={() => {
                    deleteUser()
                }}
            />

<Text style={styles.right}>© 2021 Ahavá. Todos los derechos reservados. 2021</Text>
  
  <Text style={styles.rights}>Desarrollado y diseñado por DonTrino       Versión: 1.1.4</Text>

            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text={loadingText}/>
        </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: "#fff",
        marginVertical: 20
    },
    
    btnCloseSession: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        marginTop: 0,
        marginBottom: 10,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 12,
        marginTop: 0,
        marginVertical: 45,
    },

    btnDeleteUser: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        marginTop: 25,
        marginVertical: 70,
        marginBottom: 40,
    },

    right: {
        left: 15,
        color: "grey",
        marginTop: 15,
        fontSize: 14,
    },

    rights: {
        left: 10,
        color: "grey",
        marginTop: 5,
        marginBottom: 35,
        fontSize: 14,
    },

    version: {
        left: 270,
        bottom: -240,
        color: "grey"
    },

})
