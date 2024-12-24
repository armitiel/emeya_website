import React, { useState } from 'react';
import { Calendar, Clock, Globe, X } from 'lucide-react';
import { BlogPost } from '../../../types/blog';
import { useLanguage } from '../../../contexts/LanguageContext';

interface BlogCardProps {
  post: BlogPost;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isExpanded, onExpand, onCollapse }) => {
  const { language } = useLanguage();
  const [showEnglish, setShowEnglish] = useState(false);

  const hasTranslation = Boolean(post.titleEn && post.excerptEn);

  const toggleLanguage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasTranslation) {
      setShowEnglish(!showEnglish);
    }
  };

  const title = showEnglish && post.titleEn ? post.titleEn : post.title;
  const excerpt = showEnglish && post.excerptEn ? post.excerptEn : post.excerpt;
  const readMore = language === 'pl' ? 'Czytaj więcej' : 'Read more';
  const close = language === 'pl' ? 'Zamknij' : 'Close';

  const cardClasses = isExpanded
    ? 'fixed inset-0 z-50 bg-white overflow-y-auto'
    : 'bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative';

  return (
    <article className={cardClasses} onClick={!isExpanded ? onExpand : undefined}>
      <div className={isExpanded ? 'max-w-4xl mx-auto p-6' : ''}>
        <div className={`relative ${isExpanded ? 'h-96' : 'h-48'} overflow-hidden group`}>
          <img
            src={post.imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {isExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCollapse();
            }}
            className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50"
            aria-label={close}
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        )}

        <div className={`p-6 ${isExpanded ? 'max-w-3xl mx-auto' : ''}`}>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min
            </div>
          </div>

          <div className="relative">
            <h2 className={`font-heading text-primary mb-2 ${isExpanded ? 'text-3xl' : 'text-xl'}`}>
              {title}
            </h2>
            <p className={`text-gray-600 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {excerpt}
            </p>
          </div>

          {!isExpanded && (
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExpand();
                }}
                className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
              >
                {readMore} →
              </button>
              
              {hasTranslation && (
                <button
                  onClick={toggleLanguage}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 
                    ${showEnglish 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                    }
                    flex items-center space-x-1`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{showEnglish ? 'EN' : 'PL'}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;