import React from 'react';
import styleGlobal from '../styleGlobal';

const Recherche = () => {
    return(
        <View>
        <Text style={styleGlobal.titre}>Trouver un film</Text>
        <TextInput style={styleGlobal.input} placeholder='Titre du film' value={inputCherche} onChangeText={(text) => setInputCherche(text)} />
        <Button title='Rechercher' onPress={montrerFilms}/>
        </View>

    )
}
export default Recherche;