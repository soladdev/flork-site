import { useState, useEffect } from 'react'
import styles from './FlorkCharacter.module.css'
import a1 from '../../assets/images/new/plaza_blanca.png'

const FlorkCharacter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let time = 0;

    const animate = () => {
      // Movimiento suave usando funciones seno y coseno
      const moveX = Math.sin(time) * 15; // 15px es la amplitud del movimiento horizontal
      const moveY = Math.cos(time) * 10; // 10px es la amplitud del movimiento vertical
      
      setPosition({ x: moveX, y: moveY });
      
      time += 0.015; // Velocidad de la animación
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.characterContainer}>
      <div 
        className={styles.characterWrapper}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
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
