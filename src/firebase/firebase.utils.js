import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCcu5M716V9sk0Hk6quVc1VbnMheTBnt1M",
  authDomain: "ecommerce-app-b6988.firebaseapp.com",
  projectId: "ecommerce-app-b6988",
  storageBucket: "ecommerce-app-b6988.appspot.com",
  messagingSenderId: "409130945596",
  appId: "1:409130945596:web:c7c71308b7122d0e420739",
  measurementId: "G-YHN4PK58CK",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
