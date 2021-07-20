
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { filmDetailApi, imageApi } from "../api/FilmApi";
import DetailFilm from './DetailFilms';

const Mod = (props) => {
    const {onHideModal, filmID} = props

    const [film, setFilm] = useState({})
    const [genre, setGenre] = useState("")
    useEffect(() => {
        filmDetailApi(filmID).then(filmDetail => {
            setFilm(filmDetail)
            getGenre(filmDetail)
        })
        
    }, [])

    const getGenre = (film) => {
        let genres
        film.genres.forEach(element => {
            genres = genres + element.name.toString() + ", "
        });
        setGenre(genres.slice(0, -2).replace("undefined", ""))
    }


    return (
      <View style={styles.centeredView}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style ={{fontSize:25,textAlign: 'center',fontWeight: 'bold',marginTop: 5,marginBottom: 15}}>
            {film.title}</Text>
            <Text style={{marginBottom:15 }}>Titre original: {film.original_title}</Text>
            <Text style= {{fontSize:18,textAlign: 'right', alignSelf: 'stretch',fontWeight:'bold',color:'#0b03fc',paddingRight:20,paddingBottom:5}}>{film.vote_average}</Text> 
              
              
              <Image source= {{uri: imageApi(film.backdrop_path) }}
              style= {{backgroundColor: "#F00",width:300,height:150}}/>

              <Text>{genre}</Text>
              
              
              <Text style={{marginTop: 15,marginBottom: 15,padding:5}} numberOfLines={12}>{film.overview}</Text>




              
              


              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onHideModal}
              >
                <Text style={styles.textStyle}>Fermer</Text>
              </Pressable>
            </View>
          </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5
    },
    modalView: {
     
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 15,
      alignItems: "center",
      shadowColor: "#000",
      height: "auto",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  
  export default Mod;