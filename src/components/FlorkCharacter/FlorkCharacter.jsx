import { useState, useEffect } from 'react'
import styles from './FlorkCharacter.module.css'
import a1 from '../../assets/images/new/plaza_blanca.png'


const FlorkCharacter = () => {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterWrapper}>
        <img 
          className={styles.characterImage}
          decoding="async"
          sizes="100vw"
          srcSet={`${a1}?scale-down-to=512 512w,
                  ${a1}?scale-down-to=1024 1024w,
                  ${a1}?scale-down-to=2048 2048w,
                  ${a1} 2940w`}
          src={a1}
          alt="Flork Character"
        />
      </div>
    </div>
  )
}

export default FlorkCharacter
