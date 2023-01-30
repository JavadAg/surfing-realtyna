import './Contact.css'
import contact from '@/assets/images/contact.jpg'
import Link from '../Ui/Link'

const Contact = () => {
  return (
    <section className='contact'>
      <img
        className='contact-img'
        src={contact}
        alt='beach'
      />
      <div className='contact-data'>
        <span>OUR CAMP</span>
        <span>
          CA 91932, USA
          <br />
          Imperial Beach
          <br />
          560 Silver Strand Blvd
        </span>
        <Link
          text='GET IN TOUCH'
          secondary={true}
        />
      </div>
    </section>
  )
}

export default Contact
