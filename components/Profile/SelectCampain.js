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
                Selecciona el tipo de campaña que deseas publicar:
            </Text>

            <Button
                title="Solicitar Sangre"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("Blood")}
                loading={loading}
            />

           {/*  <Button
                title="Solicitar Apoyo Económico"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("Money")}
                loading={loading}
            /> */}

            <Button
                title="Publicar Campaña de PKU o Enfermedades Poco Conocidas"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("PKU")}
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
