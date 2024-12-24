import React from 'react';
import { Book } from 'lucide-react';

interface WisdomHeaderProps {
  title: string;
  subtitle: string;
}

const WisdomHeader: React.FC<WisdomHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="flex justify-center mb-6">
        <Book className="w-16 h-16 text-primary" />
      </div>
      <h1 className="text-5xl font-heading text-primary mb-6">{title}</h1>
      <p className="text-lg text-gray-600 font-body">{subtitle}</p>
    </div>
  );
}

export default WisdomHeader;