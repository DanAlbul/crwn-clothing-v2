import { useEffect, useState } from 'react'

import Button from '../button/button.component.js'
import FormInput from '../form-input/form-input.component.js'

import './sign-in-form.styles.scss'

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js'
import { getRedirectResult } from 'firebase/auth'

const signInFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInFormFields)

  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(signInFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)

    try {
      const userAuth = await signInUserWithEmailAndPassword(email, password)

      resetFormFields()
    } catch (e) {
      if (
        e.message.includes('auth/invalid-email') ||
        e.message.includes('auth/wrong-password')
      ) {
        alert('Credentials are invalid.')
      } else if (e.message.includes('auth/user-disabled')) {
        alert('This user has been disabled.')
      } else if (e.message.includes('auth/user-not-found')) {
        alert('User not found in the system.')
      }
      throw new Error(e)
    }
  }

  /*** use in case of signInWithGoogleRedirect
  useEffect(async () => {
    const authResult = await getRedirectResult(auth)
    console.log(authResult)
    if (authResult) createUserDocumentFromAuth(authResult.user)
  }, [])
  */

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup()
  }

  return (
    <div className='sign-in-form'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form className='email-password-form' onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          required
        />

        <div className='sign-methods'>
          <Button content={'Sign In'} onClick={handleSubmit} />
          <Button
            content={'Sign In With Google'}
            btnType='googleBtn'
            onClick={signInWithGoogleUser}
            type='button'
          />
        </div>
      </form>
    </div>
  )
}

export default SignInForm
