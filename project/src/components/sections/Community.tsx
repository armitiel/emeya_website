import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Community = () => {
  const { t } = useLanguage();
  
  return (
    <section id="community" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
      
      <div className="container mx-auto px-6 relative">
        <SectionTitle
          title={t('communityTitle')}
          description={t('communityDescription')}
        />

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Facebook Link */}
          <Button
            variant="primary"
            onClick={() => window.open('https://facebook.com', '_blank')}
            className="flex items-center space-x-2 px-6 py-3 w-full sm:w-auto"
          >
            <Facebook className="w-5 h-5" />
            <span>{t('joinFacebook')}</span>
          </Button>

          {/* WhatsApp Group Link */}
          <Button
            variant="primary"
            onClick={() => window.open('https://chat.whatsapp.com/light-patterns', '_blank')}
            className="flex items-center space-x-2 px-6 py-3 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Dołącz do Grupy WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;