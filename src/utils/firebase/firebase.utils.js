import { initializeApp } from "firebase/app";

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QuerySnapshot
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objecsToAdd) => {
    const collectionRef = collection(db, collectionKey);    
    const batch = writeBatch(db);

    objecsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation = {}
    ) => {
    if (!userAuth) return;

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
                createdAt,
                ...additionalInformation
            });
        } catch(error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback = null) => {
    if (!callback) {
        return 
    }
    onAuthStateChanged(auth, callback);
}