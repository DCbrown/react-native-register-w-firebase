import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';

const Routes = () => (
  <Router>
    <Scene key="root" style={styles.container}>
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="signup" component={Signup} title="Sign Up" />
      <Scene key="homepage" component={HomePage} title="HomePage" />
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;
