/* eslint-disable no-empty-pattern */
import { SlideType } from '../Hero'
import './HeroSlider.css'
import Carousel from 'nuka-carousel'
import { ReactComponent as LeftArrow } from '@/assets/images/left-arrow.svg'
import { ReactComponent as RightArrow } from '@/assets/images/right-arrow.svg'

const HeroSlider = ({ slides }: { slides: SlideType[] }) => {
  return (
    <>
      <Carousel
        renderCenterLeftControls={({}) => <></>}
        renderCenterRightControls={({}) => <></>}
        renderBottomCenterControls={({}) => <></>}
        renderBottomLeftControls={({
          currentSlide,
          nextDisabled,
          nextSlide,
          previousDisabled,
          previousSlide
        }) => (
          <div className='hero-slide-controls'>
            <button
              onClick={previousSlide}
              disabled={previousDisabled}
            >
              <LeftArrow />
            </button>
            <span>{currentSlide}</span>
            <span>/</span>
            <span>{slides.length}</span>
            <button
              onClick={nextSlide}
              disabled={nextDisabled}
            >
              <RightArrow />
            </button>
          </div>
        )}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className='hero-slide'
          >
            <div className='slide-data'>
              <span>{slide.subtitle}</span>
              <span>{slide.title}</span>
              <p>{slide.body}</p>
            </div>
            <img
              src={slide.img}
              alt='skiing'
              className='hero-slide-image'
            />
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default HeroSlider
