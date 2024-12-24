import React from 'react';
import ServiceCard from './cards/ServiceCard';
import { services } from '../../data/services';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../ui/SectionTitle';

const Services = () => {
  const { language, t } = useLanguage();
  const currentServices = services[language];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          title={t('servicesTitle')}
          description={t('servicesDescription')}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {currentServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;