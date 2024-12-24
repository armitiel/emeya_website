import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

const BlogHeader = () => {
  const { language } = useLanguage();
  
  const t = language === 'pl' ? {
    title: 'Blog',
    description: 'Odkryj najnowsze artykuły o duchowości, rozwoju osobistym i holistycznym zdrowiu.'
  } : {
    title: 'Blog',
    description: 'Discover the latest articles about spirituality, personal development, and holistic health.'
  };

  return (
    <div className="container mx-auto px-6 mb-16">
      <h1 className="text-5xl font-heading text-primary mb-6 text-center">
        {t.title}
      </h1>
      <p className="text-lg text-gray-600 font-body text-center max-w-2xl mx-auto">
        {t.description}
      </p>
    </div>
  );
};

export default BlogHeader;