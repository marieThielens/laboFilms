import React, { useState, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native';
import DetailFilm from './DetailFilms';

const SortieRecente = (props) => {

    const MON_API = "040be6ed973ee07470f83d3d9cb13d36";
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + MON_API

    // Requete API pour récupérer la data
    const [filmsRecents, setFilmsRecents] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.results
            })
            .then((results) => {
                setFilmsRecents(results)
            })
    }, [])

    return (
        <View>
            <FlatList
                data={ filmsRecents }
                keyExtractor={ (item) => item.id.toString()}
                renderItem={({item}) => {
                    return <DetailFilm mesFilms={item}/>
                } }
            />
        </View>
    )
}

export default SortieRecente