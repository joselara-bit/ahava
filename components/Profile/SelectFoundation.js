import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function SelectFoundation() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    return (
        <View>

            <Text style={styles.title}>
                Selecciona el tipo de fundación que deseas publicar:
            </Text>

            <Button
                title="Fundación en Apoyo a Donaciones de Sangre"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("BloodFoundation")}
                loading={loading}
            />
{/* 
            <Button
                title="Fundación en Apoyo a Donaciones de Dinero"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("MoneyFoundation")}
                loading={loading}
            /> */}  

             <Button
                title="Fundación en apoyo al PKU o Enfermedades Poco Conocidas"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => navigation.navigate("PKUFoundation")}
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
