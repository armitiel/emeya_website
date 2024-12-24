import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MysticCard } from '../../components/ui/MysticCard';
import { Star, Users, Calendar, Clock, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const PersonalDevelopment = () => {
  const { language } = useLanguage();

  const content = language === 'pl' ? {
    title: 'Warsztaty Samorozwoju',
    subtitle: 'Odkryj swoją wewnętrzną moc i potencjał',
    description: 'Zapraszam Cię w transformacyjną podróż samopoznania i rozwoju osobistego. Podczas warsztatów łączę starożytną mądrość z nowoczesnymi technikami rozwojowymi, tworząc przestrzeń do głębokiej przemiany i wzrostu.',
    details: {
      duration: '3 godziny',
      participants: '6-12 osób',
      frequency: 'Co tydzień',
      location: 'Warszawa Centrum'
    },
    benefits: [
      'Odkrywanie i wzmacnianie swojego potencjału',
      'Praca z przekonaniami ograniczającymi',
      'Rozwój intuicji i świadomości',
      'Techniki medytacji i uważności',
      'Narzędzia do zarządzania emocjami',
      'Praktyki ugruntowania i centrowania'
    ],
    workshops: [
      {
        title: 'Podstawy Świadomego Życia',
        description: 'Wprowadzenie do praktyk mindfulness i technik samoświadomości.',
        duration: '3 godziny',
        price: '297 PLN'
      },
      {
        title: 'Transformacja Przekonań',
        description: 'Identyfikacja i przemiana ograniczających wzorców myślowych.',
        duration: '3 godziny',
        price: '297 PLN'
      },
      {
        title: 'Rozwój Intuicji',
        description: 'Pogłębianie połączenia z wewnętrzną mądrością.',
        duration: '3 godziny',
        price: '297 PLN'
      }
    ],
    cta: 'Zarezerwuj miejsce',
    included: 'W cenie warsztatów',
    includedItems: [
      'Materiały szkoleniowe',
      'Certyfikat uczestnictwa',
      'Herbata i przekąski',
      'Indywidualna konsultacja'
    ]
  } : {
    // English content...
    title: 'Personal Development Workshops',
    subtitle: 'Discover your inner power and potential',
    description: 'I invite you on a transformative journey of self-discovery and personal growth. During the workshops, I combine ancient wisdom with modern development techniques, creating a space for deep transformation and growth.',
    details: {
      duration: '3 hours',
      participants: '6-12 people',
      frequency: 'Weekly',
      location: 'Warsaw Center'
    },
    benefits: [
      'Discovering and strengthening your potential',
      'Working with limiting beliefs',
      'Developing intuition and awareness',
      'Meditation and mindfulness techniques',
      'Emotional management tools',
      'Grounding and centering practices'
    ],
    workshops: [
      {
        title: 'Foundations of Conscious Living',
        description: 'Introduction to mindfulness practices and self-awareness techniques.',
        duration: '3 hours',
        price: '€69'
      },
      {
        title: 'Belief Transformation',
        description: 'Identifying and transforming limiting thought patterns.',
        duration: '3 hours',
        price: '€69'
      },
      {
        title: 'Intuition Development',
        description: 'Deepening connection with inner wisdom.',
        duration: '3 hours',
        price: '€69'
      }
    ],
    cta: 'Book your spot',
    included: 'Workshop includes',
    includedItems: [
      'Training materials',
      'Certificate of participation',
      'Tea and snacks',
      'Individual consultation'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      <div className="container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.subtitle}
            </p>
            <p className="text-lg text-gray-600">
              {content.description}
            </p>
          </div>

          {/* Workshop Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <MysticCard className="p-4 text-center">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.duration}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.participants}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.frequency}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.location}</p>
            </MysticCard>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6">
              Korzyści z warsztatów
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6">
              Dostępne warsztaty
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.workshops.map((workshop, index) => (
                <MysticCard key={index} className="p-6">
                  <h3 className="text-xl font-heading text-primary mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {workshop.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gray-500 text-sm">
                      {workshop.duration}
                    </span>
                    <span className="text-primary font-semibold">
                      {workshop.price}
                    </span>
                  </div>
                </MysticCard>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6">
              {content.included}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.includedItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="primary"
              onClick={() => window.open('https://wa.me/48535448582', '_blank')}
              className="px-8 py-3 text-lg"
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDevelopment;