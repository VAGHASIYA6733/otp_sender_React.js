import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC27Ec02FX9pE0y1ho5o8k48so5eC5F0gg",
    authDomain: "otp1-9cc2c.firebaseapp.com",
    databaseURL: "https://otp1-9cc2c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "otp1-9cc2c",
    storageBucket: "otp1-9cc2c.appspot.com",
    messagingSenderId: "244762045173",
    appId: "1:244762045173:web:963492d5dc683e2bbc73bc",
  };
  
  firebase.initializeApp(firebaseConfig);
  
export default firebase
