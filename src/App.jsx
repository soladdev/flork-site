import { useState, useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Preloader from './components/Preloader/Preloader'
import backgroundImage from './assets/images/new/flork_background_blanco_01.png'
import './styles/globals.css'
import './styles/variables.css'
import Footer from './components/Footer/Footer'
function App() {
  const [loading, setLoading] = useState(true);
  const [hoverClickable, setHoverClickable] = useState(false);
  const [cursorSet, setCursorSet] = useState(() => {
    return Math.floor(Math.random() * 4) + 1;
  });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Primero esperar que las fuentes se carguen
    document.fonts.ready
      .then(() => {
        setFontsLoaded(true);
        // Luego cargar las imágenes
        return new Promise((resolve) => {
          const img = new Image();
          img.src = backgroundImage;
          img.onload = resolve;
          img.onerror = resolve; // Asegura que no se quede colgado si la imagen falla
        });
      })
      .then(() => {
        // Agregar un pequeño delay adicional para asegurar una transición suave
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    // Función para manejar el hover
    const handleMouseEnter = (e) => {
      const isClickable = e.target.matches(
        'a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], [tabindex]:not([tabindex="-1"]), .link'
      );
      setHoverClickable(isClickable);
    };

    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // Puedes realizar acciones adicionales si las fuentes están cargadas
    }
  }, [fontsLoaded]);

  return (
    <div className="app-container">
      <AnimatedCursor
        innerSize={32}
        outerSize={32}
        color='255, 255, 255'
        outerAlpha={0}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={8}
        hasBlendMode={false}
        zIndex={9999}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'transparent',
          backgroundImage: hoverClickable 
            ? `url('/cursors/cursor_p${cursorSet}.${cursorSet >= 2 ? 'gif' : 'png'}')`
            : `url('/cursors/cursor_c${cursorSet}.png')`,
          backgroundSize: '32px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          mixBlendMode: 'normal',
          width: '32px',
          height: '32px',
          transition: 'background-image 0.2s ease',
          imageRendering: 'pixelated',
          zIndex: 9999
        }}
      />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
