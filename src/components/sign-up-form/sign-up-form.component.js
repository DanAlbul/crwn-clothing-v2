import { useState, useContext } from 'react'
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import {
  createAuthUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import { UserContext } from '../../contexts/user.context'

const signUpFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpFormFields)

  const { displayName, email, password, confirmPassword } = formFields

  const { currentUser, setCurrentUser } = useContext(UserContext)

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
      await createUserDocumentFromAuth(userObj.user, { displayName })
      setCurrentUser(userObj.user)
      resetFormFields()
    } catch (e) {
      if (e.message.includes('auth/email-already-in-use')) {
        alert('User with the same email is already registered.')
      }
      throw new Error(e)
    }
  }

  return (
    <div className='sign-up-component'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='email-password-form' onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button content={'Sign Up'} />
      </form>
    </div>
  )
}

export default SignUpForm
