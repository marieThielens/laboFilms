import React from 'react';
import { View, Text, Image } from 'react-native';
import styleGlobal from '../styleGlobal';

import { imageApi } from '../api/FilmApi'; // Récupérer les images des films avec l'Api

const DetailFilm = ( film ) => {
  //  console.log(props);  //envoie tout le contenu de filmData
    //const { film } = props;
    return (
        <View style={styleGlobal.film_container}>
            <Image style={styleGlobal.image} source={{uri: imageApi(film.mesFilms.poster_path)}} />
            <View style={styleGlobal.content_container}>
                <View style={styleGlobal.header_container}>
                    {/* props. mesFilms voir flatlist dans */}
                    <Text style={styleGlobal.title_text}>{film.mesFilms.title}</Text>
                    <Text style={styleGlobal.vote_text}>{ film.mesFilms.vote_average}</Text>
                </View>
                <View style={styleGlobal.description_container}>
                    <Text style={styleGlobal.description_text} numberOfLines={6}>{film.mesFilms.overview}</Text>
                    {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                </View>
                <View style={styleGlobal.date_container}>
                    <Text style={styleGlobal.date_text}>{film.release_date}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailFilm;