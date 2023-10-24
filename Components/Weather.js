import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

//fetching weather data functionality
const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  //insert egen API key
  useEffect(() => {
    const apiKey = 'e9e2d96b8d5f811d21dc205b48ebaed6';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=${apiKey}`;

//Bruger axios bibloteket til at sende en HTTP request til API'en
    axios
      .get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
      })
      //sender error til brugeren hvis apien ikke retunere noget data.
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, []);

//Viser og formatere dataen fra API for læselighed
  return (
    <View style={styles.container}>
      {loading ? (
        //viser brugeren at der loades data fra apien
        <ActivityIndicator size="large" color="#0000ff" />
      ) : weatherData ? (
        <View>
          <Text style={styles.city}>{weatherData.name}, {weatherData.sys.country}</Text>
          <Text style={styles.temperature}>{Math.round(weatherData.main.temp - 273.15)}°C</Text>
          <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </View>
      ) : (
        <Text style={styles.error}>Failed to fetch weather data</Text>
      )}
    </View>
  );
};

//lokal styling for vejr viewet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default WeatherScreen;

