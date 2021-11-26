import React from 'react'
import { StyleSheet, Button, View, TextInput,  Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Signup = () => {
   const goToLogin = () => {
      Actions.login();
   }
   return (
      <View style = {styles.container}>
         <TextInput 
            style = {styles.input}
            placeholder ='Enter Username'/>
         <TextInput 
            style = {styles.input}
            placeholder ='Enter Email'/>
         <TextInput 
            style = {styles.input}
            placeholder ='Enter password'
            secureTextEntry={true}/>
         <TextInput 
            style = {styles.input}
            placeholder ='Enter password again'
            secureTextEntry={true}/>         
         <Button onPress={() => console.log('Submit')} title = 'Sign Up' color='coral'/>   
         <Button onPress = {() => goToLogin()}  title="Go To Login" />
      </View>
   )
}

const styles = StyleSheet.create({
   input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
   },
   container: {
      flex: 1,
      padding: 40
   },
})

export default Signup