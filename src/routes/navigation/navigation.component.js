import './navigation.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navbar = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            {'SHOP'}
          </Link>
          <Link to='/contact' className='nav-link'>
            {'CONTACT'}
          </Link>
          <Link onClick={signOutUser} to='/auth' className='nav-link'>
            {currentUser ? 'SIGN OUT' : 'SIGN IN'}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
