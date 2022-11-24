import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAR62OCO4fcJH4Y2aC7U5503_6qUw98bqo",
  authDomain: "rubrica-1a17f.firebaseapp.com",
  projectId: "rubrica-1a17f",
  storageBucket: "rubrica-1a17f.appspot.com",
  messagingSenderId: "469003592197",
  appId: "1:469003592197:web:665f1e8adf9df7cac6726c"
};

  
  // Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}