import React, { useState, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native';
<<<<<<< Updated upstream
=======
import { filmRecentsApi } from '../api/FilmApi';
import DetailFilm from './DetailFilms';
>>>>>>> Stashed changes

const SortieRecente = (props) => {

    const MON_API = "040be6ed973ee07470f83d3d9cb13d36";
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=fr&api_key=" + MON_API

    // Requete API pour récupérer la data
    const [filmsRecents, setFilmsRecents] = useState([])

    useEffect(() => {
        filmRecentsApi().then(films => setFilmsRecents(films))
    }, [])

    return (
        <View>
            <FlatList
                data={ filmsRecents }
                keyExtractor={ (item) => item.id.toString()}
                renderItem={({item}) => {
                    return <Text>{item.original_title}</Text>
                    {/* <FilmItem mesFilms={item}/> */}
                } }
            />
        </View>
    )
}

export default SortieRecente