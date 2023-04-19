import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmhNYlIdKqhrN6QCFM71yI34BaURnMUCM',
  authDomain: 'crwn-clothing-db-8f3de.firebaseapp.com',
  projectId: 'crwn-clothing-db-8f3de',
  storageBucket: 'crwn-clothing-db-8f3de.appspot.com',
  messagingSenderId: '220109639368',
  appId: '1:220109639368:web:dea38b3d17f4e94d30dffd',
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

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}
