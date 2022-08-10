import firebase from "firebase"
import "firebase/auth"

const config = firebase.initializeApp( {
  apiKey: "AIzaSyADxFnit1WUo1qfvmjWHK2nxuJtJqG7vdY",
  authDomain: "cool-barber-57a06.firebaseapp.com",
  projectId: "cool-barber-57a06",
  storageBucket: "cool-barber-57a06.appspot.com",
  messagingSenderId: "1059853329671",
  appId: "1:1059853329671:web:bc526ad8d0938c05f391a2",
  measurementId: "G-4ZBWMLR5B1"
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;