import React, { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Alert, 
    Dimensions, 
    TouchableOpacity,
    SafeAreaView,
    Linking
} from 'react-native'

import { Input, Button, Icon, Avatar, Image, CheckBox } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { map, size, filter, isEmpty } from 'lodash'
import { getCurrentLocation } from '../../utils/Helpers'
import { getHospitals, getMarker } from '../../utils/Actions'
import MapView, { Marker, Callout } from 'react-native-maps'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const widthScreen = Dimensions.get("window").width

export default function PostBloodForm({ toastRef }) {
    
    const [isVisibleMap, setIsVisibleMap] = useState(false)

    return (
        <View style={styles.viewContainer}>
            <MapDoctor
                isVisibleMap={isVisibleMap}
                setIsVisibleMap={setIsVisibleMap}
                toastRef={toastRef}
            />
        </View> 
    )
}

function MapDoctor({  

}) {

    const [newRegion, setNewRegion] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await getCurrentLocation()
            if (response.status) {
                setNewRegion(response.location)
            }
        })()
    }, [])

    return (    
        <View>
        {
            newRegion && (
                <MapView
                    style={styles.mapStyle} 
                    initialRegion={newRegion}
          /*           customMapStyle={mapDarkStyle} */
                    showsUserLocation={true}
                >
                    <Marker
                        data={getMarker}
                        coordinate={{
                            latitude: newRegion.latitude,
                            longitude: newRegion.longitude
                        }}
                        draggable
                    />
                </MapView>
            )
        }
    </View>
    )
}



const styles = StyleSheet.create({
    viewContainer: {
        height: "100%",
        flexDirection: 'column',
    },

    mapStyle: {
        height: '100%'
    },

    icon: {
        top: -10,
        right: -3,
    },

    text: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
    },

    subtext: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 30,
    },

    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        marginTop: -15,
        marginBottom: 5,
        marginLeft: -9,
    },

    bubble: {
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: "#ccc",
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },

    arrow: {
        backgroundColor: "transparent",
        borderColor: 'transparent',
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -32,
    },

    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5,
    },

    name: {
        fontSize: 16,
        marginBottom: 5,
    },

    image: {
        width: 120,
        height: 80,
    }
})

