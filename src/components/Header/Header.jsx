import { useState } from 'react'
import styles from './Header.module.css'
import { FaTelegram, FaChartLine } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsThreeDotsVertical } from 'react-icons/bs'
import logo from '../../assets/images/new/logo_flork.svg'

const ShareIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 512 512" 
    height="20px" 
    width="20px" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={styles.headerContainer}>
      {/* Sección del Logo */}
      <div className={styles.logoSection}>
        <img src={logo} alt="Flork Logo" className={styles.logo} />
        <a 
          href="https://www.florktools.io/sign-in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.florkToolsButton}
        >
          Flork Tools
        </a>
      </div>

      {/* Navegación central */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.navList}>
          <li>
            <button onClick={() => scrollToSection('meet-flork')}>
              Meet Flork
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('ai-agent')}>
              AI Agent
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('flork-wants-you')}>
              Flork Wants you
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('partners')}>
              Partners
            </button>
          </li>
        </ul>
      </nav>

      {/* Sección derecha */}
      <div className={styles.rightSection}>
        {/* Botón de redes sociales móvil */}
        <div className={styles.socialDropdown}>
          <button 
            className={styles.socialDropdownButton}
            onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}
            aria-label="Social Media Menu"
          >
            <ShareIcon />
          </button>
          
          <div className={`${styles.socialLinks} ${isSocialMenuOpen ? styles.show : ''}`}>
            <a 
              href="https://x.com/florkcto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
            <a 
              href="https://t.me/florkcommunity" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Telegram"
            >
              <FaTelegram size={20} />
            </a>
            <a 
              href="https://dexscreener.com/ethereum/TU_DIRECCION_DEL_PAR"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Dexscreener"
            >
              <FaChartLine size={20} />
            </a>
          </div>
        </div>

        {/* Enlaces sociales para PC */}
        <div className={styles.socialLinks}>
          <a 
            href="https://x.com/florkcto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a 
            href="https://t.me/florkcommunity" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
            aria-label="Telegram"
          >
            <FaTelegram size={20} />
          </a>
          <a 
            href="https://dexscreener.com/ethereum/TU_DIRECCION_DEL_PAR"
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
            aria-label="Dexscreener"
          >
            <FaChartLine size={20} />
          </a>
        </div>
        
        <a href="#" className={styles.buyButton}>
          Buy Flork
        </a>
      </div>

      {/* Botón de menú móvil */}
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${styles.top}`}></span>
        <span className={`${styles.line} ${styles.bottom}`}></span>
      </button>
    </header>
  )
}

export default Header 
