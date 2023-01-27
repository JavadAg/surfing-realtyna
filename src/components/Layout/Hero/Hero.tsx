import SideCol from './SideCol/SideCol'
import HeroSlider from './HeroSlider/HeroSlider'
import './Hero.css'
import hero_bg from '@/assets/images/hero_bg.jpg'

export type SlideType = typeof slide

const slide = {
  subtitle: 'YOUR',
  title: 'Beautiful Escape',
  body: 'One of the greatest things about the sport of surfing is \n that you need only three things: your body,\n a surfboard, and a wave.',
  img: hero_bg
}

const Hero = () => {
  const slides: SlideType[] = Array(5).fill(slide)

  return (
    <section className='hero'>
      <HeroSlider slides={slides} />
      <SideCol />
    </section>
  )
}

export default Hero
