
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Accueil from './src/conteneur/Accueil';
import styleGlobal from './src/styleGlobal';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
<Accueil></Accueil>

    </SafeAreaView>
  );
};

export default App;
