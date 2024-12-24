import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MysticCard } from '../../components/ui/MysticCard';
import { Leaf, Clock, Star, Heart, CheckCircle, Calendar } from 'lucide-react';
import Button from '../../components/ui/Button';

const NaturalMedicine = () => {
  const { language } = useLanguage();

  const content = language === 'pl' ? {
    title: 'Medycyna Naturalna',
    subtitle: 'Holistyczne podejście do zdrowia i dobrostanu',
    description: 'Oferuję kompleksowe podejście do zdrowia, łączące starożytną mądrość z nowoczesnymi metodami naturalnymi. Każda sesja jest dostosowana do indywidualnych potrzeb, wspierając naturalne procesy uzdrawiania organizmu.',
    details: {
      duration: '60-90 minut',
      approach: 'Indywidualne podejście',
      experience: '10+ lat doświadczenia',
      methods: 'Naturalne metody'
    },
    mainServices: [
      {
        title: 'Ziołolecznictwo',
        description: 'Spersonalizowane mieszanki ziołowe i naturalne suplementy dostosowane do Twoich potrzeb.',
        duration: '60 min',
        price: '250 PLN'
      },
      {
        title: 'Akupresura',
        description: 'Stymulacja punktów energetycznych dla przywrócenia równowagi w organizmie.',
        duration: '90 min',
        price: '300 PLN'
      },
      {
        title: 'Aromaterapia',
        description: 'Terapeutyczne wykorzystanie olejków eterycznych dla zdrowia fizycznego i emocjonalnego.',
        duration: '60 min',
        price: '200 PLN'
      }
    ],
    benefits: [
      'Wzmocnienie naturalnej odporności organizmu',
      'Redukcja stresu i napięcia',
      'Poprawa jakości snu i regeneracji',
      'Wsparcie w procesach detoksykacji',
      'Równoważenie układu hormonalnego',
      'Łagodzenie dolegliwości przewlekłych'
    ],
    approach: [
      {
        title: 'Diagnoza',
        description: 'Szczegółowy wywiad i analiza stanu zdrowia'
      },
      {
        title: 'Plan leczenia',
        description: 'Indywidualnie dopasowany program terapeutyczny'
      },
      {
        title: 'Naturalne metody',
        description: 'Wykorzystanie ziół, akupresury i aromaterapii'
      },
      {
        title: 'Monitoring',
        description: 'Regularna ocena postępów i dostosowanie terapii'
      }
    ],
    included: [
      'Konsultacja wstępna',
      'Spersonalizowany plan terapii',
      'Zalecenia dotyczące stylu życia',
      'Wsparcie między sesjami'
    ],
    cta: 'Umów konsultację'
  } : {
    // English content...
    title: 'Natural Medicine',
    subtitle: 'Holistic approach to health and wellbeing',
    description: 'I offer a comprehensive approach to health, combining ancient wisdom with modern natural methods. Each session is tailored to individual needs, supporting the body\'s natural healing processes.',
    details: {
      duration: '60-90 minutes',
      approach: 'Individual approach',
      experience: '10+ years experience',
      methods: 'Natural methods'
    },
    mainServices: [
      {
        title: 'Herbal Medicine',
        description: 'Personalized herbal blends and natural supplements tailored to your needs.',
        duration: '60 min',
        price: '€60'
      },
      {
        title: 'Acupressure',
        description: 'Stimulation of energy points to restore balance in the body.',
        duration: '90 min',
        price: '€75'
      },
      {
        title: 'Aromatherapy',
        description: 'Therapeutic use of essential oils for physical and emotional health.',
        duration: '60 min',
        price: '€50'
      }
    ],
    benefits: [
      'Strengthening natural immunity',
      'Stress and tension reduction',
      'Improved sleep quality and regeneration',
      'Support in detoxification processes',
      'Balancing hormonal system',
      'Alleviating chronic conditions'
    ],
    approach: [
      {
        title: 'Diagnosis',
        description: 'Detailed health interview and analysis'
      },
      {
        title: 'Treatment Plan',
        description: 'Individually tailored therapeutic program'
      },
      {
        title: 'Natural Methods',
        description: 'Use of herbs, acupressure, and aromatherapy'
      },
      {
        title: 'Monitoring',
        description: 'Regular progress assessment and therapy adjustment'
      }
    ],
    included: [
      'Initial consultation',
      'Personalized therapy plan',
      'Lifestyle recommendations',
      'Support between sessions'
    ],
    cta: 'Book Consultation'
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

          {/* Service Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <MysticCard className="p-4 text-center">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.duration}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.approach}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.experience}</p>
            </MysticCard>
            <MysticCard className="p-4 text-center">
              <Leaf className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-gray-600">{content.details.methods}</p>
            </MysticCard>
          </div>

          {/* Main Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6 text-center">
              Główne Metody Terapeutyczne
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.mainServices.map((service, index) => (
                <MysticCard key={index} className="p-6">
                  <h3 className="text-xl font-heading text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                    <span className="text-primary font-semibold">
                      {service.price}
                    </span>
                  </div>
                </MysticCard>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6">
              Korzyści z Terapii
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

          {/* Approach */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6 text-center">
              Proces Terapeutyczny
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {content.approach.map((step, index) => (
                <MysticCard key={index} className="p-4 text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </MysticCard>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading text-primary mb-6">
              W ramach terapii
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.included.map((item, index) => (
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

export default NaturalMedicine;