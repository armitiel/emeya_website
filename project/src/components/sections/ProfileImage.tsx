import React from 'react';
import { useInView } from '../../hooks/useInView';

const ProfileImage = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className="relative max-w-xs mx-auto mt-24 mb-24" // Increased top and bottom margin
    >
      <div 
        className={`
          relative z-10 w-72 h-72 mx-auto rounded-full overflow-hidden 
          border-4 border-white shadow-xl
          transform transition-all duration-1000 ease-out
          ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `}
      >
        <img
          src="/images/emka.jpg"
          alt="Emeya"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-4 left-4 w-72 h-72 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-primary/10 animate-pulse" 
             style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default ProfileImage;