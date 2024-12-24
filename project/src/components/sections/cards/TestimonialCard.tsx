import React from 'react';
import { MysticCard } from '../../ui/MysticCard';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../../../types/testimonials';

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  imageUrl,
  imagePosition = 'center'
}) => {
  return (
    <MysticCard className="mx-auto max-w-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={imageUrl}
            alt={author}
            className={`w-full h-full object-cover transition-transform duration-500 
                       hover:scale-110 hover:filter hover:drop-shadow-[0_0_15px_rgba(132,107,185,0.3)]
                       object-${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <div className="relative mb-6">
            <Quote className="w-12 h-12 text-primary/20 absolute -top-4 -left-2" />
            <p className="text-lg text-gray-600 font-body italic relative z-10 pl-6">
              {content}
            </p>
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl font-heading text-primary mb-1">
              {author}
            </h3>
            <p className="text-sm text-gray-500 font-body">
              {role}
            </p>
          </div>
        </div>
      </div>
    </MysticCard>
  );
};

export default TestimonialCard;