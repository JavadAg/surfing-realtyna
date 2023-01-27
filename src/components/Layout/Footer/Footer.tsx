/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import { ReactComponent as Tumblr } from '@/assets/images/tumblr.svg'
import { ReactComponent as Twitter } from '@/assets/images/twitter.svg'
import { ReactComponent as Vimeo } from '@/assets/images/vimeo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo className='logo' />
      <ul className='footer-links'>
        <li>
          <a href=''>STORIES</a>
        </li>
        <li>
          <a href=''>EVENTS</a>
        </li>
        <li>
          <a href=''>PLACES</a>
        </li>
        <li>
          <a href=''>BOARDS</a>
        </li>
      </ul>
      <ul className='footer-social'>
        <li>
          <a href=''>
            <Tumblr />
          </a>
        </li>
        <li>
          <a href=''>
            <Twitter />
          </a>
        </li>
        <li>
          <a href=''>
            <Vimeo />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
