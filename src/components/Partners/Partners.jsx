import { useEffect, useState, useRef } from 'react';
import styles from './Partners.module.css'

// Importar dinámicamente todas las imágenes de partners
const partnerImages = import.meta.glob('../../assets/images/partners/*.{png,svg}', { eager: true });

const partnerLinks = {
  '1': 'https://twitter.com/yellowcapitalhq',
  '2': 'https://otro-enlace.com',
};

const partners = Object.entries(partnerImages).map(([path, module]) => {
  const name = path.split('/').pop().split('.')[0];
  return {
    name: `Partner ${name}`,
    img: module.default,
    link: partnerLinks[name] || '#'
  };
});

const Partners = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const repeatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (position === 0) {
      const itemWidth = slider.firstElementChild?.offsetWidth || 0;
      const gap = 60;
      const totalWidth = (itemWidth + gap) * partners.length;
      setPosition(-totalWidth);
    }

    const moveSlider = () => {
      if (isPaused) return;

      setPosition(prev => {
        const newPosition = prev - 1;
        const itemWidth = slider.firstElementChild?.offsetWidth || 0;
        const gap = 60;
        const totalWidth = (itemWidth + gap) * partners.length;

        if (Math.abs(newPosition) >= totalWidth * 2) {
          return -totalWidth;
        }
        return newPosition;
      });
    };

    const intervalId = setInterval(moveSlider, 20);
    return () => clearInterval(intervalId);
  }, [isPaused, position, partners.length]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Partners & Exchanges</h2>
      <div className={styles.logoCarouselContainer}>
        <div className={styles.movingBand}>
          <div 
            className={styles.carouselSection}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ul 
              ref={sliderRef}
              className={styles.carouselList}
              style={{ 
                transform: `translateX(${position}px)`,
                transition: 'transform 0s linear'
              }}
            >
              {repeatedPartners.map((partner, index) => (
                <li key={`partner-${index}`} className={styles.carouselListItem}>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.carouselItem}
                  >
                    <img 
                      src={partner.img} 
                      alt={partner.name}
                      className={styles.logoImage}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners