import React from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import openMap from 'react-native-open-maps'

export default function MapDoctor({ location, name, height }) {
    const openAppMap = () => {
        openMap({
            latitude: location.latitude,
            longitude: location.longitude,
            zoom: 19,
            query: name
        })
    }

    return (
        <MapView
            style={{ height: height, width: "100%", borderRadius: 8, }}
            initialRegion={location}
            onPress={openAppMap}
        >
            <MapView.Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude
                }}
            />
        </MapView>
    )
}
