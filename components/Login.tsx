import React, { useEffect } from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import { loginValidationSchema } from './FormValidations';
import { auth } from '../firebase/config';

const Login = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        Actions.homepage();
      }
    });

    return unsubscribe;
  }, []);

  const goToSignUp = () => {
    Actions.signup();
  };

  const handleLogin = (email: string, password: string) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //TODO: console log for now but eventually pass to homepage component
        // eslint-disable-next-line no-console
        console.log('Logged in with:', user?.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(login) => handleLogin(login.email, login.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              value={values.password}
              onBlur={handleBlur('password')}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button onPress={() => handleSubmit()} title="Login" color="coral" />
            <Button onPress={() => goToSignUp()} title="Go To Signup" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  container: {
    flex: 1,
    padding: 40,
  },
  errorText: {
    color: 'red',
  },
});

export default Login;
