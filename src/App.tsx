import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='app'>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  )
}

export default App
