import React, { useState, useEffect } from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import { filmRecentsApi } from '../api/FilmApi';
import styleGlobal from '../styleGlobal';
import DetailFilm from './DetailFilms';

const SortieRecente = (props) => {

    // Requete API pour récupérer la data
    const [filmsRecents, setFilmsRecents] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        filmRecentsApi(page).then(films => setFilmsRecents(films))
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

                <Text style={styleGlobal.titre}>Sorties récentes</Text>

                <View onTouchEnd={handlePageRight}>
                    <Image style={styleGlobal.imageArrowRight} source={require("../images/rightArrow.png")}/>
                </View>
            </View>
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