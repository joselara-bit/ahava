import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import navigation from '@react-navigation/native'
import { Icon, ListItem } from 'react-native-elements'

export default function RequirementsScreen({ navigation }) {
    
    const handleEmailPress = async () => {
        await Linking.openURL("mailto:soporte@ahava.one?subject=Duda sobre la donación de sangre&body=Hola, qué tal !! Tengo una duda sobre la donación de sangre.\n\nPara ti, querido donante: Muchísimas gracias por regalar y dar vida a los demás con tu donación de sangre !!! Bendiciones !!!")
    };

    const handleWhatsappPress = async() => {
        await Linking.openURL("https://wa.me/+525525564336/?text=Hola, qué tal !! Tengo una duda sobre la donación de sangre.\n\nPara ti, querido donante: Muchísimas gracias por regalar y dar vida a los demás con tu donación de sangre !!! Bendiciones !!!")
    };

    const list = [
        {
          title: 'Ser mayor de 18 años',
          icon: 'account-circle'
        },
        {
          title: 'Acudir con una identificación oficial con fotografía y vigente (INE, pasaporte, cédula profesional, credencial ADIMSS, cartilla de salud vigente, licencia de manejo)',
          icon: 'credit-card'
        },
        {
            title: 'Pesar más de 50 kg',
            icon: 'person'
          },
          {
            title: 'Ayuno mínimo de cuatro horas (evita consumir alimentos con grasa 24 horas antes de la donación). Durante las cuatro horas de ayuno solo puedes ingerir: jugos, frutas (excepto plátano, mamey y aguacate), té, café solo y mantenerse hidratado.',
            icon: 'no-food'
          },
          {
            title: 'No exceder horas de ayuno',
            icon: 'timer-off'
          },
          {
            title: 'No haber estado enfermo de gripe, tos, diarrea o infección dental en los últimos 14 días.',
            icon: 'smoke-free'
          },
          {
            title: 'No haber tomado medicamentos en los últimos cinco días.',
            icon: 'do-not-disturb'
          },
          {
            title: 'No haber estado en tratamiento de endodoncia, acupuntura o haberse practicado tatuajes o perforaciones en los últimos 12 meses.',
            icon: 'do-not-disturb'
          },
          {
            title: 'No haber sido operado en los últimos seis meses.',
            icon: 'do-not-disturb'
          },
          {
            title: 'No haberse vacunado en los últimos 30 días.',
            icon: 'do-not-disturb'
          },
          {
            title: 'No haber ingerido bebidas alcohólicas en 72 horas previas a la donación.',
            icon: 'do-not-disturb'
          },
          {
            title: 'Si tienes la presión arterial alta y estás controlada o controlado, puedes ser candidato a donación.',
            icon: 'check-circle-outline'
          },
      ]
    
    return (
        <ScrollView style={styles.view}>

            <Text style={styles.title}>Requisitos para Donar Sangre</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />

            <Text style={styles.text}>Hola, qué tal. En esta pantalla podrás ver los requisitos para poder Donar Sangre en toda la República Méxicana.{'\n'} {'\n'}</Text>

            <View>
                    {
                        list.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon} color="#F41635" />
                            <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        ))
                    }
                    </View>
            
            <Text style={styles.important}>CONSIDERACIONES IMPORTANTES</Text>

            <Text style={styles.importantText}>-Se recomienda presentarse aseado, el uso de ropa cómoda y de manga corta.</Text>

            <Text style={styles.importantText}>-Es necesario disponer de dos horas, tiempo aproximado de duración total del proceso de donación de sangre.</Text>

            <Text style={styles.importantText}>-No se permite el paso a menores de edad ni acompañantes.</Text>

            <Text style={styles.importantText}>-Si usted ha regalado vida mediante la donación de sangre, el personal de Banco de Sangre notificará por correo electrónico a la Jefatura de Trabajo Social del hospital sobre su donación a favor de su paciente.</Text>

            <Text style={styles.apa}>Fuente Bibliográfica: Gobierno de México. (s.f). Requisitos mínimos para donar sangre. 2021.09.20, de Gobierno de México | IMSS (Instituto Mexicano del Seguro Social) Sitio web: https://www.gob.mx/imss/articulos/requisitos-minimos-para-donar-sangre</Text>
            
            <Text style={styles.subtext}>Si tienes alguna duda, mándanos mensaje por la vía de tu preferencia:</Text>

            <Text style={styles.supportEmail}>Escribe tu duda por Correo Electrónico</Text>

            <Icon
                    type="ionicon"
                    name="mail-outline"
                    color="#f84437"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleEmailPress}
                />

            <Text style={styles.support}>Escribe tu duda por Whatsapp</Text>

            <Icon
                    type="ionicon"
                    name="logo-whatsapp"
                    color="#1bd741"
                    reverse
                    containerStyle={styles.btnContainer}
                    onPress= {handleWhatsappPress}
                />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
       
    },

    title: {
        color: "#F41635",
        fontSize: 35, 
        fontWeight: "bold",
        marginLeft: 76,
        marginTop: 40,
        marginBottom: -95,
    },

    text: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        fontSize: 15,
        bottom: -20,
    },

    subtext: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        fontSize: 15,
    },

    button: {
        backgroundColor: "#F41635",
        borderRadius: 40,
        alignSelf: "center",
        paddingVertical: 10,
        marginTop: -60,
    },

    icon: {
        bottom: -15,
        right: -3,
    },

    btnContainer: {
        marginTop: 15,
        right: -285,
    },

    support: {
        marginLeft: 130,
        marginTop: 20,
        color: "grey",
    },

    supportEmail: {
        marginLeft: 84,
        marginTop: 20,
        color: "grey",
    },

    btnCloseSession: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: -8,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 12,
        marginTop: -12,
        marginVertical: 45,
    },

    important: {
        color: "#F41635",
        fontSize: 20, 
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },

    importantText: {
        color: "#F41635",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize: 15,
        bottom: 5,
    },

    apa: {
        color: "grey",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize: 15,
    }
})
