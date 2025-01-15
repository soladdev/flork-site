import styles from './FlorkWantsYou.module.css'
import img from '../../assets/images/new/flork_celular.svg'
import { useRef } from 'react'

const FlorkWantsYou = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <div className={styles.container} id="flork-wants-you">
      <div 
        ref={cardRef}
        className={styles.contentWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className={styles.title}>Flork Wants you</h2>
        
        <p className={styles.description}>
        Hop into our Telegram and experience the warmest, quirkiest Florki hug you’ve ever had! We’re here, socks and all, ready to welcome you. 🧦💞<br/>
        Don’t forget to follow us on X for your daily dose of Flork’s hilarious memes and behind-the-scenes shenanigans. Come for the laughs, stay for the Flork vibes!
        </p>

        <div className={styles.buttonsContainer}>
          <a 
            href="https://x.com/florkcto" 
            target="_blank" 
            rel="noopener"
            className={styles.button}
          >
            Follow on x
          </a>
          <a 
            href="https://t.me/florkcommunity" 
            target="_blank" 
            rel="noopener"
            className={styles.button}
          >
            Join telegram
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={img}
          alt="Flork Character"
          className={styles.florkImage}
        />
      </div>
    </div>
  )
}

export default FlorkWantsYou 