import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { auth } from '../firebase/config';
import { Actions } from 'react-native-router-flux';

const Header = () => {
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        Actions.login();
      })
      .catch(() => {
        (error: { message: string }) => alert(error.message);
      });
  };

  return (
    <View style={styles.header}>
      {/* TODO: Add header based styles - based on app color theme if possible */}
      {/* TODO: Remove Button and add Hambuger icon that opens the Side Drawer when open have the link option of "Log Out" to log out user */}
      <Pressable style={styles.button} onPress={handleLogOut}>
        <Text style={styles.text}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    overflow: 'hidden',
    backgroundColor: 'blue',
    padding: 5,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Header;
