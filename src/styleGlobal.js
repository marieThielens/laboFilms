import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Item film ............................
    titre: {
        fontSize:25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },

    titre: {
      fontSize:25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 5
  },

    film_container: {
        height: 190,
        flexDirection: 'row'
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap', // le texte passe à la ligne si il est trop long
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      },
      imageArrowLeft: {
        margin: 8,
        marginRight: 85,
        width: 20,
        height: 20
      },
      imageArrowRight: {
        margin: 8,
        marginLeft: 85,
        width: 20,
        height: 20,
        alignSelf: "flex-end"
      }
})