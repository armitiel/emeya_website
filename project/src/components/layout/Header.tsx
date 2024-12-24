import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, MobileNavLink } from './NavigationLinks';
import Logo from '../ui/Logo';
import AuthButton from '../auth/AuthButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();

  // Check if we're on a page that should always show the header
  const path = window.location.pathname;
  const isFixedHeader = path === '/blog' || path.startsWith('/services/') || path === '/retreats' || path.startsWith('/retreats/');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide header on home page
      if (!isFixedHeader) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixedHeader, lastScrollY]);

  // Handle mobile menu link click
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isFixedHeader || isMenuOpen ? 'bg-white shadow-lg' : isVisible ? 'bg-white/90 backdrop-blur-sm shadow-lg' : '-translate-y-full'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">{t('about')}</NavLink>
              <NavLink href="#services">{t('services')}</NavLink>
              <NavLink href="/retreats">Wyjazdy</NavLink>
              <NavLink href="#testimonials">{t('testimonials')}</NavLink>
              <NavLink href="#wisdom">{t('wisdom')}</NavLink>
              <NavLink href="/blog">{t('blog')}</NavLink>
              <LanguageSwitcher />
              <AuthButton />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative w-12 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-8 h-6">
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-1/2 -translate-y-1/2 rotate-45' 
                      : 'top-1.5'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-primary transform -translate-y-1/2 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'top-1/2 -translate-y-1/2 -rotate-45' 
                      : 'bottom-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0' }}
      >
        <div className="h-[73px]" /> {/* Spacer for header height */}
        <div className="flex flex-col items-center justify-center space-y-6 p-6">
          <div className="flex flex-col items-center space-y-6 text-center w-full">
            <MobileNavLink href="#about" onClick={handleMobileLinkClick}>{t('about')}</MobileNavLink>
            <MobileNavLink href="#services" onClick={handleMobileLinkClick}>{t('services')}</MobileNavLink>
            <MobileNavLink href="/retreats" onClick={handleMobileLinkClick}>Wyjazdy</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={handleMobileLinkClick}>{t('testimonials')}</MobileNavLink>
            <MobileNavLink href="#wisdom" onClick={handleMobileLinkClick}>{t('wisdom')}</MobileNavLink>
            <MobileNavLink href="/blog" onClick={handleMobileLinkClick}>{t('blog')}</MobileNavLink>
            <div className="pt-4 flex justify-center w-full">
              <LanguageSwitcher />
            </div>
            <div className="pt-2 flex justify-center w-full">
              <AuthButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;