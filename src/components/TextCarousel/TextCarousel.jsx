import styles from './TextCarousel.module.css'

const TextCarousel = () => {
  const items = ['$FLORK', 'FLORK', '$FLORK', 'FLORK'];
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.carouselContainer}>
      {/* Banda estática de fondo */}
      <div className={styles.staticBand}>
        <div className={styles.carouselSection}>
          <ul className={styles.carouselList}>
            {repeatedItems.map((item, index) => (
              <li key={`static-${index}`} className={styles.carouselItem}>
                <div className={styles.circle} />
                <p className={styles.text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banda en movimiento */}
      <div className={styles.movingBand}>
        <div className={styles.carouselSection}>
          <ul className={styles.carouselList}>
            {repeatedItems.map((item, index) => (
              <li key={`moving-${index}`} className={styles.carouselItem}>
                <div className={styles.circle} />
                <p className={styles.text}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TextCarousel
