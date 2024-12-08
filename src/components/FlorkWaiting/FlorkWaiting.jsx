import styles from './FlorkWaiting.module.css'
import img from '../../assets/images/a6.avif'
const FlorkWaiting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Flork is Waiting</h2>
        <p className={styles.description}>
          Join him on the couch and let's make some moves
        </p>
        <a 
          href="#" 
          target="_blank"
          rel="noopener"
          className={styles.buyButton}
        >
          Buy Flork
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.florkImage}
          decoding="async"
          loading="lazy"
          sizes="594px"
          srcSet={`${img}?scale-down-to=512 512w,
                  ${img}?scale-down-to=1024 1024w,
                  ${img}?scale-down-to=2048 2048w,
                  ${img} 2380w`}
          src={img}
          alt="Flork resting"
        />
      </div>
    </div>
  )
}

export default FlorkWaiting 