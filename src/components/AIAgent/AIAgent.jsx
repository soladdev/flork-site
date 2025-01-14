import { useEffect, useRef } from 'react'
import styles from './AIAgent.module.css'
import florkImage from '../../assets/images/new/flork_ai.svg'
import flechaImage from '../../assets/images/flecha.svg'
import flecha2Image from '../../assets/images/flecha2.svg'
import gsap from 'gsap'

const AIAgent = () => {
  const cards = [
    { 
      title: 'SENTIMENT TRACKER', 
      id: 1,
      description: 'This agent evaluates public sentiment towards a token, identifying whether it is positive or negative.',
      arrowClass: styles.arrow1,
      arrowImage: flechaImage
    },
    { 
      title: 'SOCIAL NETWORK', 
      id: 2,
      description: 'This agent evaluates social media for interaction volume and content quality.',
      arrowClass: styles.arrow2,
      arrowImage: flechaImage
    },
    { 
      title: 'TOKEN TRACKER', 
      id: 3,
      description: 'It assesses risks such as rug pulls, insider activity, whales, honeypots, and more.',
      arrowClass: styles.arrow3,
      arrowImage: flecha2Image
    },
    { 
      title: 'LP FARMS TRACKER', 
      id: 4,
      description: 'It analyzes liquidity pools to determine the number of existing LPs and the profitability of creating a new one.',
      arrowClass: styles.arrow4,
      arrowImage: flecha2Image
    }
  ]

  const rightCard = {
    title: 'LP FARMER',
    description: 'Once the four agents approve their analysis, the fifth agent creates a liquidity pair for the token and farms the fees. When the LP becomes unprofitable, the agent dismantles it.',
    arrowClass: styles.arrow5,
    arrowImage: flecha2Image
  }

  useEffect(() => {
    document.querySelectorAll(`.${styles.card}`).forEach(card => {
      const tl = gsap.timeline({ paused: true })
      const arrow = card.querySelector(`.${styles.arrowRight}`) || card.querySelector(`.${styles.arrowLeft}`)
      
      tl.to(card, {
        duration: 0.5,
        scale: 1.05,
        ease: "power2.out"
      })
      .to(card.querySelector(`.${styles.cardInner}`), {
        duration: 0.8,
        rotateY: 180,
        ease: "power2.inOut"
      }, 0)
      
      card.addEventListener('mouseenter', () => tl.play())
      card.addEventListener('mouseleave', () => tl.reverse())
    })
  }, [])

  return (
    <section className={styles.container} id="ai-agent">
      <div className={styles.backgroundSquare}>
        <div className={styles.browserBar}>
          <div className={styles.browserControls}>
            <span className={styles.browserDot}></span>
            <span className={styles.browserDot}></span>
            <span className={styles.browserDot}></span>
          </div>
          <div className={styles.browserAddress}>
            <span className={styles.lockIcon}>🔒</span>
            <a href="https://florkcto.io/" target="_blank" className={styles.url} style={{ textDecoration: 'none'}}>florkcto.io/</a>
          </div>
        </div>
      </div>
      <div className={styles.footer}>

      </div>
      <div className={styles.content}>
        <div className={styles.leftCards}>
          {cards.map(card => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.cardTitle}>{card.title}</span>
                </div>
                <div className={styles.cardBack}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardBackTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </div>
              </div>
              <img 
                src={card.arrowImage} 
                alt={`arrow-${card.id}`} 
                className={`${styles.arrowRight} ${card.arrowClass}`}
              />
            </div>
          ))}
        </div>

        <div className={styles.centerContent}>
          <div className={styles.imageWrapper}>
            <img src={florkImage} alt="Flork AI Agent" className={styles.florkImage} />
            <div className={styles.mainAgentText}>
              <h3>MAIN AI AGENT</h3>
              <h3>$FLORK</h3>
            </div>
          </div>
        </div>

        <div className={styles.rightCards}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.cardTitle}>{rightCard.title}</span>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardBackTitle}>{rightCard.title}</h3>
                  <p className={styles.cardDescription}>{rightCard.description}</p>
                </div>
              </div>
            </div>
            <img 
              src={rightCard.arrowImage} 
              alt="arrow-5" 
              className={`${styles.arrowLeft} ${rightCard.arrowClass}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAgent 