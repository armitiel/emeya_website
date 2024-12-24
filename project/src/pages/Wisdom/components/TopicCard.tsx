import React from 'react';
import { MysticCard } from '../../../components/ui/MysticCard';
import AnimatedBook from '../../../components/ui/AnimatedBook';

interface TopicCardProps {
  title: string;
  imageUrl: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, imageUrl }) => {
  return (
    <MysticCard className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        
        {/* Floating Book Icon */}
        <div className="absolute top-4 right-4 transform transition-transform duration-500 group-hover:rotate-12">
          <AnimatedBook size={32} />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-heading text-white mb-2">{title}</h3>
      </div>
    </MysticCard>
  );
}

export default TopicCard;