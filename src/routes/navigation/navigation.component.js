import './navigation.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
    console.log(currentUser)
    // setCurrentUser(null)
  }

  const navElements = [
    {
      id: 'nav1',
      title: 'Shop',
      path: '/shop',
      ///event: null,
    },
    {
      id: 'nav2',
      title: 'Contact',
      path: '/contact',
      //event: null,
    },
    {
      id: 'nav3',
      title: currentUser ? 'Sign Out' : 'Sign In',
      path: '/auth',
      event: currentUser ? signOutHandler : null,
    },
  ]

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          {navElements.map((navEl) => {
            return (
              <Link
                onClick={[navEl?.event]}
                key={navEl.id}
                to={navEl.path}
                className='nav-link'>
                {navEl.title.toUpperCase()}
              </Link>
            )
          })}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
