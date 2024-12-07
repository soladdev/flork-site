import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Logo = () => {
  return (
    <motion.div 
      className={styles.logoWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logoContainer}>
        <div className={styles.logoFront}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            style={{width: '100%', height: '100%'}} 
            viewBox="0 0 112 48" 
            preserveAspectRatio="none"
          >
            <use href="#svg-1989351081_1866"></use>
          </svg>
        </div>
        <div className={styles.logoBack}>
          <p className={styles.logoText}>HeyFlork</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo; 