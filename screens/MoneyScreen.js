import React, {useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Loading from "../components/Loading"
import { getUsers, getMoreUsers } from "../utils/Actions"
import ListUsers from '../components/Money/ListUsers'
import { size } from 'lodash'
import Swiper from 'react-native-swiper'

export default function MoneyScreen() {
    const navigation = useNavigation()
    const [startUser, setStartUser] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const limitUsers = 7

    useFocusEffect(
        useCallback(() => {
            async function getData() {
                
                setLoading(true);
                const response = await getUsers(limitUsers);
                if(response.statusResponse) {
                    setStartUser(response.startUser);
                    setUsers(response.users);
                }
                setLoading(false)
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        if (!startUser) {
            return
        }

        setLoading(true);
            const response = await getMoreUsers( limitUsers, startUser );
                
            if(response.statusResponse) {
                setStartUser(response.startUser);
                setUsers([...users, ...response.users]);
            }
        setLoading(false);
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", top: 35, left: 65, color: "#F41635"}}>Donar Dinero</Text>

            <Icon
                  type="entypo"
                  name="menu"
                  color="#F41635"
                  size={25}
                  containerStyle={styles.drawerIcon}
                  onPress= {() => navigation.openDrawer()}
              />

            <View style={styles.sliderContainer}>
                <Swiper autoplay activeDotColor="#F41635" height={200}>

                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/ahava(1).png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/2.png')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>

                    </Swiper>
                </View>

                <Button
                    title="Campañas Urgentes"
                    buttonStyle={styles.btnCloseSession}
                    titleStyle={styles.btnCloseSessionTitle}
                    onPress={() => navigation.navigate("UrgentMoney")}
                />
                
            <Text style={{ fontSize: 32, fontWeight: "bold", color: "black", left: 15, top: 25, color: "#F41635", marginBottom: 20 }}>Campañas para Donar Dinero</Text>
        {
            size(users) > 0 ? (
                <ListUsers
                    users={users}
                    navigation={navigation}
                    handleLoadMore={handleLoadMore}
                />
            ) : (
                <View style={styles.notFoundView}>
                    <Text style={styles.notFoundText}>No hay campañas disponibles.</Text>
                </View>
            )
        }
            
        <Loading isVisible={loading} text="Cargando listado de usuarios..."/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
       /*  marginBottom: 70 */
    },

    btnContainer: {
        position: "relative",
        bottom: -150,
        right: 10,
        shadowColor: "black",
        shadowOffset: { width: 20, height: 20},
        shadowOpacity: 0.5
    },

    notFoundView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },

    notFoundText: {
        fontSize: 18,
        fontWeight: "bold"
    },


    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },

    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },

    btnCloseSession: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        top: 40,
        marginBottom: 50,
        marginVertical: 30,
    },

    btnDeletePost: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        bottom: -10,
        marginVertical: 30,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        top: 35,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 8,
    },

    drawerIcon: {
        left: -150,
        top: 1
    },
})
