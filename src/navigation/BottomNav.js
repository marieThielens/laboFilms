import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen />
            </Tab.Navigator>
        </NavigationContainer>

    )
}
export default BottomNav;