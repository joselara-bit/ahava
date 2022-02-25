import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Design() {
    const navigation = useNavigation()
    return (
        <View style={{position: "absolute", top: -200, left: 15}}>
            <View style={styles.sliderContainer}>
            <Swiper autoplay activeDotColor="#F41635" height={200}>

                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/DonTrino3-3.jpeg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>

                <View style={styles.slide}>
                    <Image
                        source={require('../../assets/ahava(1).png')}
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
                onPress={() => navigation.navigate("More")}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: -30,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
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
        top: -8,
        marginVertical: 30,
    },

})
