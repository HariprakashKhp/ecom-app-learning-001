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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
