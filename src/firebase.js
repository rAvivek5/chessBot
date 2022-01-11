// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ' ',
  authDomain: 'cheesssssssu.firebaseapp.com',
  projectId: 'cheesssssssu',
  storageBucket: 'cheesssssssu.appspot.com',
  messagingSenderId: '280879338624',
  appId: '1:280879338624:web: ',
  measurementId: 'G- ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
