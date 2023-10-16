// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    try {
      const user = { username, password };

      const existingUsers = JSON.parse(
        (await AsyncStorage.getItem('users')) || '[]'
      );

      const authenticatedUser = existingUsers.find(
        (u) => u.username === user.username && u.password === user.password
      );

      if (authenticatedUser) {
        alert('Login successful!');
        // Implement navigation to your app's main screen here
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error checking login: ', error);
    }

    // Clear input fields
    setUsername('');
    setPassword('');
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
