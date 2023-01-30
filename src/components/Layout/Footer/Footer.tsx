/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import NavLinks from '@/components/NavLinks/NavLinks'
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo className='logo' />
      <NavLinks className='footer-links' />
      <SocialLinks className='footer-social' />
    </footer>
  )
}

export default Footer
