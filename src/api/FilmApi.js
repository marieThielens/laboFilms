import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const MON_API = "040be6ed973ee07470f83d3d9cb13d36";

// fetch : api de react native

export function filmApi (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + MON_API + 
    '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
    // converti la réponse de l'api en fichier json
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

// Récupérer les images du film
export function imageApi (name) {
    // w300 est l'image
    return 'https://image.tmdb.org/t/p/w300/' + name
}

export function filmRecentsApi(page) {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=__page__&language=fr&api_key=".replace("__page__", page) + MON_API

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .catch((error) => console.error(error))
}

export function filmPopulaireApi(page) {
    const url = "https://api.themoviedb.org/3/movie/popular?page=__page__&language=fr&api_key=".replace("__page__", page) + MON_API

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .catch((error) => console.error(error))
}




