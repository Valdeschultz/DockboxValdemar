import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//initiere login viewt
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    //fetcher user data fra objektet "users"
    async function fetchUserData() {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
        //fanger mulige fejlkoder og sender den til konsol
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    }

    fetchUserData();
  }, []);

  //Login funktionalitet
  const handleLogin = () => {
    if (user) {
      // tjekker om de indtastede oplysninger matcher en bruger i systemet 
      if (user.email === email && user.password === password) {
        // Credentials are correct, you can redirect to another screen or perform any desired action.
        console.log('Login successful');
        Alert.alert('Login successful ')
        navigation.navigate('LocationsScreen');
      } else {
        //hvis data ikke matcher en bruger sendes der en error besked til brugeren
        Alert.alert('Wrong username or password, try again')
      }
    } else {
      console.log('User data not found');
    }
  };
//Opretter inputfelterne så brugeren kan indsætte deres oplysninger
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

//lokal styling til login skærmen
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

export default LoginScreen;