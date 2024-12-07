import styles from './HowToBuy.module.css'
import metamask from '../../assets/images/metamask.svg'
import coinbase from '../../assets/images/coinbase.svg'
import ethereum from '../../assets/images/ethereum.svg'
import uniswap from '../../assets/images/uniswap.svg'
import { useState } from 'react'

const Card = ({ step, title, icon, rotation }) => {
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!isHovering) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const xRel = ((x / rect.width) * 2 - 1) * -1
    const yRel = ((y / rect.height) * 2 - 1)

    const maxRotation = 15

    setCardRotation({
      x: yRel * maxRotation,
      y: xRel * maxRotation
    })
  }

  return (
    <div 
      className={`${styles.cardWrapper} ${rotation === -21 ? styles.cardWrapperMiddle : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setCardRotation({ x: 0, y: 0 })
      }}
    >
      <div 
        className={styles.card} 
        data-border="true"
        style={{
          transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`
        }}
      >
        <div className={styles.cardContent}>
          <div className={styles.iconContainer}>
            {Array.isArray(icon) ? (
              icon.map((ic, index) => (
                <img key={index} src={ic} alt={`${title} icon ${index + 1}`} className={styles.icon} />
              ))
            ) : (
              <img src={icon} alt={title} className={styles.icon} />
            )}
          </div>
          <div className={styles.textContainer}>
            <p className={styles.stepNumber}>step {step}</p>
            <h3 className={styles.stepTitle}>{title}</h3>
          </div>
        </div>
        <div className={styles.gradientOverlay}></div>
      </div>
    </div>
  )
}

const HowToBuy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How to buy</h2>
      
      <div className={styles.cardsContainer}>
        <Card 
          step="1" 
          title="Create a Wallet" 
          icon={metamask} 
          rotation={21} 
        />
        <Card 
          step="2" 
          title="Get Some Eth" 
          icon={ethereum} 
          rotation={-21} 
        />
        <Card 
          step="3" 
          title="Go to Uniswap" 
          icon={uniswap} 
          rotation={21} 
        />
      </div>
    </div>
  )
}

export default HowToBuy
