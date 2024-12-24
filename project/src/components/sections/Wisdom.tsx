import React from 'react';
import { wisdomArticles } from '../../data/wisdom';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import WisdomCard from './cards/WisdomCard';

const Wisdom = () => {
  const { language, t } = useLanguage();
  const articles = wisdomArticles[language];

  return (
    <section id="wisdom" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
      
      <div className="container mx-auto px-6 relative">
        <SectionTitle
          title={t('wisdomTitle')}
          description={t('wisdomDescription')}
          className="mb-12"
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                         w-full max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <div key={article.id} className="flex justify-center">
                <WisdomCard {...article} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wisdom;