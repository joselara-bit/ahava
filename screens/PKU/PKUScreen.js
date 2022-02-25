import React, {useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import firebase from 'firebase/app'
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Loading from "../../components/Loading"
import { getUsersPKU, getMoreUsersPKU, getHospitals, getMoreHospitals } from "../../utils/Actions"
import ListUsersPKU from '../../components/Doctors/ListUsersPKU'
import {size} from 'lodash'
import Swiper from 'react-native-swiper'

export default function PKUScreen() {
    const navigation = useNavigation()
    const [startUserPKU, setStartUserPKU] = useState(null)
    const [usersPKU, setUsersPKU] = useState([])
    const [loading, setLoading] = useState(false)

    const limitUsersPKU = 7

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                
                setLoading(true);
                const response = await getUsersPKU(limitUsersPKU);
                if(response.statusResponse) {
                    setStartUserPKU(response.startUserPKU);
                    setUsersPKU(response.usersPKU);
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        if (!startUserPKU) {
            return
        }

        setLoading(true);
            const response = await getMoreUsersPKU( limitUsersPKU, startUserPKU );
                
            if(response.statusResponse) {
                setStartUserPKU(response.startUserPKU);
                setUsersPKU([...usersPKU, ...response.usersPKU]);
            }
        setLoading(false);
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", top: 35, left: 53, color: "#F41635"}}>PKU y Enfermedades Poco Conocidas</Text>
        <Icon 
                  type="entypo"
                  name="menu"
                  color="#F41635"
                  size={28}
                  containerStyle={styles.drawerIcon}
                  onPress= {() => navigation.openDrawer()}
              />
            <View style={styles.sliderContainer}>
                <Swiper autoplay activeDotColor="#F41635" height={200}>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/ahava(1).png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/Cordale(3).png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>

                <Button
                    title="Campañas Urgentes"
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("UrgentPKU")}
                />

                <Button
                    title="Conoce Más"
                    buttonStyle={styles.btnMore}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("Information")}
                />

                <Button
                    title="Historias"
                    buttonStyle={styles.btnDeletePost}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("PKUHistories")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: -10, color: "#F41635"}}>Campañas PKU y de Enfermedades Poco Conocidas</Text>
        {
            size(usersPKU) > 0 ? (
                
                <ListUsersPKU
                    usersPKU={usersPKU}
                    navigation={navigation}
                    handleLoadMore={handleLoadMore}
                />
                
            ) : (
                <View style={styles.notFoundView}>
                    <Text style={styles.notFoundText}>No hay campañas disponibles.</Text>
                </View>
            )
            
        }
        <Loading isVisible={loading} text="Cargando listado de campañas..."/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
       /*  marginBottom: 70 */
    },

    btnContainer: {
        position: "relative",
        bottom: -150,
        right: 10,
        shadowColor: "black",
        shadowOffset: { width: 20, height: 20},
        shadowOpacity: 0.5
    },

    notFoundView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },

    notFoundText: {
        fontSize: 18,
        fontWeight: "bold"
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        marginTop: 10
    },

    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },

    btnCloseSession: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: 25,
        bottom: -10,
        marginVertical: 30,
    },

    btnMore: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: 5,
        bottom: -10,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: -15,
        bottom: -50,
        marginVertical: 30,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        top: 10,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
    },

    icon: {
        left: 140,
        top: 0
    },

    drawerIcon: {
        left: -155,
        top: -24
    },
})
