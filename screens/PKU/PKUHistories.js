import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

export default function PKUHistories() {
    const navigation = useNavigation()

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    const goKike = () => {
        navigation.navigate("KikeScreen")
    }

    const { width, height } = Dimensions.get('screen');

    return (
        <ScrollView>
            <View style={styles.container}>
        <Text style={{ color: "#F41635", fontSize: 40, fontWeight: "bold", marginLeft: 76, marginTop: 40, marginBottom: -95,}}>Historias</Text>
          
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
                            source={require('../../assets/7.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>

                <Button
                    title="Emitir Solicitud para Publicar mi Historia"
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("PostStory")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 10, color: "#F41635", marginBottom: 35 }}>Historias de Personas Asombrosas</Text>
            
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", left: 15, top: 1, color: "#F41635", marginBottom: 35, marginRight: 15, }}>En esta pantalla leerás las historias más heroícas, maravillosas y conmovedores de personas que han luchado contra la adversidad y han logrado ganar la batalla de la vida. Enhorabuena a todas las personas que están publicadas en esta pantalla, y a las que faltan.</Text>

            <TouchableOpacity onPress={() => goKike()}>

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
                        source={require("../../assets/KIKE1.jpeg")}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: SPACING / 2
                        }}
                    />

                <View>
                    <Text style={styles.personTitle}>Kike Pierre</Text> 
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
     /*    marginBottom: 90 */
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
