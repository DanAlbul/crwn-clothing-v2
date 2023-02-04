// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBA03jA12YnJjNmqX36kX8X4K-McfTrQaM',
  authDomain: 'cloth-db-9d464.firebaseapp.com',
  projectId: 'cloth-db-9d464',
  storageBucket: 'cloth-db-9d464.appspot.com',
  messagingSenderId: '166369244081',
  appId: '1:166369244081:web:ff5742af322fdd14384390',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  // if user does exist => return this user
  if (userSnapshot.exists()) return userDocRef

  // if not => create a new user in Firestore
  const { displayName, email } = userAuth
  const createdAt = new Date()

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    })
  } catch (e) {
    throw new Error(e)
  }
}
