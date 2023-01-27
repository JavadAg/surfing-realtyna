import Articles from '@/components/Articles/Articles'
import Contact from '@/components/Contact/Contact'
import Hero from '@/components/Layout/Hero/Hero'
import MediaContent from '@/components/Layout/MediaContent/MediaContent'
import Quote from '@/components/Layout/Quote/Quote'
import ShopSlider from '@/components/ShopSlider/ShopSlider'
import Subscribe from '@/components/Subscribe/Subscribe'
import './HomePage.css'

const HomePage = () => {
  return (
    <main className='main'>
      <Hero />
      <Quote />
      <div className='line' />
      <MediaContent />
      <ShopSlider />
      <Articles />
      <div className='line' />
      <Subscribe />
      <Contact />
    </main>
  )
}

export default HomePage
