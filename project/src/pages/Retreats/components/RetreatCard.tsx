import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { MysticCard } from '../../../components/ui/MysticCard';
import Button from '../../../components/ui/Button';
import { useLanguage } from '../../../contexts/LanguageContext';
import { navigate } from '../../../utils/navigation';
import type { Retreat } from '../../../types/retreats';

const RetreatCard: React.FC<Retreat> = ({
  id,
  title,
  description,
  location,
  duration,
  date,
  imageUrl,
}) => {
  const { language } = useLanguage();
  const details = language === 'pl' ? 'Szczegóły' : 'Details';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/retreats/${id}`);
  };

  return (
    <MysticCard className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-heading text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-primary/70" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-primary/70" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-primary/70" />
            <span>{date}</span>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-full hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          {details}
        </Button>
      </div>
    </MysticCard>
  );
};

export default RetreatCard;