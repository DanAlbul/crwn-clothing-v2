import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async () => {
    const authResult = await signInWithGooglePopup()
    console.log(authResult)
    createUserDocumentFromAuth(authResult.user)
  }

  return (
    <div>
      <h1>Sign in page here</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  )
}

export default SignIn
