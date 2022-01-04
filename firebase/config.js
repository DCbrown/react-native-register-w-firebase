import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARYiZvNAnRGW9BVbdfao9GbmAa4n1DI7k",
    authDomain: "idea-board-32a76.firebaseapp.com",
    databaseURL: "https://idea-board-32a76-default-rtdb.firebaseio.com",
    projectId: "idea-board-32a76",
    storageBucket: "idea-board-32a76.appspot.com",
    messagingSenderId: "634153339703",
    appId: "1:634153339703:web:6681e32e61ac13e6cd68b2"
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