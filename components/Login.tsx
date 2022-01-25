import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import { loginValidationSchema } from './FormValidations';
import { auth } from '../firebase/config';
import { TextInput, Button } from 'react-native-paper';

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
              mode="outlined"
              label="Email"
              placeholder="Email"
              autoComplete={false}
              value={values.email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              mode="outlined"
              label="Password"
              autoComplete={false}
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button
              style={styles.loginBtn}
              contentStyle={styles.btnContent}
              mode="contained"
              onPress={() => handleSubmit()}
            >
              <Text>login</Text>
            </Button>
            <Button contentStyle={styles.btnContent} mode="outlined" onPress={() => goToSignUp()}>
              <Text>Signup</Text>
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  errorText: {
    color: 'red',
  },
  loginBtn: {
    marginTop: 20,
  },
  btnContent: {
    height: 50,
  },
});

export default Login;
