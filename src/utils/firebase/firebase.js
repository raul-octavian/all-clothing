import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWlTT1Pi7SEMtd-84cayVvajRu4mZN13Q",
  authDomain: "all-clothing.firebaseapp.com",
  projectId: "all-clothing",
  storageBucket: "all-clothing.appspot.com",
  messagingSenderId: "198759540602",
  appId: "1:198759540602:web:f5cd3d264fa85697c358c3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      }
      )

    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef

}