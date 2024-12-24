import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-gray-100 shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)]">
      <div 
        className={`absolute h-8 w-12 rounded-full transition-transform duration-200 ease-in-out ${
          language === 'pl' ? 'translate-x-0' : 'translate-x-full'
        } bg-primary shadow-[inset_0_4px_8px_rgba(0,0,0,0.25)]`}
      />
      <button
        onClick={() => setLanguage('pl')}
        className={`relative z-10 w-12 h-8 flex items-center justify-center rounded-full font-medium transition-colors ${
          language === 'pl'
            ? 'text-white'
            : 'text-gray-600 hover:text-primary'
        }`}
      >
        PL
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-12 h-8 flex items-center justify-center rounded-full font-medium transition-colors ${
          language === 'en'
            ? 'text-white'
            : 'text-gray-600 hover:text-primary'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;