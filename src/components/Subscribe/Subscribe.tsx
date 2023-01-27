import './Subscribe.css'
import { ReactComponent as RightArrow } from '@/assets/images/right-arrow.svg'

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <div>
        <span>Join the Club</span>
        <div className='subscribe-bg' />
      </div>
      <p>
        By better understanding the various aspects of surfing, you will improve
        faster
        <br /> and have more fun in the water
      </p>
      <div className='input-email'>
        <input
          type='text'
          placeholder='YOUR E-MAIL'
        />
        <button>
          <RightArrow />
        </button>
      </div>
    </section>
  )
}

export default Subscribe
