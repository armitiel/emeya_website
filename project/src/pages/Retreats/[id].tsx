import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { retreats } from '../../data/retreats';
import { Calendar, MapPin, Clock, Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { navigate } from '../../utils/navigation';

const RetreatDetails = () => {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  
  const retreatId = window.location.pathname.split('/retreats/')[1];
  const retreat = retreats[language].destinations.find(r => r.id === retreatId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!retreat) {
    return (
      <div className="min-h-screen bg-gray-50 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading text-primary mb-4">
            {language === 'pl' ? 'Nie znaleziono wyprawy' : 'Retreat not found'}
          </h1>
          <button
            onClick={() => navigate('/retreats')}
            className="text-primary hover:text-primary-dark"
          >
            {language === 'pl' ? 'Wróć do listy wypraw' : 'Back to retreats'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/retreats')}
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            ← {language === 'pl' ? 'Wróć do listy wypraw' : 'Back to retreats'}
          </button>

          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={retreat.imageUrl}
              alt={retreat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-4xl font-heading text-white">
              {retreat.title}
            </h1>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>{retreat.location}</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{retreat.duration}</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span>{retreat.date}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">{retreat.description}</p>
          </div>

          {/* Highlights & Includes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-heading text-primary mb-6">
                {language === 'pl' ? 'Program' : 'Highlights'}
              </h2>
              <ul className="space-y-3">
                {retreat.highlights?.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-heading text-primary mb-6">
                {language === 'pl' ? 'W cenie' : 'Includes'}
              </h2>
              <ul className="space-y-3">
                {retreat.includes?.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-heading text-primary mb-4">
              {retreat.price}
            </div>
            <Button
              variant="primary"
              onClick={() => window.open('https://wa.me/48535448582', '_blank')}
              className="px-8 py-3"
            >
              {language === 'pl' ? 'Zarezerwuj miejsce' : 'Book your spot'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatDetails;