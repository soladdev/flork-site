import { useState } from 'react'
import styles from './Header.module.css'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'
import logo from '../../assets/images/new/logo_flork.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={styles.headerContainer}>
      {/* Logo */}
      <div className={styles.logoSection}>
        <img src={logo} alt="Flork Logo" className={styles.logo} />
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
            <button onClick={() => scrollToSection('how-to-buy')}>
              How to Buy
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('florkonomics')}>
              Florkonomics
            </button>
          </li>
        </ul>
      </nav>

      {/* Sección derecha */}
      <div className={styles.rightSection}>
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
