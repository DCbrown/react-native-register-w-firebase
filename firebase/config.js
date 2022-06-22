import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhLNv8b_WKeeFol171AhTb1m8V-YuiHnA",
  authDomain: "react-native-login-7ae93.firebaseapp.com",
  projectId: "react-native-login-7ae93",
  storageBucket: "react-native-login-7ae93.appspot.com",
  messagingSenderId: "92371874884",
  appId: "1:92371874884:web:6aea3000d26079e9537811"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };