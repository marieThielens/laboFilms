import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmPopulaire from '../conteneur/FilmPopulaire';
import SortieRecente from '../conteneur/SortieRecente';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator()

const TopNav = () => {
    return (
        <Tab.Navigator initialLayout="filmPopulaire">
            <Tab.Screen name="filmPopulaire" component={FilmPopulaire} options={{
                title: "Films populaires"
            }}/>
            <Tab.Screen name="sortieRecente" component={SortieRecente} options={{
                title: "Sorties récentes"
            }}/>
        </Tab.Navigator>
    )
}

export default TopNav