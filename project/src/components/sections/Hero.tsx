import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Particles from '../effects/Particles';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const { language } = useLanguage();

  const content = {
    pl: {
      title: 'Redaktor Losu',
      subtitle: 'Odkryj swoją prawdziwą ścieżkę i przekształć swoje przeznaczenie poprzez starożytną mądrość i duchowe przewodnictwo'
    },
    en: {
      title: 'Fate Editor',
      subtitle: 'Discover your true path and transform your destiny through ancient wisdom and spiritual guidance'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url('/images/your-image copy copy.png')`,
          transform: `translateY(${offset * 0.15}px)`,
        }}
      />

      {/* Mystical Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/40 to-primary/60" />

      {/* Particles Effect */}
      <Particles />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-['GreatVibes'] text-7xl md:text-8xl mb-6 text-starlight tracking-wide [text-shadow:_0_0_30px_rgba(255,255,255,0.3)] animate-float">
            {content[language].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-starlight/90 font-body font-light tracking-wide">
            {content[language].subtitle}
          </p>
        </div>
      </div>

      {/* Mystical Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 rounded-full border-2 border-starlight/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-starlight/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;