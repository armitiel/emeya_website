import React from 'react';
import WisdomHeader from './components/WisdomHeader';
import TopicGrid from './components/TopicGrid';
import { wisdomContent } from '../../data/wisdom-content';
import { useLanguage } from '../../contexts/LanguageContext';

const Wisdom = () => {
  const { language } = useLanguage();
  const content = wisdomContent[language];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <WisdomHeader title={content.title} subtitle={content.subtitle} />
        <TopicGrid topics={content.topics} />
      </div>
    </div>
  );
}

export default Wisdom;