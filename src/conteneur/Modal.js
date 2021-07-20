
import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { filmDetailApi } from "../api/FilmApi";
import DetailFilm from './DetailFilms';

const Mod = (props) => {
    const {onHideModal, filmID} = props

    const [film, setFilm] = useState({})
    useEffect(() => {
        filmDetailApi(filmID).then(filmDetail => setFilm(filmDetail))
    }, [])

    
    return (
      <View style={styles.centeredView}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>{film.title}</Text>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onHideModal}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
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
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
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