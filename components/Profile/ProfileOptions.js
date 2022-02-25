import { map } from 'lodash'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, ScrollView, Share, Linking } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import Modal from '../Modal'
import ChangeDisplayNameForm from './ChangeDisplayNameForm'
import ChangeEmailForm from './ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm'
import { useNavigation } from '@react-navigation/native'
import SelectCampain from './SelectCampain'
import SelectHospitals from './SelectHospitals'

export default function ProfileOptions({ user, toastRef, setReloadUser, }) {
    
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)

    const navigation = useNavigation()

    const onShare = async () => {

        const b64 =
        'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

        try {
          const result = await Share.share({
            message: '*Descarga Ahavá* \n \nConviértete en una heroína y un héroe ayudando a muchas personas con Ahavá.\n\n*¿Cómo?* \n\nDonando sangre y dinero a quienes más lo necesiten.\n\nAl igual de conocer más sobre la PKU y Enfermedades Poco Conocida. \n\nAnímate y disfruta de la magia de ayudar a los demás !!! \n \nLink de descarga para Android (Play Store) \n \nhttps://play.google.com/store/apps/details?id=com.jose.ahava \n \nLink de descarga para iPhone (App Store) \n \nhttps://apps.apple.com/mx/app/ahav%C3%A1/id1589002877 \n \nDescarga Ahavá y Salva Vidas.',
            url: b64,
        });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

      const privacy = async () => {
        await Linking.openURL("https://ahavaone.web.app/privacy")
    };

    const terms = async() => {
        await Linking.openURL("https://ahavaone.web.app/terms")
    };

    const generateOptions = () => {
        return[
            //HACER OTRO LISTITEM PARA PUBLICAR DOCTOR

            {
                title: "Publicar Campaña",
                iconNameLeft: "blood-bag",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => selectedComponent("campain")
            },

            {
                title: "Publicar Hospital o Clínica",
                iconNameLeft: "hospital-building",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => selectedComponent("hospital")
            },

            /* // {
            //     title: "Publicar Fundación, Asociació u Organización",
            //     iconNameLeft: "hospital-building",
            //     iconColorLeft: "#F41635",
            //     iconNameRight: "chevron-right",
            //     iconColorRight: "grey",
            //     onPress: () => selectedComponent("foundation")
            // }, */

            {
                title: "Cambiar Nombres y Apellidos",
                iconNameLeft: "account-circle",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => selectedComponent("displayName")
            },
    
            {
                title: "Cambiar Correo Electrónico",
                iconNameLeft: "at",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => selectedComponent("email")
            },
    
            {
                title: "Cambiar Contraseña",
                iconNameLeft: "lock-reset",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => selectedComponent("password")
            },

            {
                title: "¿Cómo Protegemos tus Datos?",
                iconNameLeft: "shield-check",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("DataProtection")
            },

            {
                title: "Soporte",
                iconNameLeft: "help-circle",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("Support")
            },

            {
                title: "Aviso de Privacidad",
                iconNameLeft: "file-document",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: (privacy)
            },

            {
                title: "Términos y Condiciones",
                iconNameLeft: "information",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: (terms)
            },

            {
                title: "Quejas",
                iconNameLeft: "emoticon-angry",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("Complaints")
            },

            {
                title: "Comentarios y Sugerencias",
                iconNameLeft: "comment-text-multiple",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("Comments")
            },

            /* {
                title: "Ayudar a Ahavá",
                iconNameLeft: "hand-heart",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("Donation")
            }, */

            {
                title: "Acerca de Ahavá",
                iconNameLeft: "heart",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("Ahava")
            },

            {
                title: "Licencias",
                iconNameLeft: "copyright",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: () => navigation.navigate("License")
            },

            {
                title: "Compartir Ahavá",
                iconNameLeft: "share",
                iconColorLeft: "#F41635",
                iconNameRight: "chevron-right",
                iconColorRight: "grey",
                onPress: (onShare)
            },

        ]
    }

    const selectedComponent = (key) => {
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeDisplayNameForm
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setReloadUser={setReloadUser}
                    />
                )
                break;

            case "email":
                setRenderComponent(
                    <ChangeEmailForm
                        email={user.email}
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setReloadUser={setReloadUser}
                    />
                )
                break;

            case "password":
                setRenderComponent(
                    <ChangePasswordForm
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                    />
                )
                break;

            case "campain":
                setRenderComponent(
                    <SelectCampain
                        setShowModal={setShowModal}
                    />
                )
                break;

            case "foundation":
                    setRenderComponent(
                        <SelectFoundation
                            setShowModal={setShowModal}
                        />
                    )
                    break;

                case "hospital":
                    setRenderComponent(
                        <SelectHospitals
                            setShowModal={setShowModal}
                        />
                    )
                    break;
        }
        setShowModal(true)
    }

    const menuOptions = generateOptions()

    return (
        <ScrollView>
            {
                map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type="material-community"
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type="material-community"
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />

                    </ListItem>
                ))
            }

            <FlatList>
                
            </FlatList>
            <Modal isVisible={showModal} setVisible={setShowModal}>
                {
                    renderComponent
                }
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#c1c1c1c1"
    },

})
