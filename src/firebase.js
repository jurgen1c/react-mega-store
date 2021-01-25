import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZ477Glg02TRWHSNj5IaCD6auYVUjmUzs",
  authDomain: "my--clone-6f40a.firebaseapp.com",
  projectId: "my--clone-6f40a",
  storageBucket: "my--clone-6f40a.appspot.com",
  messagingSenderId: "531763504016",
  appId: "1:531763504016:web:66a7d1f153ef84239b0915"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {db, auth};