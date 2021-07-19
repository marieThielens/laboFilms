import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

import Accueil from '../conteneur/Accueil';
import Recherche from '../conteneur/Recherche';
import TopNav from './TopNav';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Accueil" >
                <Tab.Screen name="Recherche" component={Recherche} options= {{
                    title: "Recherche",
                    tabBarIcon : ({ color, size }) => (
                        <Image source={require("../images/loupe.png")} style={{ width:size, height:size}}/>
                        ),
                }}/>
                <Tab.Screen name="Accueil" component={Accueil} options= {{
                    title: "Accueil",
                    tabBarIcon : ({ color, size }) => (
                        <Image source={require("../images/home.png")} style={{ width:size, height:size}}/>
                        ),
                }}/>
                <Tab.Screen name="Recent" component={TopNav} options= {{
                    tabBarIcon : ({color, size }) => (
                        <Image source={require("../images/fav.png")} style={{ width:size, height:size}}/>
                        ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default BottomNav;