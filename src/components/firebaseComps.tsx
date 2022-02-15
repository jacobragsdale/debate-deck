import firebase from "firebase";

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCn0IyVS0AzM4bqIyl66f-7-WCXg8N5utk",
  authDomain: "debate-deck-backend.firebaseapp.com",
  databaseURL: "https://debate-deck-backend.firebaseio.com",
  projectId: "debate-deck-backend",
  storageBucket: "debate-deck-backend.appspot.com",
  messagingSenderId: "797722969450",
  appId: "1:797722969450:web:e1b55d182a9244421b9113",
  measurementId: "G-FMB4F8HHMB"
};

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
