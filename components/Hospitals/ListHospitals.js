import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, Animated, Dimensions, Easing, SafeAreaView, SafeAreaViewBase } from 'react-native'
import { Image, Rating } from 'react-native-elements'
import { size } from 'lodash'
import { formatPhone } from '../../utils/Helpers'
import { StatusBar } from 'react-native'
import Design from '../../screens/Home/Design'

export default function ListHospitals({ hospitals, navigation, handleLoadMore }) {

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    return (
        <View style={{flex: 1, backgroundColor: "#fff" }}>

            <FlatList
                data={hospitals}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={handleLoadMore}
                contentContainerStyle={{
                    padding: SPACING / 2,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                renderItem={(hospital) => (
                    <Hospital
                        hospital={hospital} 
                        navigation={navigation}/>
                )}
            />
        </View>
        
    )
}

function Hospital({ hospital, navigation }) {
    const { id, images, name, comment, city, municipality } = hospital.item
    const imageDoctor = images[0]

    const goHospital = () => {
        navigation.navigate("hospital", { id, name })
    }

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    const { width, height } = Dimensions.get('screen');

    return (
        <TouchableOpacity onPress={() => goHospital()} >
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
                        source={{ uri: imageDoctor }}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: SPACING / 2
                        }}
                    />

                <View>
                    <Text style={styles.personTitle}>
                    {name}
                    </Text> 
                    <Text style={styles.doctorInformation}>{city}, {municipality}</Text>
                    <Text style={styles.doctorBiography}>
                        {
                            size(comment) > 0
                                ? `${comment.substr(0, 50)}...`
                                : comment
                        }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    viewDoctor: {
        flexDirection: "row",
        margin: 10,
        marginRight: 330,
    },

    viewDoctorImage: {
        marginRight: 15,
    },

    imageDoctor: {
        width: 90,
        height: 90
    },

    doctorTitle: {
        fontWeight: "bold",
        marginRight: 145,
    },

    personTitle: {
        fontWeight: "bold",
        marginRight: 145,
        fontSize: 17,
        color: "black"
    },

    doctorInformation: {
        paddingTop: 2,
        color: "grey",
        fontWeight:"bold"
    },

    doctorLlicense: {
        paddingTop: 2,
        color: "grey",
        fontWeight:"bold",
        paddingRight: -50,
    },

    doctorBiography: {
        paddingTop: 2,
        color: "grey",
        width: "75%",
        marginRight: -25,
    },
})
