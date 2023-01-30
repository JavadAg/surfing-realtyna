/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import NavLinks from '@/components/NavLinks/NavLinks'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Logo className='logo' />
      <NavLinks className='nav-links' />
    </header>
  )
}

export default Header
