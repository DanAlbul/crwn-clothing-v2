import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.js'
import { useEffect } from 'react'

const SignIn = () => {
  useEffect(async () => {
    const authResult = await getRedirectResult(auth)
    console.log(authResult)
    if (authResult) createUserDocumentFromAuth(authResult.user)
  }, [])

  const logGoogleUser = async () => {
    const authResult = await signInWithGooglePopup()
    console.log(authResult)
    createUserDocumentFromAuth(authResult.user)
  }

  return (
    <div>
      <h1>Sign in page here</h1>
      <button onClick={logGoogleUser}>Sign In</button>
      <SignUpForm />
      <button onClick={signInWithGoogleRedirect}>Sign In With Redirect</button>
    </div>
  )
}

export default SignIn
