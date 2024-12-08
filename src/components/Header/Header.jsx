import { useState } from 'react';
import styles from './Header.module.css'
import { TwitterIcon, TelegramIcon, InstagramIcon, TiktokIcon } from '../Icons'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        {/* Agregar el botón del menú */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
        >
          <span className={`${styles.line} ${styles.top}`}></span>
          <span className={`${styles.line} ${styles.bottom}`}></span>
        </button>

        {/* Sección izquierda con íconos sociales */}
        <div className={styles.leftSection}>
          <a 
            className={styles.socialIcon} 
            href="https://x.com/florkcto" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a 
            className={styles.socialIcon} 
            href="https://t.me/florkcommunity" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <TelegramIcon />
          </a>
        </div>

        {/* Logo central */}
        <div className={styles.centerLogo}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoContent}>
              <div className={styles.logoFront}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 112 48" 
                  className={styles.logoSvg}
                >
                  <path 
                    d="M75.7955 14.4236C74.852 23.9994 73.3814 43.8462 75.0463 46.6275" 
                    stroke="white" 
                    strokeWidth="2.18851" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path 
                    d="M35.1918 47.4616C35.5249 29.9833 43.2268 -3.27708 72.4211 0.312635C83.8506 2.27377 85.1357 11.3273 65.0343 19.8481C63.2673 20.5971 53.1014 23.8549 48.1619 19.8481" 
                    stroke="white" 
                    strokeWidth="2.18851" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path 
                    d="M37.7054 30.5256L41.8053 47.2697" 
                    stroke="white" 
                    strokeWidth="2.18851" 
                    strokeLinecap="square"
                    fill="none"
                  />
                  <path 
                    d="M74.2611 29.2549C72.0261 29.2549 69.8755 28.3138 68.5316 26.5279C66.7667 24.1824 64.8842 21.2335 64.6102 19.2359" 
                    stroke="white" 
                    strokeWidth="2.18851" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path 
                    d="M64.6102 19.2359L65.0486 16.7854M64.6102 19.2359L62.9095 17.0068M64.6102 19.2359L61.4824 18.8827M64.6102 19.2359L66.8596 17.7771" 
                    stroke="white" 
                    strokeWidth="2.18851" 
                    strokeLinecap="round"
                    fill="none"
                  />
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

        {/* Sección derecha */}
        <div className={styles.rightSection}>
          <a 
            className={styles.bitMartButton}
            href="https://support.bitmart.com/hc/en-us/articles/27510030800283" 
            target="_blank" 
            rel="noopener"
          >
            <img 
              src="https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png"
              alt="BitMart Logo"
            />
          </a>
          <a 
            className={styles.buyButton}
            href="#" 
            target="_blank"
          >
            Buy Flork
          </a>
        </div>
      </header>

      {/* Menú móvil */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeButton}
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        />
        <a className={styles.mobileMenuItem} href="#">
          Buy Flork
        </a>
        <a className={styles.mobileMenuItem} href="https://twitter.com/HeyFlork">
          <TwitterIcon /> Follow us on X
        </a>
        <a className={styles.mobileMenuItem} href="https://support.bitmart.com/hc/en-us/articles/27510030800283">
          <img src="https://framerusercontent.com/images/YkBCozgO5oFcd8GOeoazv2qIg.png" alt="BitMart" />
          Bitmart
        </a>
        <a className={styles.mobileMenuItem} href="https://www.instagram.com/heyflork/">
          <InstagramIcon /> Follow us on Instagram
        </a>
        <a className={styles.mobileMenuItem} href="https://www.tiktok.com/@heyflork_eth">
          <TiktokIcon /> Follow us on Tiktok
        </a>
        <a className={styles.mobileMenuItem} href="https://t.me/HeyFlork">
          <TelegramIcon /> Follow us on Telegram
        </a>
      </div>
    </>
  )
}

export default Header 
