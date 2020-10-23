// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Main from './pages2/Main';
import Kalori from './pages2/kalori';
import Karbon from './pages2/karbon';
import Kitle from './pages2/kitle';
import Yag from './pages2/yag';

const Stack = createStackNavigator();

function Router() {
    console.log("Router");
    return (
        
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true ,
                    gestureEnabled: true,
                }}
            >
                <Stack.Screen
                    name="MainPage"
                    component={Main}
                />

                <Stack.Screen
                    name="0"
                    component={Kalori}
                />

                <Stack.Screen
                    name="1"
                    component={Karbon}
                />

                <Stack.Screen
                    name="2"
                    component={Kitle}
                />

                <Stack.Screen
                    name="3"
                    component={Yag}
                />




            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;