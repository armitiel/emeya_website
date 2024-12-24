import React from 'react';
import TopicCard from './TopicCard';

interface TopicGridProps {
  topics: string[];
}

// Curated list of mystical book-related images
const topicImages = [
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80'
];

const TopicGrid: React.FC<TopicGridProps> = ({ topics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {topics.map((topic, index) => (
        <TopicCard
          key={index}
          title={topic}
          imageUrl={topicImages[index % topicImages.length]}
        />
      ))}
    </div>
  );
}

export default TopicGrid;