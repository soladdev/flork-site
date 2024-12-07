import styles from './Header.module.css'
import { TwitterIcon, TelegramIcon } from '../Icons'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.socialLinks}>
        <a className={styles.socialLink} href="https://twitter.com/HeyFlork" target="_blank" rel="noopener">
          <TwitterIcon />
        </a>
        <a className={styles.socialLink} href="https://t.me/HeyFlork" target="_blank" rel="noopener">
          <TelegramIcon />
        </a>
      </div>

      <div className={styles.centerLogo}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoContent}>
            <div className={styles.logoFront}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 112 48" 
                className={styles.logoSvg}
              >
                {/* Cuello */}
                <path 
                  d="M75.7955 14.4236C74.852 23.9994 73.3814 43.8462 75.0463 46.6275" 
                  stroke="white" 
                  strokeWidth="2.18851" 
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Cabeza principal */}
                <path 
                  d="M35.1918 47.4616C35.5249 29.9833 43.2268 -3.27708 72.4211 0.312635C83.8506 2.27377 85.1357 11.3273 65.0343 19.8481C63.2673 20.5971 53.1014 23.8549 48.1619 19.8481" 
                  stroke="white" 
                  strokeWidth="2.18851" 
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Línea izquierda adicional */}
                <path 
                  d="M37.7054 30.5256L41.8053 47.2697" 
                  stroke="white" 
                  strokeWidth="2.18851" 
                  strokeLinecap="square"
                  fill="none"
                />
                {/* Detalles de la cara */}
                <path 
                  d="M74.2611 29.2549C72.0261 29.2549 69.8755 28.3138 68.5316 26.5279C66.7667 24.1824 64.8842 21.2335 64.6102 19.2359" 
                  stroke="white" 
                  strokeWidth="2.18851" 
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Líneas adicionales */}
                <path 
                  d="M64.6102 19.2359L65.0486 16.7854M64.6102 19.2359L62.9095 17.0068M64.6102 19.2359L61.4824 18.8827M64.6102 19.2359L66.8596 17.7771" 
                  stroke="white" 
                  strokeWidth="2.18851" 
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Puntos */}
                <rect 
                  x="72.4399" 
                  y="7.21997" 
                  width="2.60386" 
                  height="2.60386" 
                  rx="1.30193" 
                  fill="white"
                />
                <rect 
                  x="59.814" 
                  y="11.0142" 
                  width="2.40942" 
                  height="2.64792" 
                  rx="1.20471" 
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.logoBack}>
              <p className={styles.logoText}>HeyFlork</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <a 
          className={styles.bitMartButton}
          href="https://support.bitmart.com/hc/en-us/articles/27510030800283--Primary-Listing-BitMart-Will-List-HeyFlork-HEYFLORK" 
          target="_blank" 
          rel="noopener"
        >
          <img 
            src="https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png"
            alt="BitMart Logo"
            decoding="async"
            sizes="25px"
            srcSet="https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png?scale-down-to=512 512w,
                    https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png 1500w"
          />
        </a>
        <a 
          className={styles.buyButton}
          href="https://app.uniswap.org/explore/tokens/ethereum/0xdb0238975ce84f89212ffa56c64c0f2b47f8f153" 
          target="_blank"
        >
          Buy Flork
        </a>
      </div>
    </header>
  )
}

export default Header 
