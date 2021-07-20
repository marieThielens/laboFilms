import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Image } from 'react-native';
import { filmPopulaireApi } from '../api/FilmApi';
import styleGlobal from '../styleGlobal';
import DetailFilm from './DetailFilms';

const FilmPopulaire = () => {
    
    // Requete API pour récupérer la data
    const [filmPopulaire, setFilmPopulaire] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        filmPopulaireApi(page).then(films => setFilmPopulaire(films))
    }, [page])

    const handlePageLeft = () => {
        if (page > 1) {
            setPage(previous => previous-1)
        }
    }

    const handlePageRight = () => {
        setPage(previous => previous+1)
    }

    return (
        <View>
            
            <View style={{flexDirection: "row", alignSelf: "center"}}>
                <View onTouchEnd={handlePageLeft}>
                    <Image style={styleGlobal.imageArrowLeft} source={require("../images/leftAroow.png")}/>
                </View>

                <Text style={styleGlobal.titre}>Films populaires</Text>

                <View onTouchEnd={handlePageRight}>
                    <Image style={styleGlobal.imageArrowRight} source={require("../images/rightArrow.png")}/>
                </View>
            </View>
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