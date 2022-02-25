import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import termstext from './termstext'
import { useNavigation } from '@react-navigation/native'

export default function PrivacyScreen() {
    
    const navigation = useNavigation()

    return (
        <ScrollView>

            <Text style={{ color: "#F41635", fontSize: 32, fontWeight: "bold", marginLeft: 80, marginTop: 35, marginBottom: -45, }}>Términos y Condiciones</Text>
        <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={{ marginRight: 15, marginLeft: 15, marginTop: -13 }}>{termstext}</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,

    },

    text: {
        marginVertical: 7,
        marginLeft: 10,
    },

    icon: {
        top: -28,
        right: -3,
    },
})
