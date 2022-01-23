import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import { signUpValidationSchema } from './FormValidations';
import { auth } from '../firebase/config';
import { TextInput, Button } from 'react-native-paper';

const Signup = () => {
  const goToLogin = () => {
    Actions.login();
  };

  const handleSignUp = (email: string, password: string) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        // eslint-disable-next-line no-console
        console.log('Registered with:', user.email);
      })
      .catch((error: { message: any }) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        // eslint-disable-next-line no-console
        console.log(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{ userName: '', email: '', password: '', passwordConfirm: '' }}
        onSubmit={(values) => handleSignUp(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              mode="outlined"
              autoComplete={false}
              placeholder="Enter Username"
              onChangeText={handleChange('userName')}
              value={values.userName}
              onBlur={handleBlur('username')}
            />
            {errors.userName && touched.userName && (
              <Text style={styles.errorText}>{errors.userName}</Text>
            )}
            <TextInput
              mode="outlined"
              autoComplete={false}
              placeholder="Enter Email"
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              mode="outlined"
              autoComplete={false}
              placeholder="Enter Password"
              onChangeText={handleChange('password')}
              value={values.password}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TextInput
              mode="outlined"
              autoComplete={false}
              placeholder="Enter Password Again"
              onChangeText={handleChange('passwordConfirm')}
              value={values.passwordConfirm}
              onBlur={handleBlur('passwordConfirm')}
              secureTextEntry
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
              <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
            )}
            <Button
              style={styles.signupBtn}
              contentStyle={styles.btnContent}
              onPress={() => handleSubmit()}
              mode="contained"
            >
              <Text>Sign Up</Text>
            </Button>
            <Button contentStyle={styles.btnContent} onPress={() => goToLogin()} mode="outlined">
              <Text>Go To Login</Text>
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
  signupBtn: {
    marginTop: 20,
  },
  btnContent: {
    height: 50,
  },
});

export default Signup;
