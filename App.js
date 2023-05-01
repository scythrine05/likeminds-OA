/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


//Navigation
import Navigation from "./Navigation";

const App = () => {

  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>   
  );
};
export default App;
