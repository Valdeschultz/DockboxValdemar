// App.js
//Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './Components/Signupscreen';
import LoginScreen from './Components/Loginscreen';
import LocationsScreen from './Components/Locations';
import Weather from './Components/Weather';
import ProductsScreen from './Components/Products';

//laver min stacknavigator
const Stack = createNativeStackNavigator();

//Initiere min app og beskriver alle views samt 
const App = () => {
  return (
    //Brugeren starter på signup screen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
        <Stack.Screen name="WeatherScreen" component={Weather} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//exportere app
export default App;
