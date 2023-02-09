import { useState } from 'react'
import './sign-up-form.styles.scss'

import {
  createAuthUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const signUpFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpFormFields)

  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(signUpFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    //if (!value) return

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    try {
      const userObj = await createAuthUser(email, password)
      console.log(userObj)
      await createUserDocumentFromAuth(userObj.user, { displayName })
      resetFormFields()
    } catch (e) {
      console.log(e.message)
      if (e.message.includes('auth/email-already-in-use')) {
        alert('User with the same email is already registered.')
      }
      throw new Error(e)
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form className='email-password-form' onSubmit={(e) => handleSubmit(e)}>
        <label>Display Name</label>
        <input
          placeholder='Name'
          type='text'
          name='displayName'
          onChange={handleChange}
          value={displayName}
          required
        />

        <label>Email</label>
        <input
          placeholder='Email'
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
          required
        />

        <label>Password</label>
        <input
          placeholder=''
          type='password'
          name='password'
          onChange={handleChange}
          value={password}
          required
        />

        <label>Confirm Password</label>
        <input
          placeholder=''
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
