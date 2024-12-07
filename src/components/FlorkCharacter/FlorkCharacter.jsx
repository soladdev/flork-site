import { useState, useEffect } from 'react'
import styles from './FlorkCharacter.module.css'

const FlorkCharacter = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovering) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const xRel = ((x / rect.width) * 2 - 1) * -1
      const yRel = ((y / rect.height) * 2 - 1)

      const maxRotation = 15

      setRotation({
        x: yRel * maxRotation,
        y: xRel * maxRotation
      })
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setRotation({ x: 0, y: 0 })
    }

    const container = document.querySelector('.character-container')
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
      container.addEventListener('mouseenter', () => setIsHovering(true))
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
        container.removeEventListener('mouseenter', () => setIsHovering(true))
      }
    }
  }, [isHovering])

  return (
    <div className={`${styles.characterContainer} character-container`}>
      <div
        className={styles.characterWrapper}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <img 
          className={styles.characterImage}
          decoding="async"
          sizes="634px"
          srcSet="https://framerusercontent.com/images/dwofxlStjRy3rdhICoDJiBnZt4I.png?scale-down-to=512 512w,
                  https://framerusercontent.com/images/dwofxlStjRy3rdhICoDJiBnZt4I.png?scale-down-to=1024 1024w,
                  https://framerusercontent.com/images/dwofxlStjRy3rdhICoDJiBnZt4I.png?scale-down-to=2048 2048w,
                  https://framerusercontent.com/images/dwofxlStjRy3rdhICoDJiBnZt4I.png 2940w"
          src="https://framerusercontent.com/images/dwofxlStjRy3rdhICoDJiBnZt4I.png"
          alt="Flork Character"
        />
      </div>
    </div>
  )
}

export default FlorkCharacter
