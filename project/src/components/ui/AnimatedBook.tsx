import React from 'react';
import { Book } from 'lucide-react';

interface AnimatedBookProps {
  className?: string;
  size?: number;
}

const AnimatedBook: React.FC<AnimatedBookProps> = ({ className = '', size = 24 }) => {
  return (
    <div className={`relative group ${className}`}>
      <Book 
        size={size}
        className="text-primary transition-all duration-300 ease-out
                   group-hover:scale-110 group-hover:rotate-[-8deg]
                   group-hover:drop-shadow-[0_0_8px_rgba(132,107,185,0.5)]"
      />
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-primary/0 rounded-full transition-all duration-300
                    group-hover:bg-primary/10 group-hover:scale-150 group-hover:blur-md" />
    </div>
  );
};

export default AnimatedBook;