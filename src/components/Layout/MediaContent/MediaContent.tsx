import React from 'react'
import media1 from '@/assets/images/media1.jpg'
import media2 from '@/assets/images/media2.jpg'
import { ReactComponent as Play } from '@/assets/images/play.svg'
import './MediaContent.css'
import Link from '@/components/Ui/Link'

const MediaContent = () => {
  return (
    <section className='media-content'>
      <div className='media-1'>
        <img
          src={media1}
          alt=''
        />
        <div>
          <p>
            By better understanding the various aspects of surfing, you will
            improve faster and have more fun in the water
          </p>
          <Link text='READ MORE' />
        </div>
      </div>
      <div className='media-2'>
        <Play className='play-button' />
        <img
          src={media2}
          alt=''
        />
      </div>
    </section>
  )
}

export default MediaContent
