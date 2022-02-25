import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Button, Icon, Image } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import { deleteFavorite, getFavorites } from '../../utils/Actions'
import Toast from 'react-native-easy-toast'
import firebase from 'firebase/app'
import Loading from '../../components/Loading'

export default function PKUCampain({ navigation }) {
    const toastRef = useRef()
    const [usersPKU, setUsersPKU] = useState(null)
    const [userLogged, setUserLogged] = useState(null)
    const [loading, setLoading] = useState(false)
    const [reloadData, setReloadData] = useState(false)

    firebase.auth().onAuthStateChanged((user) => {
        user ? setUserLogged(true) : setUserLogged(false)
    })

    useFocusEffect(
        useCallback(() => {
            if (userLogged) {
                async function getData() {
                    setLoading(true)
                    const response = await getFavorites()
                    setDoctors(response.doctors)
                    setLoading(false)
                }
                getData()
            }
            setReloadData(false)
        }, [userLogged, reloadData])
    )

    if (!userLogged) {
        return <UserNoLogged navigation={navigation}/>
    }

    if (!usersPKU) {
        return <Loading isVisible={true} text="Cargando Campañas"/>
    } else if(usersPKU?.length === 0) {
        return <NotFoundDoctors/>
    }

    return (
        <View style={styles.viewBody}>
            {
                usersPKU ? (
                    <FlatList
                        data={doctors}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(doctor) => (
                            <Doctor
                                doctor={doctor}
                                setLoading={setLoading}
                                toastRef={toastRef}
                                navigation={navigation}
                                setReloadData={setReloadData}
                            />
                        )}
                    />
                ) : (
                    <View style={styles.loaderDoctor}>
                        <ActivityIndicator size="large"/>
                        <Text style={{ textAlign: "center" }}>
                            Cargando Campañas...
                        </Text>
                    </View>
                )
            }
            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text="Espere, por favor"/>
        </View>
    ) 
}

function Doctor({ doctor, setLoading, toastRef, navigation, setReloadData }) {
    const { id, name, images } = doctor.item

    const confirmRemoveFavorite = () => {
        Alert.alert (
            "Eliminar Médico de Favoritos",
            "¿Estás segura/o de querer borrar al médico de favoritos?",
            [
                {
                    text: "No",
                    style: "cancel"
                },

                {
                    text: "Sí",
                    onPress: removeFavorite
                }
            ],

            { cancelable: false }
        )
    }

    const removeFavorite = async() => {
        setLoading(true)
        const response = await deleteFavorite(id)
        setLoading(false)
        if (response.statusResponse) {
            setReloadData(true)
            toastRef.current.show("Médico eliminado de favoritos.", 3000)
        } else {
            toastRef.current.show("Error al eliminar al médico de favoritos.", 3000)
        }
    }

    return (
        <View style={styles.doctor}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Inicio", { 
                    screen: "doctor",
                    params: { id, name }
                })}
            >
                <Image 
                    resizeMode="cover"
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator color="#fff"/>}
                    source={{ uri: images[0] }}
                />
                <View style={styles.info}>  
                    <Text style={styles.name}>{name}</Text>
                    <Icon
                        type="material-community"
                        name="heart"
                        color="#38b6ff"
                        containerStyle={styles.favorite}
                        underlayColor="transparent"
                        onPress={confirmRemoveFavorite}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },

    loaderDoctor: {
        marginVertical: 10,
    },

    doctor: {
        margin: 10,
    },

    image: {
        width: "100%",
        height: 180
    },

    info: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: -30,
        backgroundColor: "#fff"
    },

    name: {
        fontWeight: "bold",
        fontSize: 20,
    },

    favorite: {
        marginTop: -35,
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 100
    }
})
