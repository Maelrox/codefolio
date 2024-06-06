import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import slide1 from '../assets/home/slide-1.jpg';
import slide2 from '../assets/home/slide-2.jpg';

const slides = [slide1, slide2];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFadeIn(true);
      }, 0);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider text-white" style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
      {slides.map((slide, idx) => (
        <Transition key={idx} in={idx === index && fadeIn} timeout={100}>
          {(state) => (
            <img
              src={slide}
              alt={`Slide ${idx + 1}`}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                transition: 'opacity 0.5s ease-in-out',
                opacity: state === 'entered' ? 1 : 0,
                zIndex: idx === index ? 1 : 0,
              }}
            />
          )}
        </Transition>
      ))}
    </section>
  );
};

export default HeroSlider;