import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native';
import { filmPopulaireApi } from '../api/FilmApi';
import DetailFilm from './DetailFilms';

const FilmPopulaire = () => {

    const MON_API = "040be6ed973ee07470f83d3d9cb13d36";
    
    // Requete API pour récupérer la data
    const [filmPopulaire, setFilmPopulaire] = useState([])

    useEffect(() => {
        filmPopulaireApi().then(films => setFilmPopulaire(films))
    }, [])

    return (
        <View>
            <FlatList
                data={ filmPopulaire }
                keyExtractor={ (item) => item.id.toString()}
        //   mon component <FilmItem  la var de data = item
                renderItem={({item}) => {
                    return <DetailFilm mesFilms={item}/>
                } }
            />
        </View>
    )
    
}

export default FilmPopulaire