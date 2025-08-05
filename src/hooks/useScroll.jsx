// src/hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from 'lenis';

const useScroll = () => {
  useEffect(() => {
    //uncomment for smooth scroll
    const lenis = new Lenis({
      // smoothWheel: true,
      // lerp: 0.07,
      // autoRaf: false,
      // anchors: true,
      // wheelMultiplier: 0.5, 
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useScroll;
