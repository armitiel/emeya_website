import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MysticCard } from '../../components/ui/MysticCard';
import { Heart, Star, Sun } from 'lucide-react';
import ProfileImage from './ProfileImage';

const About = () => {
  const { language } = useLanguage();
  
  const content = language === 'pl' ? {
    quote: '"Witaj, jestem Emeya - przewodniczka duchowa i terapeutka holistyczna."',
    description: 'Z głęboką pasją i wieloletnim doświadczeniem prowadzę innych przez ścieżki duchowego rozwoju i wewnętrznej transformacji. Łącząc starożytną mądrość z nowoczesnymi praktykami terapeutycznymi, tworzę przestrzeń, w której możesz odkryć swoją prawdziwą esencję i pełnię potencjału.',
    mission: 'Moją misją jest wspieranie innych w odnajdywaniu wewnętrznej siły, harmonii i autentyczności. Wierzę, że każdy z nas nosi w sobie niezwykłą moc, która czeka na przebudzenie.',
    values: [
      {
        icon: Heart,
        title: 'Empatia',
        description: 'Tworzę bezpieczną przestrzeń dla Twojego rozwoju i transformacji.'
      },
      {
        icon: Star,
        title: 'Doświadczenie',
        description: 'Łączę starożytną mądrość z nowoczesnymi metodami terapeutycznymi.'
      },
      {
        icon: Sun,
        title: 'Holistyczne Podejście',
        description: 'Pracuję z całością: ciałem, umysłem i duchem.'
      }
    ]
  } : {
    quote: '"Hello, I am Emeya - a spiritual guide and holistic therapist."',
    description: 'With deep passion and years of experience, I guide others through paths of spiritual development and inner transformation. Combining ancient wisdom with modern therapeutic practices, I create a space where you can discover your true essence and full potential.',
    mission: 'My mission is to support others in finding inner strength, harmony, and authenticity. I believe that each of us carries within us an extraordinary power waiting to be awakened.',
    values: [
      {
        icon: Heart,
        title: 'Empathy',
        description: 'I create a safe space for your growth and transformation.'
      },
      {
        icon: Star,
        title: 'Experience',
        description: 'I combine ancient wisdom with modern therapeutic methods.'
      },
      {
        icon: Sun,
        title: 'Holistic Approach',
        description: 'I work with the whole: body, mind, and spirit.'
      }
    ]
  };

  return (
    <section id="about" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-3xl font-heading text-primary mb-8 leading-relaxed">
            {content.quote}
          </p>
          <p className="text-lg text-gray-600 font-body mb-8">
            {content.description}
          </p>
          <p className="text-lg text-gray-700 font-body italic">
            {content.mission}
          </p>
        </div>

        {/* Profile Image */}
        <ProfileImage />

        {/* Values section */}
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {content.values.map((value, index) => (
              <MysticCard key={index} className="p-4 text-center">
                <value.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="text-lg font-heading text-primary mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 font-body">
                  {value.description}
                </p>
              </MysticCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;