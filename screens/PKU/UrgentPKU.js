import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

export default function UrgentPKU() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
        <Text style={{ color: "#F41635", fontSize: 40, fontWeight: "bold", marginLeft: 76, marginTop: 40, marginBottom: -95,}}>Campañas Urgentes</Text>
          
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
                            source={require('../../assets/4.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>

                <Button
                    title="Emitir Solicitud de Campaña Urgente"
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("More")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 18, color: "#F41635"}}>Campañas Urgentes</Text>
            
            <Text style={{ fontSize: 19, fontWeight: "bold", color: "black", left: 15, top: 23, color: "#F41635", marginRight: 10, }}>Por el momento no hay Campañas Urgentes.{'\n'} {'\n'}Si quieres aparecer en esta pantalla, sólo emite tu solicitud en el botón superior.</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", 
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
        marginBottom: 65,
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
        top: 45,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
    },

    icon: {
        bottom: -10,
        right: -3,
    },

})
