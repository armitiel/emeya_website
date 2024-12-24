import React from 'react';
import TestimonialCard from './cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const { language, t } = useLanguage();
  const currentTestimonials = testimonials[language];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <SectionTitle
          title={t('testimonialsTitle')}
          description={t('testimonialsDescription')}
        />

        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons - Positioned outside on larger screens, inside on mobile */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors disabled:opacity-50 z-10"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors disabled:opacity-50 z-10"
            disabled={activeIndex === currentTestimonials.length - 1}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Testimonial Slider */}
          <div className="overflow-hidden px-4 sm:px-0">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {currentTestimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {currentTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;