import React from 'react'
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';

const Login = () => {
   const goToSignUp = () => {
      Actions.signup()
   }
   return (
      <View style = {styles.container}>
         <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>    
               <TextInput 
                  style = {styles.input}
                  placeholder ='Email'
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"/>
               <TextInput 
                  style = {styles.input}
                  placeholder ='Password'
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  value={values.password}
                  onBlur={handleBlur('password')}/>      
               <Button onPress={() => handleSubmit()} title = 'Login' color='coral'/>     
               <Button onPress = {() => goToSignUp()} title="Go To Signup" />
            </>
         )}
         </Formik>
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