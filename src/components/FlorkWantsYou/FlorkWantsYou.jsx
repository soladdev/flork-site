import styles from './FlorkWantsYou.module.css'
import img from '../../assets/images/a3.avif'
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
    <div className={styles.container}>
      <div 
        ref={cardRef}
        className={styles.contentWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className={styles.title}>Flork Wants you</h2>
        
        <p className={styles.description}>
          Join the Flork family by jumping into our telegram! we are waiting to give you a nice Florki hug. make sure to follow us on x for a glimpse into Flork's daily memes and happenings.
        </p>

        <div className={styles.buttonsContainer}>
          <a 
            href="https://x.com/florkcto" 
            target="_blank" 
            rel="noopener"
            className={styles.button}
          >
            Follow me on x
          </a>
          <a 
            href="https://t.me/florkcommunity" 
            target="_blank" 
            rel="noopener"
            className={styles.button}
          >
            Join my telegram
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