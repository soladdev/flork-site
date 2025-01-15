import styles from './MeetFlork.module.css'
import LogoCarousel from '../LogoCarousel/LogoCarousel'
import img from '../../assets/images/new/meet_flork.svg'
import { useRef, useEffect } from 'react'

const MeetFlork = () => {
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
    <>
      <div className={styles.meetFlorkContainer} id="meet-flork">
        <div className={styles.imageWrapper}>
          <img 
            src={img}
            alt="Flork Characters"
            className={styles.florkImage}
          />
        </div>
        <div 
          ref={cardRef}
          className={styles.contentWrapper}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className={styles.title}>MEET FLORK</h2>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Flork is a Solana-powered meme token inspired by the beloved online webcomic known for its quirky sock puppet characters drawn in MS Paint.
            </p>
            <p className={styles.description}>
              We’re redefining what it means to build a community-driven token—no taxes, no fees, just pure stress-free growth and success! At Flork, every member is a vital part of the journey as we thrive together in the Solana ecosystem.
            </p>
          </div>
        </div>
      </div>
      <LogoCarousel />
    </>
  )
}

export default MeetFlork 