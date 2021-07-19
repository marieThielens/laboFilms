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
            <Tab.Navigator>
                <Tab.Screen name="Recherche" component={Recherche} options= {{
                    title: "Recherche",
                    tabBarIcon : ({ color, size }) => (
                        <Text>Recherche</Text>
                        ),
                }}/>
                <Tab.Screen name="Accueil" component={Accueil} options= {{
                    title: "Accueil",
                    tabBarIcon : ({ color, size }) => (
                        <Text>A</Text>
                        ),
                }}/>
                <Tab.Screen name="Recent" component={Accueil} options= {{
                    tabBarIcon : ({color, size }) => (
                        <Text>Recent</Text>
                        ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default BottomNav;