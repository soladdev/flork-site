import styles from './LogoCarousel.module.css'

const LogoCarousel = () => {
  const logos = [
    { name: 'CoinMarketCap', img: 'https://framerusercontent.com/images/8kftVCBZ3kZQR8uZTXnVxF3A0E.png' },
    { name: 'Etherscan', img: 'https://framerusercontent.com/images/vzRTkTnoLuK5zvS2serU2qCb4.png' },
    { name: 'DexTools', img: 'https://framerusercontent.com/images/RGda8r5vYBRjhQoVyEeOY3bA.png' },
    { name: 'Uniswap', img: 'https://framerusercontent.com/images/OlPwqGHH3YI7gZT8jfrc6YaE.png' },
    { name: 'DexScreener', img: 'https://framerusercontent.com/images/pGaJgcyFGWvXfBhBJbzFgFEU.png' },
    { name: 'CoinGecko', img: 'https://framerusercontent.com/images/tQqkui5yVQ5ZxdRcEExBZlrz8.png' }
  ];
  
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={styles.logoCarouselContainer}>
      <div className={styles.movingBand}>
        <div className={styles.carouselSection}>
          <ul className={styles.carouselList}>
            {repeatedLogos.map((logo, index) => (
              <li key={`moving-${index}`} className={styles.carouselItem}>
                <img 
                  src={logo.img}
                  alt={logo.name}
                  className={styles.logoImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel 