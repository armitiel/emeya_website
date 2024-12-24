import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import GlowingOrb from '../effects/GlowingOrb';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-deep-night z-50 flex items-center justify-center">
      {/* Background Effects */}
      <GlowingOrb className="top-0 left-0" direction="right" speed={15} />
      <GlowingOrb className="bottom-0 right-0" direction="left" speed={18} />
      
      <div className="relative flex flex-col items-center">
        <Sparkles className="w-16 h-16 text-primary animate-pulse" />
        <h1 className="mt-4 text-4xl font-heading text-white">
          Redaktor Losu
        </h1>
        <div className="mt-8 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary/50"
              style={{
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;