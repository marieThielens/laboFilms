import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const MON_API = "040be6ed973ee07470f83d3d9cb13d36";

// fetch : api de react native

export function filmApi (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + MON_API + 
    '&language=fr&query=' + text  
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




