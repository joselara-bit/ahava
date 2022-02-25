import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { SearchBar, ListItem, Icon, Image, Button} from 'react-native-elements'
import { isEmpty, size } from 'lodash'
import { searchSuburb } from '../utils/Actions'

export default function SearchSuburbScreen({ navigation }) {
    const [search, setSearch] = useState("")
    const [search2, setSearch2] = useState("")
    const [doctors, setDoctors] = useState([])

    //ES MUY PROBABLE QUE PONGAMOS UN FILTRO, ESO LO CHECAREMOS CUANDO HAGAMOS EL ESTILO FIÇNAL DE LA APP

    useEffect(() => {
        if (isEmpty(search)) {
            return
        }

        async function getData() {
            const response = await searchSuburb(search)
            if (response.statusResponse) {
                setDoctors(response.doctors)
            }
        }
        getData();
    }, [search])

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Buscar por Colonia</Text>
            
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
                placeholder="Buscar por Colonia..."
                onChangeText={(e) => setSearch(e)}
                containerStyle={styles.searchBar}
                value={search}
            />
            {
                size(doctors) > 0 ? (
                    <FlatList
                        data={doctors}
                        keyExtractor={(item, index) => index.toString()}    //nos salva de un error
                        renderItem={(doctor) => 
                            <Doctor
                                doctor={doctor}
                                navigation={navigation}
                            />
                        }
                    />
                ) : (
                    isEmpty(search) ? (

                        <View>
                            <Text style={styles.promo}>
                                Aquí puedes buscar a cualquier persona con solo digitar la Colonia en la que quieras donar sangre. {'\n'} {'\n'}¿Qué esperas? Millones de personas necesitan de tu ayuda
                            </Text>

                            <Button
                                title="Buscar por Municipio/Alcaldía"
                                buttonStyle={styles.btnMunicipalitySearch}
                                onPress={() => navigation.navigate("Buscar por municipio/alcaldía")}
                            />

                        </View>

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

function Doctor ({ doctor, navigation }) {
    const { id, name, images, blood, bloodrequired, municipality, donors, phone, city, biography } = doctor.item
    
    return (
        <ListItem
            style={styles.menuItem}
            onPress={() => navigation.navigate("HomeScreen", {
                screen: "doctor", 
                params: { id, name }
            })}
        >
            <Image
                resizeMode= "cover"
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={{ uri: images[0] }}
                style={styles.imageDoctor}
            />
            <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>Tipo de sangre: {blood}</ListItem.Subtitle>
                <ListItem.Subtitle>Tipo de sangre requerida: {bloodrequired}</ListItem.Subtitle>
                <ListItem.Subtitle>{city}, {municipality} </ListItem.Subtitle>
                <ListItem.Subtitle>Donantes requeridos: {donors}</ListItem.Subtitle>
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
    view: {
        marginBottom: 150
     },

    searchBar: {
        marginBottom: 5,
        marginTop: -10,     
        backgroundColor: "#F41635",
    },

    imageDoctor: {
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

    btnMunicipalitySearch: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        marginTop: 20,
        marginVertical: 50,
        marginBottom: 40,
    },

    title: {
        fontSize: 32, fontWeight: "bold", color: "black", top: 39, left: 75, color: "#F41635", bottom: -15, marginRight: 75,
    },

    icon: {
        top: -15,
        right: -3,
    },
})
