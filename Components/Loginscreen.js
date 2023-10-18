import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from AsyncStorage when the component mounts
    async function fetchUserData() {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    }

    fetchUserData();
  }, []);

  const handleLogin = () => {
    if (user) {
      // Check if the provided email and password match the stored user data
      if (user.email === email && user.password === password) {
        // Credentials are correct, you can redirect to another screen or perform any desired action.
        console.log('Login successful');
        navigation.navigate('LocationsScreen')
      } else {
        console.log('Invalid credentials');
      }
    } else {
      console.log('User data not found');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
