import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Create a user object with the collected data
      const user = { username, email, password };

      // Store user data in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(user));

      console.log(user)

      // Redirect to another screen (e.g., the login screen)
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error saving user data: ', error);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Name"
        value={username}
        onChangeText={(text) => setUserName(text)}
      />
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
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
