// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './Components/Signupscreen';
import LoginScreen from './Components/Loginscreen';
import LocationsScreen from './Components/Locations';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Locations" component={LocationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;