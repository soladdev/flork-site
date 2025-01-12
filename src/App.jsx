import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Preloader from './components/Preloader/Preloader'
import './styles/globals.css'
import './styles/variables.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('purple')

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'purple' ? 'orange' : 'purple'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme === 'orange' ? 'orange' : '')
  }

  return (
    <div className="app-container">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />
        </>
      )}
    </div>
  )
}

export default App
