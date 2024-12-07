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

      <div className={styles.logoContainer}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          style={{width: '100%', height: '100%'}} 
          viewBox="0 0 112 48" 
          preserveAspectRatio="none" 
          width="100%" 
          height="100%"
        >
          <use href="#svg-1989351081_1866"></use>
        </svg>
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
