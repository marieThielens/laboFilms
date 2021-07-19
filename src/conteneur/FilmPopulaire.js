import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native';

const FilmPopulaire = () => {

    const MON_API = "040be6ed973ee07470f83d3d9cb13d36";
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + MON_API
    // Requete API pour récupérer la data
    const [filmPopulaire, setFilmPopulaire] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.results
            })
            .then((results) => {
                setFilmPopulaire(results)
            })
    }, [])



    return (
        <View>
            <FlatList
                data={ filmPopulaire }
                keyExtractor={ (item) => item.id.toString()}
        //   mon component <FilmItem  la var de data = item
                renderItem={({item}) => {
                    return <Text>{item.original_title}</Text>
                } }
            />
        </View>
    )
    
}

export default FilmPopulaire