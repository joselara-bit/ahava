import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

export default function InfoScreen() {
    const navigation = useNavigation()

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    const goPKU = () => {
        navigation.navigate("MorePKUScreen")
    }

    const { width, height } = Dimensions.get('screen');

    return (
        <ScrollView>
            <View style={styles.container}>
        <Text style={{ color: "#F41635", fontSize: 40, fontWeight: "bold", marginLeft: 76, marginTop: 40, marginBottom: -95,}}>Conoce Más</Text>
          
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
                            source={require('../../assets/6.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>

                <Button
                    title="Hospitales y Clínicas que atienden PKU y Enfermedades Poco Conocidas"
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("PKUHospitals")}
                />

                <Button
                    title="Emitir Solicitud para publicar una Enfermedad Poco Conocida"
                    buttonStyle={styles.btnDeletePost}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("More")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 10, color: "#F41635", marginBottom: 35 }}>Conoce más sobre Enfermedades Poco Conocidas</Text>
            
            <TouchableOpacity onPress={() => goPKU()}>

            <View style={{flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'white', borderRadius: 16,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: .3,
                shadowRadius: 10,
                elevation: 15,
                backgroundColor: 'white',
                
        }}>
                    <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#fff"/>}
                        source={require("../../assets/ICONOPKU.jpeg")}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: SPACING / 2
                        }}
                    />

                <View>
                    <Text style={styles.personTitle}>PKU o Fenilcetonuria</Text> 
                </View>
            </View>
        </TouchableOpacity>
        
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", 
       /*  marginBottom: 90 */
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
        marginTop: -10,
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
        bottom: -34,
        right: -3,
    },

    personTitle: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 17,
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 25,
        color: "black"
    },
})
