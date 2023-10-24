import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//laver navigation og objektet Users til at holde på det indtastede data fra brugeren
const SignupScreen = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//signup funktionalitet, tager det inputtede data og laver objekt users med atributterne Name Email Password
  const handleSignup = async () => {
    try {
      const user = { username, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      console.log(user)
      Alert.alert('Signup sucessfull')
      navigation.navigate('LoginScreen');
      //sender error til brugeren og console hvis der går noget galt
    } catch (error) {
      Alert.alert('Error saving user data, try again')
      console.error('Error saving user data: ', error);
    }
  };
//laver text felter til brugeren så signup er muligt
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.title}>Choose account details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={username}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};
//lokal styling for signup viewt
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-top',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SignupScreen;