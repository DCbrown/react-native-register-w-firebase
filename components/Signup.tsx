import React from 'react';
import { StyleSheet, Button, View, TextInput, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import {signUpValidationSchema} from './FormValidations';

const Signup = () => {

   const goToLogin = () => {
      Actions.login();
   }
   return (
      <View style = {styles.container}>
         <Formik
         validationSchema={signUpValidationSchema}
            initialValues={{ userName: '', email: '', password: '', passwordAgain: '' }}
            onSubmit={values => console.log(values)}
          >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>    
               <TextInput 
                  style = {styles.input}
                  placeholder ='Enter Username'
                  onChangeText={handleChange('username')}
                  value={values.userName}
                  onBlur={handleBlur('username')}/>
                  {(errors.userName && touched.email) &&
                  <Text style={styles.errorText}>{errors.userName}</Text>
                }
               <TextInput 
                  style = {styles.input}
                  placeholder ='Enter Email'
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"/>
               <TextInput 
                  style = {styles.input}
                  placeholder ='Enter Password'
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  secureTextEntry />
               <TextInput 
                  style = {styles.input}
                  placeholder ='Enter Password Again'
                  onChangeText={handleChange('passwordAgain')}
                  value={values.passwordAgain}
                  onBlur={handleBlur('passwordAgain')}
                  secureTextEntry />     
               <Button onPress={() => handleSubmit()} title = 'Sign Up' color='coral'/>   
               <Button onPress = {() => goToLogin()}  title="Go To Login" />
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
   errorText: {
      color:'red',
   }
})

export default Signup
