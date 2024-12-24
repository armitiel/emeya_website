import React from 'react';
import { MysticCard } from '../../ui/MysticCard';
import { useLanguage } from '../../../contexts/LanguageContext';
import { navigate } from '../../../utils/navigation';
import { useInView } from '../../../hooks/useInView';
import type { Service } from '../../../types/services';

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, imageUrl, index }) => {
  const { language } = useLanguage();
  const details = language === 'pl' ? 'Poznaj szczegóły' : 'Learn more';
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/services/${id}`);
  };

  // Calculate staggered delay based on index
  const delay = index * 150; // 150ms delay between each card

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
                  ${isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <MysticCard className="flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-all duration-500 ease-out
                       group-hover:scale-105 group-hover:filter group-hover:drop-shadow-[0_0_15px_rgba(132,107,185,0.3)]"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-heading text-primary mb-3 text-center">
            {title}
          </h3>
          <p className="text-sm text-gray-600 font-body mb-4 text-center">
            {description}
          </p>
          
          <a 
            href={`/services/${id}`}
            onClick={handleClick}
            className="mt-auto mx-auto px-5 py-2 rounded-full bg-primary hover:bg-primary-light transition-colors text-white text-sm font-medium"
          >
            {details}
          </a>
        </div>
      </MysticCard>
    </div>
  );
};

export default ServiceCard;