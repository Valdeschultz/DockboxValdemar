// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './Components/Signupscreen';
import LoginScreen from './Components/Loginscreen';
import LocationsScreen from './Components/Locations';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
