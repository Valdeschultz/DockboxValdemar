import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsScreen = () => {
  // Define an array of products
  const products = [
    {
      id: '1',
      name: 'Water bike 2.0 Seabik',
      price: '55DKK',
      brand: 'Seabikes',
      type: 'Waterbike',
    },
    {
      id: '2',
      name: 'P&H cetus HV seakayak',
      price: '45DKK',
      brand: 'P&H',
      type: 'Kayak',
    },
    {
      id: '3',
      name: 'Watery paddleboard',
      price: '25DKK',
      brand: 'Watery',
      type: 'Paddleboard',
    },
    // Add more products as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box1 Products</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Price</Text>
        <Text style={styles.headerCell}>Brand</Text>
        <Text style={styles.headerCell}>Type</Text>
      </View>
      {products.map((product) => (
        <View style={styles.tableRow} key={product.id}>
          <Text style={styles.tableCell}>{product.name}</Text>
          <Text style={styles.tableCell}>{product.price}</Text>
          <Text style={styles.tableCell}>{product.brand}</Text>
          <Text style={styles.tableCell}>{product.type}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-top',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'lighblue',
    padding: 10,
    allignItems: 'flex-top'
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: 'lightblue'
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
  },
  tableCell: {
    flex: 1,
    color: 'black',
    fontSize: 12,
  },
});

export default ProductsScreen;
