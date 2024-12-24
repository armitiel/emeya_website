import React, { useEffect, useRef } from 'react';

interface GlowingOrbProps {
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
}

const GlowingOrb: React.FC<GlowingOrbProps> = ({ 
  className = '',
  direction = 'right',
  speed = 20 // seconds for one full cycle
}) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb || !orb.parentElement) return;

    // Set initial position based on direction
    const startX = direction === 'right' ? -256 : orb.parentElement.offsetWidth;
    const endX = direction === 'right' ? orb.parentElement.offsetWidth : -256;
    
    // Random vertical position that stays constant
    const y = Math.random() * (orb.parentElement.offsetHeight - 256);
    
    // Apply initial position
    orb.style.transform = `translate3d(${startX}px, ${y}px, 0)`;

    // Force a reflow to ensure the initial position is set
    orb.offsetHeight;

    // Add the transition class for smooth movement
    orb.style.transition = `transform ${speed}s linear infinite`;
    orb.style.transform = `translate3d(${endX}px, ${y}px, 0)`;

    // Reset position when animation ends
    const handleTransitionEnd = () => {
      orb.style.transition = 'none';
      orb.style.transform = `translate3d(${startX}px, ${y}px, 0)`;
      
      // Force a reflow
      orb.offsetHeight;
      
      // Restart the animation
      orb.style.transition = `transform ${speed}s linear infinite`;
      orb.style.transform = `translate3d(${endX}px, ${y}px, 0)`;
    };

    orb.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      orb.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [direction, speed]);

  return (
    <div
      ref={orbRef}
      className={`absolute w-64 h-64 rounded-full pointer-events-none
                 bg-gradient-radial from-primary/40 via-primary/20 to-transparent
                 blur-[100px] mix-blend-screen will-change-transform animate-pulse ${className}`}
    />
  );
};

export default GlowingOrb;