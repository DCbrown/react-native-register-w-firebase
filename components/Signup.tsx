import React from 'react';
import { StyleSheet, Button, View, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';

const Signup = () => {

   const goToLogin = () => {
      Actions.login();
   }
   return (
      <View style = {styles.container}>
         <Formik
            initialValues={{ username: '', email: '', password: '', passwordAgain: '' }}
            onSubmit={values => console.log(values)}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>    
               <TextInput 
                  style = {styles.input}
                  placeholder ='Enter Username'
                  onChangeText={handleChange('username')}
                  value={values.username}
                  onBlur={handleBlur('username')}/>
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
})

export default Signup
