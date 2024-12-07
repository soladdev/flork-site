import styles from './Hero.module.css'
import TextCarousel from '../TextCarousel/TextCarousel'
import FlorkCharacter from '../FlorkCharacter/FlorkCharacter'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundWrapper}>
        <img
          className={styles.backgroundImage}
          decoding="async"
          sizes="100vw"
          srcSet="https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg?scale-down-to=2048 553w,
                  https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg?scale-down-to=4096 1106w,
                  https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg 1441w"
          src="https://framerusercontent.com/images/NpOIKJhTZgXWJ73lO8DouffVEZ0.jpg"
          alt="Background"
        />
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>WELCOME TO THE<br />FLORK'S WORLD</h1>
        <div className={styles.characterWrapper}>
          <FlorkCharacter />
        </div>
        <div className={styles.carouselWrapper}>
          <TextCarousel />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Hero

