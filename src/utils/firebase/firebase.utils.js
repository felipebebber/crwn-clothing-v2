import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGNtu3WY0WGBwFBxXeYvUmvqrvkGcIZck",
  authDomain: "crwn-clothing-db-22e2a.firebaseapp.com",
  projectId: "crwn-clothing-db-22e2a",
  storageBucket: "crwn-clothing-db-22e2a.appspot.com",
  messagingSenderId: "900475810110",
  appId: "1:900475810110:web:948904d9ab437bf0e4bc6f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);    
    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log("error creating the user", error.message);
        }
    }
}