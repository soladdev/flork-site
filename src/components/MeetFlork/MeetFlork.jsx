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
              Flork is an SOLANA meme token inspired by a popular online webcomic known for its quirky sock puppet characters drawn in MS Paint.
            </p>
            <p className={styles.description}>
              At Flork, it's all about community no taxes, no fees. We focus on stress-free growth and success. Join us to build and thrive together!
            </p>
          </div>
        </div>
      </div>
      <LogoCarousel />
    </>
  )
}

export default MeetFlork 