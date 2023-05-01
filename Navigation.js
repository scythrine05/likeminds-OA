import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Main from "./screens/Main";
import Movie from "./screens/Movie";
import History from "./screens/History";

export default function Navigation() {

 const Tab = createBottomTabNavigator();
 const Stack = createNativeStackNavigator();

 const TabNavigation = () => {
    return (<Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false}}
        >
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="History" component={History} />
        </Tab.Navigator>);
    }

  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Main" component={TabNavigation}  />
        <Stack.Screen name = "Movie" component={Movie} />
    </Stack.Navigator>
  )
}