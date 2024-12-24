import React from 'react';
import { navigate, isOnPage } from '../../utils/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`text-gray-600 hover:text-primary transition-colors font-medium ${
        isOnPage(href) ? 'text-primary' : ''
      }`}
    >
      {children}
    </a>
  );
};

export const MobileNavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
    if (onClick) onClick();
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`block text-gray-600 hover:text-primary transition-colors font-medium text-center w-full ${
        isOnPage(href) ? 'text-primary' : ''
      }`}
    >
      {children}
    </a>
  );
};