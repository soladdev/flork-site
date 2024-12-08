import { motion } from 'framer-motion'
import styles from './HowToBuy.module.css'
import metamask from '../../assets/images/metamask.svg'
import coinbase from '../../assets/images/coinbase.svg'
import ethereum from '../../assets/images/ethereum.svg'
import electrum from '../../assets/images/electrum.svg'
import uniswap from '../../assets/images/smarter.avif'
import { useState } from 'react'

const getContainerClass = (title, index) => {
  if (title === "Create a Wallet") {
    if (index === 0) return styles.metamaskContainer;
    if (index === 1) return styles.coinbaseContainer;
    return styles.electrumContainer;
  }
  if (title === "Get Some Eth") {
    return styles.ethereumContainer;
  }
  return styles.uniswapContainer;
}

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

  const getImageClass = (title, index) => {
    if (title === "Create a Wallet") {
      if (index === 0) return styles.metamaskIcon;
      if (index === 1) return styles.coinbaseIcon;
      return styles.electrumIcon;
    }
    if (title === "Get Some Eth") {
      return styles.ethereumIcon;
    }
    return styles.uniswapIcon;
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
                <div 
                  key={index} 
                  className={getContainerClass(title, index)}
                >
                  <img 
                    src={ic} 
                    alt={`${title} icon ${index + 1}`} 
                    className={getImageClass(title, index)} 
                  />
                </div>
              ))
            ) : (
              <div className={getContainerClass(title)}>
                <img 
                  src={icon} 
                  alt={title} 
                  className={getImageClass(title)} 
                />
              </div>
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

const Arrow = () => (
  <div className={styles.arrow}>
    <svg width="133" height="134" viewBox="0 0 133 134" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M117.048 74.5322C81.6152 94.194 34.5765 86.9261 0.0807337 63.741" 
        stroke="white" strokeWidth="2.01505" strokeLinecap="round" strokeDasharray="6.05 6.05"/>
      <path d="M114.359 67.5758C119.091 68.237 123.34 68.9917 128.549 65.8076C126.559 68.2436 124.453 73.5269 122.909 79.7763" 
        stroke="white" strokeWidth="2.01505" strokeLinecap="round" strokeDasharray="6.05 6.05"/>
    </svg>
  </div>
)
const Arrow2 = () => (
  <div className={styles.arrow2}>
    <svg width="143" height="142" viewBox="0 0 143 142" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M125.955 65.7157C89.121 42.9786 38.568 48.4014 0.609645 71.4305" 
        stroke="white" strokeWidth="2.15248" strokeLinecap="round" strokeDasharray="6.46 6.46"/>
      <path d="M122.741 73.0051C127.823 72.5341 132.393 71.9395 137.794 75.5954C135.791 72.8974 133.806 67.1554 132.468 60.4104" 
        stroke="white" strokeWidth="2.15248" strokeLinecap="round" strokeDasharray="6.46 6.46"/>
    </svg>
  </div>
)

const HowToBuy = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1,
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 100
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className={styles.title}>How to buy</h2>
      
      <div className={styles.cardsContainer}>
        <Card 
          step="1" 
          title="Create a Wallet" 
          icon={[metamask, coinbase, electrum]} 
          rotation={21} 
        />
        <Arrow />
        <Card 
          step="2" 
          title="Get Some Eth" 
          icon={ethereum} 
          rotation={-21} 
        />
        <Arrow2 />
        <Card 
          step="3" 
          title="Go to Uniswap" 
          icon={uniswap} 
          rotation={21} 
        />
      </div>
    </motion.div>
  )
}

export default HowToBuy
