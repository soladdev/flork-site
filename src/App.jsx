import { useState, useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Preloader from './components/Preloader/Preloader'
import './styles/globals.css'
import './styles/variables.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [hoverClickable, setHoverClickable] = useState(false);
  const [cursorSet, setCursorSet] = useState(() => {
    // Seleccionar aleatoriamente entre 1, 2, 3 y 4
    return Math.floor(Math.random() * 4) + 1;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Función para manejar el hover
    const handleMouseEnter = (e) => {
      const isClickable = e.target.matches(
        'a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], [tabindex]:not([tabindex="-1"]), .link'
      );
      setHoverClickable(isClickable);
    };

    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

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
        </>
      )}
    </div>
  )
}

export default App
