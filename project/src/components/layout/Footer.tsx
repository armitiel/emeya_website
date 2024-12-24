import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import FooterSection from './footer/FooterSection';
import SocialLinks from './footer/SocialLinks';
import { footerContent } from '../../data/footer-content';
import FooterParticles from '../effects/FooterParticles';
import GlowingOrb from '../effects/GlowingOrb';

const Footer = () => {
  const { language } = useLanguage();
  const content = footerContent[language];

  return (
    <footer className="relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-deep-night/95" />

      {/* Pattern Background */}
      <div className="absolute inset-0 bg-mystic-pattern opacity-5" />
      
      {/* Glowing Orbs */}
      <GlowingOrb className="top-0 left-0" direction="right" speed={25} />
      <GlowingOrb className="bottom-0 right-0" direction="left" speed={30} />
      
      {/* Particles Effect */}
      <FooterParticles />
      
      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="relative backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-8 w-8 text-primary-light" />
                <span className="text-2xl font-heading text-white font-bold">Redaktor Losu</span>
              </div>
              <p className="text-starlight/90 mb-6 font-body">
                {content.description}
              </p>
              <SocialLinks />
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-sm rounded-lg p-4">
              <FooterSection
                title={content.quickLinks.title}
                links={content.quickLinks.items}
              />
            </div>

            {/* Services */}
            <div className="backdrop-blur-sm rounded-lg p-4">
              <FooterSection
                title={content.services.title}
                links={content.services.items}
              />
            </div>

            {/* Contact */}
            <div className="backdrop-blur-sm rounded-lg p-4">
              <FooterSection
                title={content.contact.title}
                links={content.contact.items}
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-starlight/10 mt-12 pt-8 text-center">
            <p className="font-body text-sm text-starlight/70">
              &copy; {new Date().getFullYear()} Redaktor Losu. {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;