import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import TextCarousel from '../TextCarousel/TextCarousel'
import FlorkCharacter from '../FlorkCharacter/FlorkCharacter'
import MeetFlork from '../MeetFlork/MeetFlork'
import HowToBuy from '../HowToBuy/HowToBuy'
import FlorkWantsYou from '../FlorkWantsYou/FlorkWantsYou'
import ContractInfo from '../ContractInfo/ContractInfo'
import Florkonomics from '../Florkonomics/Florkonomics'
import FlorkWaiting from '../FlorkWaiting/FlorkWaiting'



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
        <h1 className={styles.title}>
          <span className={styles.titlePart1}>WELCOME TO THE</span>
          <span className={styles.titlePart2}>FLORK'S WORLD</span>
        </h1>
        <div className={styles.characterWrapper}>
          <FlorkCharacter />
        </div>
        <div className={styles.carouselWrapper}>
          <TextCarousel />
        </div>
        <MeetFlork />
        <HowToBuy />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FlorkWantsYou />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContractInfo />
        </motion.div>
          <Florkonomics />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FlorkWaiting />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

