import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { auth } from '../firebase/config';
import { Actions } from 'react-native-router-flux';
import BottomNav from './BottomNav';

const UserProfile = () => {
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

  return( 
  <View>
      <Text>User Profile</Text>
      <Pressable style={styles.button} onPress={handleLogOut}>
        <Text style={styles.text}>Log Out</Text>
      </Pressable>
      <BottomNav />
  </View>
  )
};

const styles = StyleSheet.create({  
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

export default UserProfile;
