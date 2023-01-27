import './SideCol.css'
import { ReactComponent as Tumblr } from '@/assets/images/tumblr.svg'
import { ReactComponent as Twitter } from '@/assets/images/twitter.svg'
import { ReactComponent as Vimeo } from '@/assets/images/vimeo.svg'

const SideCol = () => {
  return (
    <div className='sidecol'>
      <span>FIRST SURFING MAGAZINE</span>
      <ul>
        <li>
          <Tumblr />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Vimeo />
        </li>
      </ul>
    </div>
  )
}

export default SideCol
