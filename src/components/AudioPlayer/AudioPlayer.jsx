import { useState, useRef } from 'react'
import styles from './AudioPlayer.module.css'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className={styles.audioContainer} onClick={togglePlay}>
      <audio
        ref={audioRef}
        src="https://framerusercontent.com/assets/GInElBL8d04sbaXcADQ9pRHyt4.mp3"
        loop
        preload="metadata"
      />
      {isPlaying ? (
        // Ícono de pausa
        <svg 
          width="16" 
          aria-label="pause audio" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16"
        >
          <path 
            d="M 3 3 C 3 2.448 3.448 2 4 2 L 6 2 C 6.552 2 7 2.448 7 3 L 7 13 C 7 13.552 6.552 14 6 14 L 4 14 C 3.448 14 3 13.552 3 13 Z" 
            fill="#343434"
          />
          <path 
            d="M 9 3 C 9 2.448 9.448 2 10 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 13 C 13 13.552 12.552 14 12 14 L 10 14 C 9.448 14 9 13.552 9 13 Z" 
            fill="#343434"
          />
        </svg>
      ) : (
        // Ícono de reproducción
        <svg 
          width="16" 
          aria-label="play audio" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16"
        >
          <path 
            d="M 5.379 1.292 C 4.968 1.033 4.449 1.017 4.023 1.251 C 3.598 1.486 3.334 1.933 3.333 2.419 L 3.333 13.581 C 3.334 14.067 3.598 14.514 4.023 14.749 C 4.449 14.983 4.968 14.967 5.379 14.708 L 14.215 9.127 C 14.602 8.883 14.836 8.457 14.836 8 C 14.836 7.543 14.602 7.117 14.215 6.873 Z" 
            fill="#333"
          />
        </svg>
      )}
    </div>
  )
}

export default AudioPlayer 