/* eslint-disable no-empty-pattern */
import board from '@/assets/images/board.png'
import board1 from '@/assets/images/board1.png'
import board2 from '@/assets/images/board2.png'
import Carousel from 'nuka-carousel/lib/carousel'
import './ShopSlider.css'
import { ReactComponent as LeftArrow } from '@/assets/images/left-arrow.svg'
import { ReactComponent as RightArrow } from '@/assets/images/right-arrow.svg'
import Link from '../Ui/Link'

export type ShopItems = typeof shopItems[0]

const shopItems = [
  {
    category: 'FUNBOARDS',
    name: 'Chili Rare Bird',
    price: '890',
    img: board
  },
  {
    category: 'SURFBOARDS',
    name: 'Emery NEM XF',
    price: '950',
    img: board1
  },
  {
    category: 'FUNBOARDS',
    name: 'Agency GROM',
    price: '670',
    img: board2
  }
]

const ShopSlider = () => {
  return (
    <section className='shop'>
      <span>SHOP</span>
      <div className='bg' />
      <span>Surfboards</span>
      <div className='shop-slider-container'>
        <Carousel
          renderBottomCenterControls={({}) => <></>}
          cellSpacing={22}
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              onClick={previousSlide}
              disabled={previousDisabled}
            >
              <LeftArrow />
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              onClick={nextSlide}
              disabled={nextDisabled}
            >
              <RightArrow />
            </button>
          )}
          slidesToShow={3}
        >
          {shopItems.map((slide, index) => (
            <div className='shop-slide'>
              <div className='item-img'>
                <img
                  src={slide.img}
                  alt=''
                  className='slide-image'
                />
              </div>
              <div className='item-data'>
                <span>{slide.category}</span>
                <span>{slide.name}</span>
                <div>
                  <span>${slide.price}</span>
                  <button>BUY</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Link text='SHOW ALL' />
    </section>
  )
}

export default ShopSlider
