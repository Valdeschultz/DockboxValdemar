import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

//constant for copenhagen
const copenhagenCoordinates = {
  latitude: 55.6761,
  longitude: 12.5683,
};
//constant for Box1
const krøyersPladsCoordinates = {
  latitude: 55.676973,
  longitude: 12.588187,
};

const LocationsScreen = () => {
  const navigation = useNavigation();
//navitagion to weather component
  const handleNavigateToWeather = () => {
    navigation.navigate('WeatherScreen');
  };

  const handleNavigateToProducts = () => {
    navigation.navigate('ProductsScreen'); // navigation to the Products component
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        ...copenhagenCoordinates,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={copenhagenCoordinates} title="Copenhagen" />
        <Marker coordinate={krøyersPladsCoordinates} title="Krøyers Plads">
          <View style={styles.customMarker}>
            <Button title="Box1" color="white" onPress={handleNavigateToProducts} />
          </View>
        </Marker>
      </MapView>
      <Button title="See weather data" onPress={handleNavigateToWeather} />
    </View>
  );
};
//style sheet for this component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  map: {
    width: '100%',
    height: '85%',
  },
  //button styling
  customMarker: {
    backgroundColor: 'blue', 
    borderRadius: 25,
    padding: .2, 
  },
});

export default LocationsScreen;