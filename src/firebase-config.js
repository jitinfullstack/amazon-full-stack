// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
