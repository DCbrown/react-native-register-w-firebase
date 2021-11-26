import React from 'react'
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = () => {
   const goToSignUp = () => {
      Actions.signup()
   }
   return (
      <View style = {styles.container}>
         <TextInput 
            style = {styles.input}
            placeholder ='Email'/>
         <TextInput 
            style = {styles.input}
            placeholder ='Password'
            secureTextEntry={true}/>      
         <Button onPress={() => console.log('Submit')} title = 'Login' color='coral'/>     
         <Button onPress = {() => goToSignUp()}  title="Go To Signup" />
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

export default Login