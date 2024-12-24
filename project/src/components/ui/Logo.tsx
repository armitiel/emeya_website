import React from 'react';
import { navigate } from '../../utils/navigation';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <a 
      href="/"
      className={`flex items-center space-x-2 ${className}`}
      onClick={handleClick}
    >
      <img 
        src="/images/logo copy.png" 
        alt="Logo" 
        className="h-8 w-auto"
      />
      <span className="text-2xl font-serif text-primary">Emeya</span>
    </a>
  );
};

export default Logo;