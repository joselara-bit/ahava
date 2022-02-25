import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { SearchBar, ListItem, Icon, Image} from 'react-native-elements'
import { isEmpty, size } from 'lodash'
import { searchUsersPKU } from '../utils/Actions'

export default function SearchPKUCampain({ navigation }) {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    //ES MUY PROBABLE QUE PONGAMOS UN FILTRO, ESO LO CHECAREMOS CUANDO HAGAMOS EL ESTILO FINAL DE LA APP

    useEffect(() => {
        if (isEmpty(search)) {
            return
        }

        async function getData() {
            const response = await searchUsersPKU(search)
            if (response.statusResponse) {
                setUsers(response.users)
            }
        }
        getData();
    }, [search])

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Buscar Campañas PKU y Enfermedades Poco Conocidas</Text>
            
            <Icon 
                type="ionicon"
                name="chevron-back"
                color="#F41635"
                size={25}
                raised
                containerStyle={styles.icon}
                onPress= {() => navigation.goBack()}
            />
            <SearchBar
                round={true}
                searchIcon={{ color: "#fff" }}
                leftIconContainerStyle={{ color: "#fff"}}
                placeholderTextColor={"#fff"}
                inputStyle={{ color: "#fff"}}
                inputContainerStyle={styles.input}
                placeholder="Buscar por Nombre..."
                onChangeText={(e) => setSearch(e)}
                containerStyle={styles.searchBar}
                value={search}
            />
            {
                size(users) > 0 ? (
                    <FlatList
                        data={users}
                        keyExtractor={(item, index) => index.toString()}    //nos salva de un error
                        renderItem={(user) => 
                            <User
                                user={user}
                                navigation={navigation}
                            />
                        }
                    />
                ) : (
                    isEmpty(search) ? (

                        <Text style={styles.promo}>
                            Aquí podrás buscar a cualquier persona con solo digitar su nombre. {'\n'} {'\n'}¿Qué esperas? Millones de personas necesitan de tu ayuda
                        </Text>

                    ) : (

                        <Text style={styles.notFound}>
                            No hay personas que coincidan con el nombre buscado
                        </Text>

                    )
                )
            }
        </View>
    )
}

function User ({ user, navigation }) {
    const { id, images, name, biography, city, phone, callingCode } = user.item
    
    return (
        <ListItem 
            style={styles.menuItem}
            onPress={() => navigation.navigate("MoneyScreen", {
                screen: "user", 
                params: { id, name }
            })}
        >
            <Image
                resizeMode= "cover"
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={{ uri: images[0] }}
                style={styles.imageUser}
            />
            <ListItem.Content >
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>Ciudad: {city}</ListItem.Subtitle>
                <ListItem.Subtitle>{phone}</ListItem.Subtitle>
                <ListItem.Subtitle>
                        {
                            size(biography) > 0
                                ? `${biography.substr(0, 60)}...`
                                : biography
                        }
                </ListItem.Subtitle>
            </ListItem.Content>
            <Icon
                type="material-community"
                name="chevron-right"    
            />
        </ListItem>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginBottom: 5,
       
        backgroundColor: "#F41635",
    },

    view: {
        marginBottom: 200
     },

    imageUser: {
        width: 90,
        height: 90,
        borderRadius: 12,
    },

    notFound: {
        alignSelf: "center",
        width: "90%"
    },

    menuItem: {
        margin: 10,
        paddingBottom: 60,   
        shadowColor: "transparent",
        shadowOpacity: 0.5,
    },

    input: {
        backgroundColor: "#F41635",
        color: "#fff",
    },

    promo: {
        fontSize: 20,
        color: "red",
        fontWeight: "bold", 
        marginLeft: 15,
        marginRight: 15
    },

    title: {
        fontSize: 28, fontWeight: "bold", color: "black", top: 35, left: 75, color: "#F41635", bottom: -15, marginRight: 75,
    },

    icon: {
        top: -42,
        right: -3,
    },
})
