import React from 'react';
import { MysticCard } from '../../ui/MysticCard';
import { Clock, Tag } from 'lucide-react';
import type { WisdomArticle } from '../../../types/wisdom';
import { useLanguage } from '../../../contexts/LanguageContext';
import AnimatedBook from '../../ui/AnimatedBook';
import { useInView } from '../../../hooks/useInView';
import { navigate } from '../../../utils/navigation';

interface WisdomCardProps extends WisdomArticle {
  index: number;
}

const WisdomCard: React.FC<WisdomCardProps> = ({
  title,
  excerpt,
  category,
  readTime,
  index,
}) => {
  const { language } = useLanguage();
  const readMore = language === 'pl' ? 'Czytaj więcej' : 'Read more';
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const delay = index * 150;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/wisdom');
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out
                  ${isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <MysticCard className="flex flex-col h-full w-full max-w-xs overflow-hidden rounded-xl 
                          bg-white shadow-md hover:shadow-lg transition-all duration-300">
        {/* Book Icon Container */}
        <div className="relative h-32 overflow-hidden group bg-gradient-to-b from-primary/5 to-transparent
                      flex items-center justify-center">
          <AnimatedBook size={64} />
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
            <div className="flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {readTime} min
            </div>
          </div>
          
          <h3 className="text-xl font-heading font-bold text-primary mb-3 line-clamp-2 text-center
                       leading-tight tracking-wide hover:text-primary-dark transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 font-body mb-8 line-clamp-3 text-center">
            {excerpt}
          </p>
          
          <div className="mt-auto pt-4 flex justify-center border-t border-gray-100">
            <button 
              className="text-sm text-primary hover:text-primary-dark font-medium 
                       inline-flex items-center transition-all duration-300 
                       hover:translate-x-1"
              onClick={handleClick}
            >
              {readMore} →
            </button>
          </div>
        </div>
      </MysticCard>
    </div>
  );
};

export default WisdomCard;