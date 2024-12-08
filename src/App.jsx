import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import './styles/globals.css'
import './styles/variables.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [last, setLast] = useState({
    starTimestamp: 0,
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 }
  })
  const [theme, setTheme] = useState('purple')

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 50,
    minimumDistanceBetweenStars: 25,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ['rgb(255, 255, 255)', 'rgb(138, 108, 255)'],
    sizes: ['1.4rem', '1rem', '0.6rem']
  }

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x
    const diffY = b.y - a.y
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
  }

  const createGlowPoint = useCallback((position) => {
    const glow = document.createElement('div')
    glow.className = 'glow-point'
    glow.style.left = `${position.x}px`
    glow.style.top = `${position.y}px`
    document.body.appendChild(glow)
    setTimeout(() => document.body.removeChild(glow), config.glowDuration)
  }, [])

  const createStar = useCallback((position) => {
    const star = document.createElement('div')
    star.className = 'dollar-symbol'
    star.textContent = '$'
    star.style.left = `${position.x}px`
    star.style.top = `${position.y}px`
    star.style.color = config.colors[Math.floor(Math.random() * config.colors.length)]
    star.style.fontSize = config.sizes[Math.floor(Math.random() * config.sizes.length)]
    document.body.appendChild(star)
    setTimeout(() => document.body.removeChild(star), config.starAnimationDuration)
  }, [])

  const createGlow = useCallback((lastPoint, currentPoint) => {
    const distance = calcDistance(lastPoint, currentPoint)
    const quantity = Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1)
    const dx = (currentPoint.x - lastPoint.x) / quantity
    const dy = (currentPoint.y - lastPoint.y) / quantity

    Array.from({ length: quantity }).forEach((_, index) => {
      const x = lastPoint.x + dx * index
      const y = lastPoint.y + dy * index
      createGlowPoint({ x, y })
    })
  }, [createGlowPoint])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePosition = { x: e.clientX, y: e.clientY }
      setMousePosition(mousePosition)

      const now = Date.now()
      const hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars
      const hasBeenLongEnough = (now - last.starTimestamp) > config.minimumTimeBetweenStars

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition)
        setLast(prev => ({
          ...prev,
          starTimestamp: now,
          starPosition: mousePosition
        }))
      }

      createGlow(last.mousePosition, mousePosition)
      setLast(prev => ({ ...prev, mousePosition }))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [last, createStar, createGlow])

  const toggleTheme = () => {
    const newTheme = theme === 'purple' ? 'orange' : 'purple'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme === 'orange' ? 'orange' : '')
  }

  return (
    <div className="app-container">
      <button 
        onClick={toggleTheme}
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer'
        }}
      >
        Cambiar Tema
      </button>
      <AudioPlayer />
      <Header />
      <Hero />
    </div>
  )
}

export default App
