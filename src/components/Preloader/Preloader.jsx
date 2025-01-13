import React from 'react';
import styles from './Preloader.module.css';
import florkCargando from '../../assets/images/new/flork_loading.svg';
import loaderGif from '../../assets/images/new/gif_loader.gif';
import backgroundImage from '../../assets/images/new/background.png';

const Preloader = () => {
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