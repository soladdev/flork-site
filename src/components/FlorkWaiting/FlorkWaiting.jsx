import styles from './FlorkWaiting.module.css'

const FlorkWaiting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Flork is Waiting</h2>
        <p className={styles.description}>
          Join him on the couch and let's make some moves
        </p>
        <a 
          href="https://app.uniswap.org/explore/tokens/ethereum/0xdb0238975ce84f89212ffa56c64c0f2b47f8f153" 
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
          srcSet="https://framerusercontent.com/images/ieRvnXrSpYiHuXfHufDrFjdNW0g.png?scale-down-to=512 512w,
                  https://framerusercontent.com/images/ieRvnXrSpYiHuXfHufDrFjdNW0g.png?scale-down-to=1024 1024w,
                  https://framerusercontent.com/images/ieRvnXrSpYiHuXfHufDrFjdNW0g.png?scale-down-to=2048 2048w,
                  https://framerusercontent.com/images/ieRvnXrSpYiHuXfHufDrFjdNW0g.png 2380w"
          src="https://framerusercontent.com/images/ieRvnXrSpYiHuXfHufDrFjdNW0g.png"
          alt="Flork resting"
        />
      </div>
    </div>
  )
}

export default FlorkWaiting 