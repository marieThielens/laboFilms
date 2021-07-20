import React, { useState } from 'react';
import { View, Text, Image, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import styleGlobal from '../styleGlobal';
import Mod from './Modal';

import { imageApi } from '../api/FilmApi'; // Récupérer les images des films avec l'Api

const DetailFilm = ( film ) => {
  //  console.log(props);  //envoie tout le contenu de filmData
    //const { film } = props;

    const [modalVisible, setModalVisible] = useState(false);

    const hideModal = () => {
        setModalVisible(!modalVisible)
    }
    

    return (

        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <Mod onHideModal={hideModal} filmID={film.mesFilms.id}/>
            </Modal>
            <View   style={styleGlobal.film_container} onTouchEnd={() => setModalVisible(!modalVisible)}>

                <Image style={styleGlobal.image} source={{uri: imageApi(film.mesFilms.poster_path)}} />
                <View style={styleGlobal.content_container} >
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
                        <Text style={styleGlobal.date_text}>{film.mesFilms.release_date}</Text>
                    </View>
                </View>
            </View>

        </View>
        
    )
}

export default DetailFilm;