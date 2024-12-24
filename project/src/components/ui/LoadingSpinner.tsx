import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen fixed inset-0 bg-white z-50">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          {/* Inner circle - creates the spinning gradient effect */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full animate-spin" 
               style={{ 
                 animationDirection: 'reverse',
                 animationDuration: '1s',
                 clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
               }}
          />
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default LoadingSpinner;