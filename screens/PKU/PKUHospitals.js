import React, {useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import firebase from 'firebase/app'
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Loading from "../../components/Loading"
import { getDoctors, getMoreDoctors, getHospitalsPKU, getMoreHospitalsPKU } from "../../utils/Actions"
import ListDoctors from '../../components/Doctors/ListDoctors'
import ListHospitalsPKU from '../../components/Hospitals/ListHospitalsPKU'
import {size} from 'lodash'
import Swiper from 'react-native-swiper'

export default function HomeScreen() {
    const navigation = useNavigation()
    const [startHospital, setStartHospital] = useState(null)
    const [hospitals, setHospitals] = useState([])
    const [loading, setLoading] = useState(false)

    const limitHospitals = 7

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                
                setLoading(true);
                const response = await getHospitalsPKU(limitHospitals);
                if(response.statusResponse) {
                    setStartHospital(response.startHospital);
                    setHospitals(response.hospitals);
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        if (!startHospital) {
            return
        }

        setLoading(true);
            const response = await getMoreHospitalsPKU( limitHospitals, startHospital );
                
            if(response.statusResponse) {
                setStartHospital(response.startHospital);
                setHospitals([...hospitals, ...response.hospitals]);
            }
        setLoading(false);
    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={{ color: "#F41635", fontSize: 40, fontWeight: "bold", marginLeft: 90, marginTop: 30, marginBottom: -75, }}>Hospitales y Clínicas</Text>
        <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
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
                            source={require('../../assets/3.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 30, color: "#F41635",  marginBottom: 30 }}>Hospitales y Clínicas que atienden PKU y Enfermedades Poco Conocidas</Text>
        {
            size(hospitals) > 0 ? (
                
                <ListHospitalsPKU
                    hospitals={hospitals}
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
      /*   marginBottom: 70 */
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
        top: 40,
        bottom: -10,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        bottom: -10,
        marginVertical: 30,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        top: 15,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
    },

    icon: {
        left: 15,
        top: -10
    },
})
