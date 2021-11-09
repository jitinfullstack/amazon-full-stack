import firebase from 'firebase'
// import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCi1rqhbqcYtkBFBttHrCY5A4GMGw5NLOY',
  authDomain: 'new-clone-5476e.firebaseapp.com',
  databaseURL: 'https://new-clone-5476e-default-rtdb.firebaseio.com',
  projectId: 'new-clone-5476e',
  storageBucket: 'new-clone-5476e.appspot.com',
  messagingSenderId: '1022010893876',
  appId: '1:1022010893876:web:941d2aaeb4e93f1358cc61',
  measurementId: 'G-EC3XD1TB70',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
