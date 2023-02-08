import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8kdlKxZE9MqeAjgBr5sTqpltB1V1P6uA",
  authDomain: "netflix-clone-4d64a.firebaseapp.com",
  projectId: "netflix-clone-4d64a",
  storageBucket: "netflix-clone-4d64a.appspot.com",
  messagingSenderId: "366502462678",
  appId: "1:366502462678:web:aa72fac8052a6da4acb577"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }