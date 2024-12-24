import React from 'react';

interface MysticCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MysticCard = ({ children, className = '' }: MysticCardProps) => {
  return (
    <div className={`mystic-card ${className}`}>
      {children}
    </div>
  );
};