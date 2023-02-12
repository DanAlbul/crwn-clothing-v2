import SignUpForm from '../../components/sign-up-form/sign-up-form.component.js'
import SignInForm from '../../components/sign-in-from/sign-in-form.component.js'
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
