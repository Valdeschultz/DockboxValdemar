// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    try {
      const user = { username, password };

      // Retrieve existing user data or initialize with an empty array
      const existingUsers = JSON.parse(
        (await AsyncStorage.getItem('users')) || '[]'
      );

      // Check if the username is already taken
      if (existingUsers.find((u) => u.username === user.username)) {
        alert('Username is already taken.');
        return;
      }

      existingUsers.push(user);
      await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error saving user data: ', error);
    }

    // Clear input fields
    setUsername('');
    setPassword('');

    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
