import React , { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Image } from 'react-native';
import styleGlobal from '../styleGlobal';

import DetailFilm from './DetailFilms';
import { filmApi } from '../api/FilmApi';

const Recherche = () => {

    const [ films, setFilms ] = useState([]);
    const [ inputCherche, setInputCherche] = useState("");
    const [page, setPage] = useState(1)
    const [loadFilm, setLoadFilm] = useState(false)
  
    useEffect(() => {
        filmApi(inputCherche, page).then(films => {
        setFilms(films.results) // dans l'api les films sont stoqué dans un tableau results   
        })
      }, [page, loadFilm]); 

    const montrerFilms = () => {
        setLoadFilm(previous => !previous)
        setPage(1)
    }

    const handlePageLeft = () => {
      if (page > 1) {
          setPage(previous => previous-1)
      }
    }

    const handlePageRight = () => {
      setPage(previous => previous+1)
    }
    
    return(
        <View>
            <Text style={styleGlobal.titre}>Trouver un film</Text>
            <TextInput style={styleGlobal.input} placeholder='Titre du film' value={inputCherche} onChangeText={(text) => setInputCherche(text)} />
            <Button title='Rechercher' onPress={montrerFilms}/>

            <View style={{flexDirection: "row", alignSelf: "center"}}>
                <View onTouchEnd={handlePageLeft}>
                    <Image style={styleGlobal.imageArrowLeft} source={require("../images/leftAroow.png")}/>
                </View>

                <View onTouchEnd={handlePageRight}>
                    <Image style={styleGlobal.imageArrowRight} source={require("../images/rightArrow.png")}/>
                </View>
            </View>

            {/* FlatList permet d'afficher une liste de données  */}
            {/* data = nos items, les données affichées dans la liste */}
            {/* renderitem = rendu visuel */} 
            <FlatList
              data={ films }
              keyExtractor={ (item) => item.id.toString()}
            //   mon component <FilmItem  la var de data = item
              renderItem={({item}) => <DetailFilm mesFilms={item}/> }
            />
  </View>


    )
}
export default Recherche;