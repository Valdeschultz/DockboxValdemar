// LocationsScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocationsScreen = () => {
  const [locations, setLocations] = useState([]);
  const [tableHead, setTableHead] = useState([
    'Name',
    'Address',
    'City',
    'Products',
    'Country',
  ]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from Locations.json file and update the state
    const fetchData = async () => {
      try {
        const response = await fetch('../Locations.json'); // Adjust the path accordingly
        const data = await response.json();
        setLocations(data);

        // Assuming your JSON structure is an array of objects with the specified attributes
        const tableDataArray = data.map((item) => [
          item.Name,
          item.Address,
          item.City,
          item.Products,
          item.Country,
        ]);
        setTableData(tableDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Locations</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default LocationsScreen;
