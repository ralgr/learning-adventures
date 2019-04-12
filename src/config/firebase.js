import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/messaging'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDJGWdlF1LoQUAHJuHkKq8kBpd9kjmkRhM",
  authDomain: "pussychat-6b1f1.firebaseapp.com",
  databaseURL: "https://pussychat-6b1f1.firebaseio.com",
  projectId: "pussychat-6b1f1",
  storageBucket: "pussychat-6b1f1.appspot.com",
  messagingSenderId: "849794017584"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Enable offline persistence
db.enablePersistence({experimentalTabSynchronization:true})

export default {
  db
}
