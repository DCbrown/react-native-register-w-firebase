import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>HomePage!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});

export default HomePage;
