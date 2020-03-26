import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
require("dotenv").config();
export const API_KEY = process.env.REACT_APP_API_KEY;
export const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
export const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
export const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
export const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
export const SENDER_ID = process.env.REACT_APP_SENDER_ID;
export const APP_ID = process.env.REACT_APP_APP_ID;
export const MEASSUREMENT_ID = process.env.REACT_APP_MEASSUREMENT_ID;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASSUREMENT_ID
};

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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
