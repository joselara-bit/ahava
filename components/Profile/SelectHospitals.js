import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function SelectCampain() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    return (
        <View>

            <Text style={styles.title}>
                Selecciona el tipo de hospital o clínica que deseas publicar:
            </Text>

            <Button
                title="Publicar Banco de Sangre"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("Hospital")}
                loading={loading}
            /> 

            <Button
                title="Publicar Hospital o Clínica con atención a PKU y Enfermedades Poco Conocidas"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("PostHospitalPKU")}
                loading={loading}
            /> 

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },

    btnContainer: {
        marginTop: 20,
    },

    btn: {
        backgroundColor: "#F41635",
        borderRadius: 20,
    }
})
