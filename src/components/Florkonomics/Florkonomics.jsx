import styles from './Florkonomics.module.css'

const Florkonomics = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.speakerImage}
            decoding="async"
            sizes="648px"
            srcSet="https://framerusercontent.com/images/vMLlKZOC7Ycum7b9gFkTondKW0.png?scale-down-to=512 512w,
                    https://framerusercontent.com/images/vMLlKZOC7Ycum7b9gFkTondKW0.png?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/vMLlKZOC7Ycum7b9gFkTondKW0.png?scale-down-to=2048 2048w,
                    https://framerusercontent.com/images/vMLlKZOC7Ycum7b9gFkTondKW0.png 2589w"
            src="https://framerusercontent.com/images/vMLlKZOC7Ycum7b9gFkTondKW0.png"
            alt="Speaker"
          />
        </div>
        
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Florkonomics</h2>
          
          <div className={styles.infoContainer}>
            <p className={styles.info}>
              <span className={styles.label}>Total Supply:</span> 1,000,000,000
            </p>
            <p className={styles.info}>
              Circulation : 100%
            </p>
            <p className={styles.info}>
              0% buy/sell tax on DEX
            </p>
          </div>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.detailsWrapper}>
          <span className={styles.detailText}>Tax <span className={styles.highlight}>0%</span></span>
          <span className={styles.separator}>|</span>
          <span className={styles.detailText}>CA <span className={styles.highlight}>Renounced</span></span>
          <span className={styles.separator}>|</span>
          <span className={styles.detailText}>Liquidity <span className={styles.highlight}>Burned</span></span>
          <span className={styles.separator}>|</span>
          <span className={styles.detailText}>Total Supply <span className={styles.highlight}>1B</span></span>
        </div>
      </div>
    </>
  )
}

export default Florkonomics 