import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navbar = () => {
  const navElements = [
    {
      id: 'nav1',
      title: 'Shop',
      path: '/shop',
    },
    {
      id: 'nav2',
      title: 'Contact',
      path: '/contact',
    },
    {
      id: 'nav3',
      title: 'Sign In',
      path: '/auth',
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
              <Link key={navEl.id} to={navEl.path} className='nav-link'>
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
