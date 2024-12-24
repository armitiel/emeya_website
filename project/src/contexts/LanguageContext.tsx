import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pl';

interface Translations {
  // Navigation
  about: string;
  services: string;
  testimonials: string;
  wisdom: string;
  community: string;
  blog: string;
  bookSession: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;

  // Services
  servicesTitle: string;
  servicesDescription: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsDescription: string;

  // Wisdom
  wisdomTitle: string;
  wisdomDescription: string;
  wisdomLibrary: string;

  // Community
  communityTitle: string;
  communityDescription: string;
  joinCommunity: string;
  joinFacebook: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    about: 'About Me',
    services: 'Services',
    testimonials: 'Testimonials',
    wisdom: 'Wisdom',
    community: 'Community',
    blog: 'Blog',
    bookSession: 'Book Session',

    // Hero
    heroTitle: 'Begin Your Journey of Holistic Healing',
    heroSubtitle: 'Discover the power of natural healing and spiritual awakening',

    // Services
    servicesTitle: 'My Services',
    servicesDescription: 'Discover my transformative services designed to support your journey',

    // Testimonials
    testimonialsTitle: 'Voices of Transformation',
    testimonialsDescription: 'Hear from those who have discovered their inner power',

    // Wisdom
    wisdomTitle: 'Stream of Wisdom',
    wisdomDescription: 'Immerse yourself in ancient knowledge and spiritual discoveries',
    wisdomLibrary: 'Wisdom Library',

    // Community
    communityTitle: 'Join Our Community',
    communityDescription: 'Join our growing community of spiritual seekers',
    joinCommunity: 'Join Community',
    joinFacebook: 'Join us on Facebook'
  },
  pl: {
    // Navigation
    about: 'O Mnie',
    services: 'Usługi',
    testimonials: 'Opinie',
    wisdom: 'Wiedza',
    community: 'Społeczność',
    blog: 'Blog',
    bookSession: 'Umów wizytę',

    // Hero
    heroTitle: 'Rozpocznij Swoją Podróż ku Holistycznemu Uzdrowieniu',
    heroSubtitle: 'Odkryj moc naturalnego uzdrawiania i duchowego przebudzenia',

    // Services
    servicesTitle: 'Moje Usługi',
    servicesDescription: 'Odkryj moje transformacyjne usługi wspierające Twoją podróż',

    // Testimonials
    testimonialsTitle: 'Głosy Przemiany',
    testimonialsDescription: 'Posłuchaj tych, którzy odkryli swoją wewnętrzną moc',

    // Wisdom
    wisdomTitle: 'Strumień Mądrości',
    wisdomDescription: 'Zanurz się w pradawnej wiedzy i duchowych odkryciach',
    wisdomLibrary: 'Biblioteka Wiedzy',

    // Community
    communityTitle: 'Dołącz do Społeczności',
    communityDescription: 'Dołącz do naszej rosnącej społeczności poszukiwaczy duchowych',
    joinCommunity: 'Dołącz do Społeczności',
    joinFacebook: 'Dołącz do nas na Facebooku'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: keyof Translations) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};