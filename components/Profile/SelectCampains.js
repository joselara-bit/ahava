import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function SelectCampains() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    return (
        <View>

            <Text style={styles.title}>
                Selecciona el tipo de campaña que deseas observar:
            </Text>

            <Button
                title="Campañas Solicitando Sangre"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("BloodCampain")}
                loading={loading}
            />

            {/* <Button
                title="Campañas Solicitando Apoyo Económico"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("MoneyCampain")}
                loading={loading}
            /> */}

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
        backgroundColor: "#F41635"
    }
})
