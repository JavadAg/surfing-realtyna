import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Logo className='logo' />
      <ul className='nav-links'>
        <li>STORIES</li>
        <li>EVENTS</li>
        <li>PLACES</li>
        <li>BOARDS</li>
      </ul>
    </header>
  )
}

export default Header
