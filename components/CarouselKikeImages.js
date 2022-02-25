import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Share } from 'react-native'
import { Image } from 'react-native-elements'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { size } from 'lodash'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function CarouselKikeImages({ images, height, width, activeSlide, setActiveSlide }) {
    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        return (
            <Image
                style={{ height: 200, width: '92%', borderRadius: 8,  top: 15, marginBottom: 30, justifyContent: 'center', alignSelf: "center", left: 15 }}
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={require("../assets/ahava(1).png")}
            />
        )
    }

    return (
        <View>
            <Carousel
                layout={"default"}
                data={images}
                sliderWidth={width}
                itemWidth={width}
                itemHeight={height}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
        <MyPagination data={images} activeSlide={activeSlide} />
        </View>
    )
}

function MyPagination({ data, activeSlide }) {
    return (
        <Pagination
            dotsLength={size(data)}
            activeDotIndex={activeSlide}
            containerStyle={styles.containerPagination}
            dotStyle={styles.dotActive}
            inactiveDotStyle={styles.dotInactive}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.6}
        />
    )
}

const styles = StyleSheet.create({
    containerPagination: {
        backgroundColor: "transparent",
        zIndex: 1,
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
    },

    dotActive: {
        width: 16, 
        height: 16,
        borderRadius: 10,
        marginHorizontal: 2,
        backgroundColor: "#F41635"
    },

    dotInactive: {
        width: 14, 
        height: 14,
        borderRadius: 7,
        marginHorizontal: 2,
        backgroundColor: "#fff"
    },
    
})
