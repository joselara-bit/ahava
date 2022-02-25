import React, {useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import firebase from 'firebase/app'
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Loading from "../../components/Loading"
import { getDoctors, getMoreDoctors, getHospitals, getMoreHospitals } from "../../utils/Actions"
import ListDoctors from '../../components/Doctors/ListDoctors'
import ListHospitals from '../../components/Hospitals/ListHospitals'
import {size} from 'lodash'
import Swiper from 'react-native-swiper'

export default function BloodFoundationScreen() {
    const navigation = useNavigation()
    const [startDoctor, setStartDoctor] = useState(null)
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(false)

    const limitDoctors = 7

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                
                setLoading(true);
                const response = await getDoctors(limitDoctors);
                if(response.statusResponse) {
                    setStartDoctor(response.startDoctor);
                    setDoctors(response.doctors);
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        if (!startDoctor) {
            return
        }

        setLoading(true);
            const response = await getMoreDoctors( limitDoctors, startDoctor );
                
            if(response.statusResponse) {
                setStartDoctor(response.startDoctor);
                setDoctors([...doctors, ...response.doctors]);
            }
        setLoading(false);
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", top: 35, left: 60, color: "#F41635"}}>Fundaciones en Apoyo a Donaciones de Sangre</Text>
        <Icon 
                  type="entypo"
                  name="drop"
                  color="#F41635"
                  size={25}
                  containerStyle={styles.icon}
                  onPress= {() => navigation.navigate("Requirements")}
              />
        <Icon 
                  type="entypo"
                  name="menu"
                  color="#F41635"
                  size={25}
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
                            source={require('../../assets/homee.png')}
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
                    onPress={() => navigation.navigate("Urgent")}
                />

                <Button
                    title="Hospitales y Clínicas para donar sangre"
                    buttonStyle={styles.btnDeletePost}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("Hospitals")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 5, color: "#F41635"}}>Campañas para Donar Sangre</Text>
        {
            size(doctors) > 0 ? (
                
                <ListDoctors
                    doctors={doctors}
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
        marginBottom: 70
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

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        bottom: 0,
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
        top: -2
    },

    drawerIcon: {
        left: -150,
        top: -25
    },
})
