import Footer from './Footer/Footer'
import Header from './Header/Header'
import './Layout.css'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
