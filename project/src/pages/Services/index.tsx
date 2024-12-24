import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { services } from '../../data/services';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { navigate } from '../../utils/navigation';

const ServicePage = () => {
  const { language } = useLanguage();
  const currentServices = services[language];
  const [isLoading, setIsLoading] = useState(true);
  
  // Get service ID from URL
  const serviceId = window.location.pathname.split('/services/')[1];
  const service = currentServices.find(s => s.id === serviceId);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add entrance animation class
      document.body.classList.add('page-transition-in');
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading text-primary mb-4">
            {language === 'pl' ? 'Usługa nie znaleziona' : 'Service not found'}
          </h1>
          <a 
            href="/" 
            onClick={handleBackClick}
            className="text-primary hover:text-primary-dark"
          >
            {language === 'pl' ? 'Wróć do strony głównej' : 'Back to home'}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <a
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            ← {language === 'pl' ? 'Wróć do strony głównej' : 'Back to home'}
          </a>

          {/* Hero Section */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-4xl font-heading text-white">
              {service.title}
            </h1>
          </div>

          {/* Rest of the content remains the same */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;