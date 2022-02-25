import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBqz91EKmiOcsO2sGdKC7Mdwh6iGp3Yys",
    authDomain: "ahava-4eea9.firebaseapp.com",
    projectId: "ahava-4eea9",
    storageBucket: "ahava-4eea9.appspot.com",
    messagingSenderId: "697519346482",
    appId: "1:697519346482:web:39a9eccb7d68aaad3c7d2b",
    measurementId: "G-W1F578QE0Q"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);