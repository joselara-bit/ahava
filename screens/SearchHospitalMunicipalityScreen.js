import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { SearchBar, ListItem, Icon, Image, Button } from 'react-native-elements'
import { isEmpty, size } from 'lodash'
import { searchHospitalMunicipality } from '../utils/Actions'

export default function SearchHospitalMunicipalityScreen({ navigation }) {
    const [search, setSearch] = useState("")
    const [search2, setSearch2] = useState("")
    const [hospitals, setHospitals] = useState([])

    //ES MUY PROBABLE QUE PONGAMOS UN FILTRO, ESO LO CHECAREMOS CUANDO HAGAMOS EL ESTILO FIÇNAL DE LA APP

    useEffect(() => {
        if (isEmpty(search)) {
            return
        }

        async function getData() {
            const response = await searchHospitalMunicipality(search)
            if (response.statusResponse) {
                setHospitals(response.hospitals)
            }
        }
        getData();
    }, [search])

    return (
        <View style={styles.view}>
<Text style={styles.title}>Buscar por Municipio/Alcaldía</Text>
            
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
                placeholder="Buscar por Municipio/Alcaldía..."
                onChangeText={(e) => setSearch(e)}
                containerStyle={styles.searchBar}
                value={search}
            />
            {
                size(hospitals) > 0 ? (
                    <FlatList
                        data={hospitals}
                        keyExtractor={(item, index) => index.toString()}    //nos salva de un error
                        renderItem={(hospital) => 
                            <Hospital
                                hospital={hospital}
                                navigation={navigation}
                            />
                        }
                    />
                ) : (
                    isEmpty(search) ? (

                        <View>
                            <Text style={styles.promo}>
                                Aquí puedes buscar cualquier Banco de Sangre con solo digitar un Municipio o Alcaldía. {'\n'} {'\n'}¿Qué esperas? Millones de personas necesitan de tu ayuda{'\n'} {'\n'}Otras formas de encontrar personas para donar sangre:
                            </Text>

                            <Button
                                title="Buscar por Ciudad"
                                buttonStyle={styles.btnMunicipality}
                                titleStyle={styles.btnMunicipalityTitle}
                                onPress={() => navigation.navigate("Buscar por Ciudad")}
                            />

                            <Button
                                title="Buscar por Colonia"
                                buttonStyle={styles.btnMunicipality}
                                titleStyle={styles.btnMunicipalityTitle}
                                onPress={() => navigation.navigate("Buscar por Colonia")}
                            />

                        </View>

                    ) : (

                        <Text style={styles.notFound}>
                            No hay bancos de sangre que coincidan con el nombre buscado
                        </Text>

                    )
                )
            }
        </View>
    )
}

function Hospital ({ hospital, navigation }) {
    const { id, name, images, city, municipality, comment } = hospital.item
    
    return (
        <ListItem
            style={styles.menuItem}
            onPress={() => navigation.navigate("HomeScreen", {
                screen: "hospital", 
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
                <ListItem.Subtitle>{city}, {municipality} </ListItem.Subtitle>
                <ListItem.Subtitle>
                        {
                            size(comment) > 0
                                ? `${comment.substr(0, 60)}...`
                                : comment
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
        left: 15,
        marginRight: 30
    },

    btnMunicipality: {
        borderRadius: 13,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "red",
        paddingVertical: 10,
        marginTop: 25,
        marginVertical: 30,
    },

    btnSuburb: {
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
        fontSize: 32, fontWeight: "bold", color: "black", top: 35, left: 75, color: "#F41635", bottom: -15, marginRight: 75,
    },

    icon: {
        top: -40,
        right: -3,
    },

})
