import { useState } from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/new/logo_flork.svg'
import { FaTelegram, FaChartLine } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
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

        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><a href="#meet-flork">Meet Flork</a></li>
            <li><a href="#ai-agent">AI Agent</a></li>
            <li><a href="#flork-wants-you">Flork Wants You</a></li>
            <li><a href="#partners">Partners</a></li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a 
              href="https://x.com/florkcto" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="https://t.me/florkcommunity" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </a>
            <a 
              href="https://dexscreener.com/solana/8edbm6xtyasazqg6nn2upkyisfv81xtlmzxhcrbgekvc"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Dexscreener"
            >
              <FaChartLine size={24} />
            </a>
          </div>
        </div>

        <div className={styles.copyrightContainer}>
            <p className={styles.rights}>© 2024 Flork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer