import styles from './FlorkWantsYou.module.css'

const FlorkWantsYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Flork Wants you</h2>
        
        <p className={styles.description}>
          Join the Flork family by jumping into our telegram! we are waiting to give you a nice Florki hug. make sure to follow us on x for a glimpse into Flork's daily memes and happenings.
        </p>

        <div className={styles.buttonsContainer}>
          <a 
            href="https://twitter.com/HeyFlork" 
            target="_blank" 
            rel="noopener"
            className={`${styles.button} ${styles.presaleButton}`}
          >
            <svg width="277" height="68" viewBox="-1 -1 277 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_89_689)">
                <rect x="0.203247" y="0.674805" width="274" height="65" rx="18.7087" fill="url(#paint0_radial_89_689)"/>
                <text 
                  x="50%" 
                  y="50%" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="#230E74" 
                  fontSize="24"
                  fontFamily="Clash Display"
                  fontWeight="700"
                  letterSpacing="0.02em"
                  style={{ textTransform: 'uppercase' }}
                >
                  Follow me on x
                </text>
              </g>
              <defs>
                <filter id="filter0_d_89_689" x="0.203247" y="0.674805" width="274.368" height="65.7357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="0.367834" dy="0.735668"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.423529 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89_689"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89_689" result="shape"/>
                </filter>
                <radialGradient id="paint0_radial_89_689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.0729 50.3112) rotate(-5.71419) scale(205.534 48.45)">
                  <stop stopColor="#BDABFF"/>
                  <stop offset="0.445" stopColor="white"/>
                  <stop offset="1" stopColor="#9D85FC"/>
                </radialGradient>
              </defs>
            </svg>
          </a>
          <a 
            href="https://t.me/HeyFlork" 
            target="_blank" 
            rel="noopener"
            className={`${styles.button} ${styles.presaleButton}`}
          >
            <svg width="277" height="68" viewBox="-1 -1 277 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_89_689)">
                <rect x="0.203247" y="0.674805" width="274" height="65" rx="18.7087" fill="url(#paint0_radial_89_689)"/>
                <text 
                  x="50%" 
                  y="50%" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="#230E74" 
                  fontSize="24"
                  fontFamily="Clash Display"
                  fontWeight="700"
                  letterSpacing="0.02em"
                  style={{ textTransform: 'uppercase' }}
                >
                  Join my telegram
                </text>
              </g>
              <defs>
                <filter id="filter0_d_89_689" x="0.203247" y="0.674805" width="274.368" height="65.7357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="0.367834" dy="0.735668"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.423529 0 0 0 0 1 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89_689"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89_689" result="shape"/>
                </filter>
                <radialGradient id="paint0_radial_89_689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.0729 50.3112) rotate(-5.71419) scale(205.534 48.45)">
                  <stop stopColor="#BDABFF"/>
                  <stop offset="0.445" stopColor="white"/>
                  <stop offset="1" stopColor="#9D85FC"/>
                </radialGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="https://framerusercontent.com/images/oathS0hhRPIKhdybtl3wBnItOeA.png?scale-down-to=1024"
          alt="Flork Character"
          className={styles.florkImage}
        />
      </div>
    </div>
  )
}

export default FlorkWantsYou 