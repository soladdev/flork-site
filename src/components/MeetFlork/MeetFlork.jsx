import styles from './MeetFlork.module.css'
import LogoCarousel from '../LogoCarousel/LogoCarousel'
import img from '../../assets/images/a2.avif'

const MeetFlork = () => {
  return (
    <>
      <div className={styles.meetFlorkContainer}>
        <div className={styles.imageWrapper}>
          <img 
            src={img}
            alt="Flork Characters"
            className={styles.florkImage}
          />
        </div>
        <div className={styles.contentWrapper}>
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