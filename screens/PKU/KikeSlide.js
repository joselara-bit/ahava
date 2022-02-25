import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

export default function KikeSlide() {
    return (
        <View style={styles.sliderContainer}>
                <Swiper autoplay activeDotColor="#F41635" height={200}>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE2.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE3.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE4.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE5.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE6.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/KIKE7.jpeg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        height: 200,
        width: '90%',
        top: 70,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
        marginBottom: 180,
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


})
