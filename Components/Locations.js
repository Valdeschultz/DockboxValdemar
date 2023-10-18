import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const copenhagenCoordinates = {
  latitude: 55.6761,
  longitude: 12.5683,
};

const LocationsScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        ...copenhagenCoordinates,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={copenhagenCoordinates} title="Copenhagen" />
      </MapView>
    </View>
  );
};

//styles for the map
const styles = StyleSheet.create({
  container: {
    flex: 1,
  alignItems: 'center',
    justifyContent: 'center',
  backgroundColor: '#f2f2f2',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default LocationsScreen;