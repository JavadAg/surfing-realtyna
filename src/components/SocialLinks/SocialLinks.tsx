/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Tumblr } from '@/assets/images/tumblr.svg'
import { ReactComponent as Twitter } from '@/assets/images/twitter.svg'
import { ReactComponent as Vimeo } from '@/assets/images/vimeo.svg'

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={`${className}`}>
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
  )
}

export default SocialLinks
