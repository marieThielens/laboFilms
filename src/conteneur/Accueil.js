import React, { useState, useEffect } from 'react';
import { Text, View,Image, StyleSheet } from "react-native";
import styleGlobal from '../styleGlobal';


const Accueil = (props) => { 


    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
         },
         
        stretch: {
          paddingTop: 150,
          width: 300,
          height: 300,
          resizeMode: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
          
        },
      });
    
    return (

        <View style={styles.container}>

            <Text style={styleGlobal.titre}>Bienvennue sur  MaWiPe Movie</Text>
            
            <Image style={styles.stretch} source={require('../images/popcorn.png')} />
        </View>
    )
}

export default Accueil;