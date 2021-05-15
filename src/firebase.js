import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC7rHNk5i1oZg1WoM3vIBJib_Rl86OtgiY",
  authDomain: "clone-8b47f.firebaseapp.com",
  projectId: "clone-8b47f",
  storageBucket: "clone-8b47f.appspot.com",
  messagingSenderId: "416338121243",
  appId: "1:416338121243:web:2b142a721c00a607ab5ebe",
  measurementId: "G-PR740ZV3DN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
