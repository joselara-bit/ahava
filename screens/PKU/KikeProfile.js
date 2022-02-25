import React from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'

export default function KikeProfile() {

    const SPACING = 20;
    const AVATAR_SIZE = 80;

    return (
        <View>
            <Image
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator color="#fff"/>}
                        source={require("../../assets/KIKE1.jpeg")}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: 50,
                            marginLeft: 35,
                        }}
                    />
        </View>
    )
}

const styles = StyleSheet.create({})
