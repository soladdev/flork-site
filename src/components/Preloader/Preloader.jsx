import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import florkCargando from '../../assets/images/new/flork_loading.svg';
import loaderGif from '../../assets/images/new/gif_loader.gif';
import backgroundImage from '../../assets/images/new/flork_background_blanco_01.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      // Cargar fuentes
      document.fonts.ready,
      // Tus promesas existentes de imágenes
      new Promise((resolve) => {
        const img = new Image();
        img.src = backgroundImage;
        img.onload = resolve;
      })
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.backgroundWrapper}>
        <img
          className={styles.backgroundImage}
          decoding="async"
          sizes="100vw"
          src={backgroundImage}
          alt="Background"
        />
      </div>
      <div className={styles.preloaderContent}>
        <img src={florkCargando} alt="Flork cargando" className={styles.florkImage} />
        <div className={styles.spinnerContainer}>
          <img src={loaderGif} alt="Cargando..." className={styles.loaderGif} />
        </div>
      </div>
    </div>
  );
};

export default Preloader; 