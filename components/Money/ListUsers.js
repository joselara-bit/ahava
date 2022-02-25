import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native'
import { Image, Rating } from 'react-native-elements'
import { size } from 'lodash'
import { formatPhone } from '../../utils/Helpers'

export default function ListUsers({ users, navigation, handleLoadMore }) {
    const SPACING = 20;
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={handleLoadMore}
                contentContainerStyle={{
                    padding: SPACING / 2,
                    paddingTop: StatusBar.currentHeight || 42
                }}
                renderItem={(user) => (
                    <User user={user} navigation={navigation}/>
                )}
            />
        </View>
    )
}

function User({ user, navigation }) {
    const { id, images, name, biography, phone, callingCode, city } = user.item
    const imageUser = images[0]

    const SPACING = 20;
    const AVATAR_SIZE = 70;

    const goUser = () => {
        navigation.navigate("user", { id, name })
    }

    return (
        <TouchableOpacity onPress={() => goUser()} >
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
                <View style={styles.viewDoctorImage}>
                    <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#fff"/>}
                        source={{ uri: imageUser }}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: SPACING / 2
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.personTitle}>{name}</Text> 
                    <Text style={styles.doctorInformation}>{city}</Text>
                    <Text style={styles.doctorInformation}>{formatPhone(callingCode, phone)} </Text>
                    <Text style={styles.doctorBiography}>
                        {
                            size(biography) > 0
                                ? `${biography.substr(0, 60)}...`
                                : biography
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
        fontSize: 18,
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
        marginRight: -5,
    },
})
