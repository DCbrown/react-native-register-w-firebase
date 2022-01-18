import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header';

const HomePage = () => {
  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text>HomePage!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});

export default HomePage;
