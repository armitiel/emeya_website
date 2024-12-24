import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import RetreatCard from './components/RetreatCard';
import { retreats } from '../../data/retreats';

const Retreats = () => {
  const { language } = useLanguage();
  const content = retreats[language];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-heading text-primary mb-6">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 font-body">
            {content.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.destinations.map((retreat) => (
            <RetreatCard key={retreat.id} {...retreat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Retreats;